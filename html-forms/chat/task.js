const chatWidget = document.querySelector(".chat-widget");
const chatWidgetInput = document.querySelector(".chat-widget__input");
const chatWidgetMessagesContainer = document.querySelector(".chat-widget__messages");
const botMessage = document.querySelectorAll(".message__text");

const arrForBotMessage = Array.from(botMessage);

let now = new Date().toLocaleTimeString().slice(0,-3);

function arrayRandElement() {
  let randomBotMessage = Math.floor(Math.random() * arrForBotMessage.length);
  return arrForBotMessage[randomBotMessage].textContent;
}

const openChatWidget = () => {
  chatWidget.classList.add("chat-widget_active");
}

const userMsg = (e) => {
  if(e.keyCode == 13 && chatWidgetInput.value !== "") {
    chatWidgetMessagesContainer.innerHTML += `
    <div class="message message_client">
      <div class="message__time">${now}</div>
      <div class="message__text">
        ${chatWidgetInput.value}
      </div>
    </div>
    `;
    chatWidgetMessagesContainer.innerHTML += `
    <div class="message">
      <div class="message__time">${now}</div>
      <div class="message__text">
        ${arrayRandElement()}
      </div>
    </div>
    ${chatWidgetInput.value = ""}
    `;
  }
}

chatWidget.addEventListener("click", openChatWidget);

chatWidgetInput.addEventListener("keyup", userMsg)