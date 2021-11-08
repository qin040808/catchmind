(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleNewMessage = void 0;

var _sockets = require("./sockets");

var messages = document.getElementById("jsMessages");
var sendMsg = document.getElementById("jsSendMsg");

var appendMsg = function appendMsg(text, nickname) {
  var li = document.createElement("li");
  li.innerHTML = "\n        <span class=\"author ".concat(nickname ? "out" : "self", "\">").concat(nickname ? nickname : "You", ":</span> ").concat(text, "\n    ");
  messages.appendChild(li);
};

var handleSendMsg = function handleSendMsg(event) {
  event.preventDefault();
  var input = sendMsg.querySelector("input");
  var value = input.value;
  input.value = "";
  (0, _sockets.getSocket)().emit(window.events.sendMsg, {
    message: value
  });
  appendMsg(value);
};

var handleNewMessage = function handleNewMessage(_ref) {
  var message = _ref.message,
      nickname = _ref.nickname;
  appendMsg(message, nickname);
};

exports.handleNewMessage = handleNewMessage;

if (sendMsg) {
  sendMsg.addEventListener("submit", handleSendMsg);
}

},{"./sockets":5}],2:[function(require,module,exports){
"use strict";

var _sockets = require("./sockets");

var body = document.querySelector("body");
var loginForm = document.getElementById("jsLogin");
var LOGGED_OUT = "loggedOut";
var LOGGED_IN = "loggedIn";
var NICKNAME = "nickname";

var logIn = function logIn(nickname) {
  var socket = io("/");
  socket.emit(window.events.setNickname, {
    nickname: nickname
  });
  (0, _sockets.initSockets)(socket);
};

var nickname = localStorage.getItem(NICKNAME);
console.log(window.events);

if (nickname === null) {
  body.className = LOGGED_OUT;
} else {
  body.className = LOGGED_IN;
  logIn(nickname);
}

var handleFormSubmit = function handleFormSubmit(event) {
  event.preventDefault();
  var input = loginForm.querySelector("input");
  localStorage.setItem(NICKNAME, input.value);
  body.className = LOGGED_IN;
  logIn(input.value);
};

if (loginForm) {
  loginForm.addEventListener("submit", handleFormSubmit);
}

},{"./sockets":5}],3:[function(require,module,exports){
"use strict";

require("./login");

require("./sockets");

require("./chat");

},{"./chat":1,"./login":2,"./sockets":5}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleNewUser = exports.handleDisconnected = void 0;
var notice = document.querySelector("body");

var fireNotice = function fireNotice(text, color) {
  var n = document.createElement("div");
  n.innerText = text;
  n.style.backgroundColor = color;
  n.className = "notification";
  notice.appendChild(n);
};

var handleNewUser = function handleNewUser(_ref) {
  var nickname = _ref.nickname;
  fireNotice("".concat(nickname, " has joined."), "rgb(0,122,255)");
};

exports.handleNewUser = handleNewUser;

var handleDisconnected = function handleDisconnected(_ref2) {
  var nickname = _ref2.nickname;
  fireNotice("".concat(nickname, " left."), "rgb(255,149,0)");
};

exports.handleDisconnected = handleDisconnected;

},{}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initSockets = exports.getSocket = void 0;

var _notifications = require("./notifications");

var _chat = require("./chat");

var socket = null;

var getSocket = function getSocket() {
  return socket;
};

exports.getSocket = getSocket;

var initSockets = function initSockets(aSocket) {
  var _window = window,
      events = _window.events;
  socket = aSocket;
  aSocket.on(events.newUser, _notifications.handleNewUser);
  aSocket.on(events.disconnected, _notifications.handleDisconnected);
  socket.on(events.newMsg, _chat.handleNewMessage);
};

exports.initSockets = initSockets;

},{"./chat":1,"./notifications":4}]},{},[3]);
