const notice = document.getElementById("jsNotifications");

const fireNotice = (text) => {
    const n = document.createElement("div");
    n.innerText = text;
    n.className = "notification";
    notice.appendChild(n);
}

export const handleNewUser = ({nickname}) => {
    fireNotice(`${nickname} has joined.`);
}
export const handleDisconnected = ({nickname}) => {
    fireNotice(`${nickname} left.`);
}