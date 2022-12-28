const CHAT_RESPONSES = [
  "If someone makes you happy, make them happier",
  "Be like a sunflower: keep your face toward the sunshine and shadows will fall behind you",
  "You are enough just as you are",
  "Friends are a gift you give yourself",
  `Life is what you “bake” of it`,
  "A circle is round, it has no end, that’s how long I want to be your friend",
  "You’re the spider monkey to my Edward <3",
  "Life is like a bicycle, to keep your balance, you just keep moving!",
  "Believe you can and you're halfway there!",
  "A winner is a dreamer who never gave up!",
  "Be yourself, everyone else is already taken (plus you rock).",
  "Keep going & keep growing, you got this!",
  "Daily reminder to know your worth!",
];

const input = document.getElementById("chatInput");
const sentButton = document.getElementById("chatSend");
const chat = document.getElementById("chat");

const messageClass = "message";
const messageTextOnlyClass = "message text-only";
const responseClass = "response";
const textClass = "text";
const photoClass = "photo";

function getRandomMessage() {
  randIdx = Math.floor(Math.random() * CHAT_RESPONSES.length);
  return CHAT_RESPONSES[randIdx];
}

function generateMessageElement(message) {
  const messageWrapper = document.createElement("div");
  messageWrapper.className = messageTextOnlyClass;

  const responseWrapper = document.createElement("div");
  responseWrapper.className = responseClass;

  const text = document.createElement("p");
  text.className = textClass;
  text.innerHTML = message;

  responseWrapper.appendChild(text);
  messageWrapper.appendChild(responseWrapper);
  return messageWrapper;
}

function generateChristineMessageElement(message) {
  const messageWrapper = document.createElement("div");
  messageWrapper.className = messageClass;

  const photo = document.createElement("div");
  photo.className = photoClass;

  const text = document.createElement("p");
  text.className = textClass;
  text.innerHTML = message;

  messageWrapper.appendChild(photo);
  messageWrapper.appendChild(text);
  return messageWrapper;
}

function handleInput() {
  message = input.value;
  if (!message || message == "") return;

  input.value = "";

  const messageChat = generateMessageElement(message);
  chat.appendChild(messageChat);
  messageChat.scrollIntoView();

  setTimeout(function () {
    const responseChat = generateChristineMessageElement(getRandomMessage());
    chat.appendChild(responseChat);
    responseChat.scrollIntoView();
  }, 1000);
}

sentButton.addEventListener("click", handleInput);
input.addEventListener("keyup", function (event) {
  if (event.key === "Enter") handleInput();
});
