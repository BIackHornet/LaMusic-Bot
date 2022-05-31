import MessageLogger from "../utils/messages.js";

const once = true;
const name = 'ready';

async function invoke(client) {
  MessageLogger.infoMessage('MoldyBot has started and is now awaiting commands.');
}

export { once, name, invoke };