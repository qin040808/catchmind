const notice = document.querySelector("body");

const fireNotice = (text, color) => {
    const n = document.createElement("div");
    n.innerText = text;
    n.style.backgroundColor = color;
    n.className = "notification";
    notice.appendChild(n);
}

export const handleNewUser = ({nickname}) => {
    fireNotice(`${nickname} has joined.`, "rgb(0,122,255)");
}
export const handleDisconnected = ({nickname}) => {
    fireNotice(`${nickname} left.`, "rgb(255,149,0)");
}