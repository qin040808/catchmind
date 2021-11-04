export function handleMessageNotice(data) {
    const { message, nickname } = data;
    console.log(`${nickname} said ${message}`);
  }
