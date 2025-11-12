"use strict";var AivoChatbot=(()=>{var o=class{constructor(t){this.messageHistory=[];this.currentNodeId="welcome";this.chatData=t}getCurrentNode(){return this.chatData[this.currentNodeId]}selectOption(t){let e=this.chatData[t];return e?e.type==="redirect"&&e.id!==t?(this.currentNodeId=e.id,this.chatData[e.id]):(this.currentNodeId=t,e):(console.error(`Node ${t} not found`),this.chatData.welcome)}addMessage(t){this.messageHistory.push(t)}getHistory(){return this.messageHistory}reset(){this.currentNodeId="welcome",this.messageHistory=[]}hasHistory(){return this.messageHistory.length>0}};var s=class{constructor(t){this.config=t;this.container=null;this.chatWindow=null;this.messagesContainer=null;this.floatingButton=null}init(){this.createFloatingButton(),this.createChatWindow()}createFloatingButton(){this.floatingButton=document.createElement("div"),this.floatingButton.id="aivo-chatbot-button",this.floatingButton.innerHTML=`
      <img src="${this.config.iconUrl}" alt="AIVO Chatbot" />
      <div class="aivo-chat-badge">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>
      </div>
    `,document.body.appendChild(this.floatingButton)}createChatWindow(){this.container=document.createElement("div"),this.container.id="aivo-chatbot-container",this.container.className="aivo-chatbot-hidden",this.container.innerHTML=`
      <div class="aivo-chatbot-window">
        <div class="aivo-chatbot-header">
          <div class="aivo-chatbot-header-content">
            <img src="${this.config.iconUrl}" alt="AIVO" class="aivo-chatbot-avatar" />
            <div class="aivo-chatbot-header-text">
              <span class="aivo-chatbot-title">MOTTAIN-AI ChatBot</span>
              <span class="aivo-chatbot-status">\u30AA\u30F3\u30E9\u30A4\u30F3</span>
            </div>
          </div>
          <div class="aivo-chatbot-header-actions">
            <button class="aivo-chatbot-reset" id="aivo-chatbot-reset" title="\u4F1A\u8A71\u3092\u30EA\u30BB\u30C3\u30C8">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path>
                <path d="M21 3v5h-5"></path>
                <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path>
                <path d="M3 21v-5h5"></path>
              </svg>
            </button>
            <button class="aivo-chatbot-close" id="aivo-chatbot-close" title="\u9589\u3058\u308B">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>
        <div class="aivo-chatbot-messages" id="aivo-chatbot-messages"></div>
        <div class="aivo-chatbot-footer">
          <span class="aivo-chatbot-footer-text">Powered by Meta Heroes</span>
        </div>
      </div>
    `,document.body.appendChild(this.container),this.messagesContainer=document.getElementById("aivo-chatbot-messages")}toggleChat(){if(!this.container)return;this.container.classList.contains("aivo-chatbot-hidden")?(this.container.classList.remove("aivo-chatbot-hidden"),this.container.classList.add("aivo-chatbot-visible"),this.floatingButton?.classList.add("aivo-chatbot-button-hidden")):(this.container.classList.remove("aivo-chatbot-visible"),this.container.classList.add("aivo-chatbot-hidden"),this.floatingButton?.classList.remove("aivo-chatbot-button-hidden"))}closeChat(){this.container&&(this.container.classList.remove("aivo-chatbot-visible"),this.container.classList.add("aivo-chatbot-hidden"),this.floatingButton?.classList.remove("aivo-chatbot-button-hidden"))}addBotMessage(t,e){if(!this.messagesContainer)return;let a=document.createElement("div");a.className="aivo-message aivo-message-bot";let i=document.createElement("div");i.className="aivo-message-bubble aivo-message-bubble-bot";let r=this.formatText(t);if(i.innerHTML=r,a.appendChild(i),this.messagesContainer.appendChild(a),e&&e.length>0){let c=this.createOptionsElement(e);this.messagesContainer.appendChild(c)}this.scrollToBottom()}addUserMessage(t){if(!this.messagesContainer)return;let e=document.createElement("div");e.className="aivo-message aivo-message-user";let a=document.createElement("div");a.className="aivo-message-bubble aivo-message-bubble-user",a.textContent=t,e.appendChild(a),this.messagesContainer.appendChild(e),this.scrollToBottom()}createOptionsElement(t){let e=document.createElement("div");return e.className="aivo-options-container",t.forEach(a=>{let i=document.createElement("button");i.className="aivo-option-button",i.dataset.optionId=a.id,i.innerHTML=`${a.icon?a.icon+" ":""}${a.label}`,e.appendChild(i)}),e}formatText(t){return t.replace(/\*\*(.*?)\*\*/g,"<strong>$1</strong>").replace(/\n\n/g,"</p><p>").replace(/\n/g,"<br>").replace(/^(.*)$/,"<p>$1</p>").replace(/<p><\/p>/g,"").replace(/^<p>(.*)<\/p>$/,"$1")}removeLastOptions(){if(!this.messagesContainer)return;let t=this.messagesContainer.querySelector(".aivo-options-container:last-child");t&&t.remove()}clearMessages(){this.messagesContainer&&(this.messagesContainer.innerHTML="")}scrollToBottom(){this.messagesContainer&&setTimeout(()=>{this.messagesContainer.scrollTop=this.messagesContainer.scrollHeight},100)}getFloatingButton(){return this.floatingButton}getCloseButton(){return document.getElementById("aivo-chatbot-close")}getMessagesContainer(){return this.messagesContainer}getResetButton(){return document.getElementById("aivo-chatbot-reset")}showTypingIndicator(){if(!this.messagesContainer)return;let t=document.createElement("div");t.className="aivo-message aivo-message-bot",t.id="aivo-typing-indicator";let e=document.createElement("div");e.className="aivo-message-bubble aivo-message-bubble-bot aivo-typing-bubble",e.innerHTML=`
      <div class="aivo-typing-dots">
        <span></span>
        <span></span>
        <span></span>
      </div>
    `,t.appendChild(e),this.messagesContainer.appendChild(t),this.scrollToBottom()}hideTypingIndicator(){let t=document.getElementById("aivo-typing-indicator");t&&t.remove()}};var l=class{constructor(t,e={}){this.chatData=t;this.config=e;this.isInitialized=!1;this.conversation=new o(t),this.ui=new s({iconUrl:e.iconUrl||"/chatbot/icon.png",primaryColor:e.primaryColor||"#FF0000"})}init(){this.isInitialized||(document.readyState==="loading"?document.addEventListener("DOMContentLoaded",()=>this.setup()):this.setup(),this.isInitialized=!0)}setup(){this.ui.init(),this.attachEventListeners(),this.showWelcomeMessage()}attachEventListeners(){let t=this.ui.getFloatingButton();t&&t.addEventListener("click",()=>{this.ui.toggleChat()});let e=this.ui.getCloseButton();e&&e.addEventListener("click",()=>{this.ui.closeChat()});let a=this.ui.getResetButton();a&&a.addEventListener("click",()=>{this.reset()});let i=this.ui.getMessagesContainer();i&&i.addEventListener("click",r=>{let n=r.target.closest(".aivo-option-button");n&&n.dataset.optionId&&this.handleOptionClick(n.dataset.optionId,n.textContent||"")})}showWelcomeMessage(){let t=this.conversation.getCurrentNode();t&&t.text&&this.ui.addBotMessage(t.text,t.options)}handleOptionClick(t,e){this.ui.removeLastOptions();let a=e.trim();this.ui.addUserMessage(a),this.ui.showTypingIndicator();let i=this.conversation.selectOption(t);setTimeout(()=>{this.ui.hideTypingIndicator(),i&&i.text&&this.ui.addBotMessage(i.text,i.options)},1e3)}reset(){this.conversation.reset(),this.ui.clearMessages(),this.showWelcomeMessage()}};var p={welcome:{id:"welcome",type:"message",text:`\u300C\u3042\u306A\u305F\u306E\u4F1A\u793E\u306E"\u30E2\u30C3\u30BF\u30A4\u30CA\u30A4"\u3092\u306A\u304F\u3059\u300D

\u682A\u5F0F\u4F1A\u793EMeta Heroes\u304C\u63D0\u4F9B\u3059\u308B\u300190\u65E5\u3067AI\u6D3B\u7528\u306B\u3088\u308B\u7D4C\u55B6\u5237\u65B0\u3092\u5B9F\u73FE\u3059\u308B\u30B5\u30FC\u30D3\u30B9\u306B\u3064\u3044\u3066\u3054\u6848\u5185\u3057\u307E\u3059\u3002

\u304A\u77E5\u308A\u306B\u306A\u308A\u305F\u3044\u5185\u5BB9\u3092\u9078\u629E\u3057\u3066\u304F\u3060\u3055\u3044\u3002`,options:[{id:"subsidy_overview",label:"\u52A9\u6210\u91D1\u5236\u5EA6\u306B\u3064\u3044\u3066"},{id:"pricing_overview",label:"\u4FA1\u683C\u30FB\u30D7\u30E9\u30F3\u306B\u3064\u3044\u3066"},{id:"plan90_overview",label:"90\u65E5\u30D7\u30E9\u30F3\u306E\u8A73\u7D30"},{id:"contact_overview",label:"\u304A\u554F\u3044\u5408\u308F\u305B"}]},subsidy_overview:{id:"subsidy_overview",type:"message",text:`**\u52A9\u6210\u91D1\u5236\u5EA6\u306E\u3054\u6848\u5185**

\u4EBA\u6750\u958B\u767A\u652F\u63F4\u52A9\u6210\u91D1\u3092\u6D3B\u7528\u3059\u308B\u3053\u3068\u3067\u3001\u7814\u4FEE\u8CBB\u7528\u306E\u5927\u90E8\u5206\u3092\u88DC\u52A9\u91D1\u3067\u30AB\u30D0\u30FC\u3067\u304D\u307E\u3059\u3002

\u4F01\u696D\u898F\u6A21\u306B\u3088\u3063\u3066\u88DC\u52A9\u7387\u304C\u7570\u306A\u308A\u307E\u3059\u3002`,options:[{id:"subsidy_sme",label:"\u4E2D\u5C0F\u4F01\u696D\u306E\u5834\u5408\uFF0875%\u88DC\u52A9\uFF09"},{id:"subsidy_large",label:"\u5927\u4F01\u696D\u306E\u5834\u5408\uFF0860%\u88DC\u52A9\uFF09"},{id:"subsidy_calculation",label:"\u5B9F\u8CEA\u8CA0\u62C5\u984D\u306E\u30B7\u30DF\u30E5\u30EC\u30FC\u30B7\u30E7\u30F3"},{id:"back_to_main",label:"\u30E1\u30A4\u30F3\u30E1\u30CB\u30E5\u30FC\u306B\u623B\u308B"}]},subsidy_sme:{id:"subsidy_sme",type:"message",text:`**\u4E2D\u5C0F\u4F01\u696D\u5411\u3051\u52A9\u6210\u91D1**

\u2022 \u88DC\u52A9\u7387\uFF1A\u7D4C\u8CBB\u306E **75%**
\u2022 \u4E0A\u9650\u984D\uFF1A**30\u4E07\u5186/\u4EBA**

\u4F8B\uFF09\u5E79\u90E8\u5C64\u5411\u3051AI\u6D3B\u7528\u6280\u80FD\u7814\u4FEE\uFF0840\u4E07\u5186/\u540D\uFF09\u306E\u5834\u5408
\u2192 \u52A9\u6210\u91D1\uFF1A30\u4E07\u5186
\u2192 \u5B9F\u8CEA\u8CA0\u62C5\uFF1A10\u4E07\u5186/\u540D`,options:[{id:"subsidy_calculation",label:"\u30D7\u30E9\u30F3\u5225\u306E\u5B9F\u8CEA\u8CA0\u62C5\u984D\u3092\u898B\u308B"},{id:"pricing_overview",label:"\u4FA1\u683C\u30FB\u30D7\u30E9\u30F3\u4E00\u89A7\u3092\u898B\u308B"},{id:"contact_overview",label:"\u304A\u554F\u3044\u5408\u308F\u305B\u3059\u308B"},{id:"back_to_main",label:"\u30E1\u30A4\u30F3\u30E1\u30CB\u30E5\u30FC\u306B\u623B\u308B"}]},subsidy_large:{id:"subsidy_large",type:"message",text:`**\u5927\u4F01\u696D\u5411\u3051\u52A9\u6210\u91D1**

\u2022 \u88DC\u52A9\u7387\uFF1A\u7D4C\u8CBB\u306E **60%**
\u2022 \u4E0A\u9650\u984D\uFF1A**20\u4E07\u5186/\u4EBA**

\u4F8B\uFF09\u5E79\u90E8\u5C64\u5411\u3051AI\u6D3B\u7528\u6280\u80FD\u7814\u4FEE\uFF0840\u4E07\u5186/\u540D\uFF09\u306E\u5834\u5408
\u2192 \u52A9\u6210\u91D1\uFF1A20\u4E07\u5186
\u2192 \u5B9F\u8CEA\u8CA0\u62C5\uFF1A20\u4E07\u5186/\u540D`,options:[{id:"subsidy_calculation",label:"\u30D7\u30E9\u30F3\u5225\u306E\u5B9F\u8CEA\u8CA0\u62C5\u984D\u3092\u898B\u308B"},{id:"pricing_overview",label:"\u4FA1\u683C\u30FB\u30D7\u30E9\u30F3\u4E00\u89A7\u3092\u898B\u308B"},{id:"contact_overview",label:"\u304A\u554F\u3044\u5408\u308F\u305B\u3059\u308B"},{id:"back_to_main",label:"\u30E1\u30A4\u30F3\u30E1\u30CB\u30E5\u30FC\u306B\u623B\u308B"}]},subsidy_calculation:{id:"subsidy_calculation",type:"message",text:`**\u52A9\u6210\u91D1\u9069\u7528\u5F8C\u306E\u5B9F\u8CEA\u8CA0\u62C5\u984D\uFF08\u4E2D\u5C0F\u4F01\u696D\u306E\u5834\u5408\uFF09**

\u3010\u304A\u305F\u3081\u30575\u4EBA\u30D7\u30E9\u30F3\u3011
\u901A\u5E38\uFF1A200\u4E07\u5186 \u2192 \u5B9F\u8CEA\uFF1A\u7D0450\u4E07\u5186

\u3010\u3053\u3060\u308F\u308A10\u4EBA\u30D7\u30E9\u30F3\u3011
\u901A\u5E38\uFF1A400\u4E07\u5186 \u2192 \u5B9F\u8CEA\uFF1A\u7D04100\u4E07\u5186

\u3010\u3088\u304F\u3070\u308A15\u4EBA\u30D7\u30E9\u30F3\u3011
\u901A\u5E38\uFF1A600\u4E07\u5186 \u2192 \u5B9F\u8CEA\uFF1A\u7D04200\u4E07\u5186

\u203B\u52A9\u6210\u91D1\u306F\u7533\u8ACB\u30FB\u5BE9\u67FB\u304C\u5FC5\u8981\u3067\u3059`,options:[{id:"pricing_overview",label:"\u5404\u30D7\u30E9\u30F3\u306E\u8A73\u7D30\u3092\u898B\u308B"},{id:"contact_overview",label:"\u52A9\u6210\u91D1\u7533\u8ACB\u306B\u3064\u3044\u3066\u76F8\u8AC7\u3059\u308B"},{id:"back_to_main",label:"\u30E1\u30A4\u30F3\u30E1\u30CB\u30E5\u30FC\u306B\u623B\u308B"}]},pricing_overview:{id:"pricing_overview",type:"message",text:`**\u4FA1\u683C\u30FB\u30D7\u30E9\u30F3\u4E00\u89A7**

3\u3064\u306E\u30D1\u30C3\u30B1\u30FC\u30B8\u30D7\u30E9\u30F3\u3068\u3001\u500B\u5225\u30B5\u30FC\u30D3\u30B9\u3092\u3054\u7528\u610F\u3057\u3066\u3044\u307E\u3059\u3002

\u307E\u305A\u306F\u3069\u3061\u3089\u3092\u3054\u89A7\u306B\u306A\u308A\u307E\u3059\u304B\uFF1F`,options:[{id:"package_plans",label:"\u30D1\u30C3\u30B1\u30FC\u30B8\u30D7\u30E9\u30F3\uFF085\u4EBA/10\u4EBA/15\u4EBA\uFF09"},{id:"service_individual",label:"\u500B\u5225\u30B5\u30FC\u30D3\u30B9\uFF08\u7814\u4FEE\u30FB\u30B3\u30F3\u30B5\u30EB\uFF09"},{id:"subsidy_overview",label:"\u52A9\u6210\u91D1\u5236\u5EA6\u3092\u78BA\u8A8D\u3059\u308B"},{id:"back_to_main",label:"\u30E1\u30A4\u30F3\u30E1\u30CB\u30E5\u30FC\u306B\u623B\u308B"}]},package_plans:{id:"package_plans",type:"message",text:`**\u30D1\u30C3\u30B1\u30FC\u30B8\u30D7\u30E9\u30F3\u4E00\u89A7**

\u52A9\u6210\u91D1\u9069\u7528\u5F8C\u306E\u5B9F\u8CEA\u8CA0\u62C5\u984D\u3082\u4F75\u8A18\u3057\u3066\u3044\u307E\u3059\u3002`,options:[{id:"plan_trial5",label:"\u304A\u305F\u3081\u30575\u4EBA\u30D7\u30E9\u30F3\uFF08200\u4E07\u5186\u2192\u7D0450\u4E07\u5186\uFF09"},{id:"plan_standard10",label:"\u3053\u3060\u308F\u308A10\u4EBA\u30D7\u30E9\u30F3\uFF08400\u4E07\u5186\u2192\u7D04100\u4E07\u5186\uFF09"},{id:"plan_premium15",label:"\u3088\u304F\u3070\u308A15\u4EBA\u30D7\u30E9\u30F3\uFF08600\u4E07\u5186\u2192\u7D04200\u4E07\u5186\uFF09"},{id:"pricing_overview",label:"\u4FA1\u683C\u30E1\u30CB\u30E5\u30FC\u306B\u623B\u308B"}]},plan_trial5:{id:"plan_trial5",type:"message",text:`**\u304A\u305F\u3081\u30575\u4EBA\u30D7\u30E9\u30F3**

\u3010\u5185\u5BB9\u3011
\u2022 \u7D4C\u55B6\u8005\u5411\u3051\u30D1\u30FC\u30BD\u30CA\u30EBAI\u30C8\u30EC\u30FC\u30CB\u30F3\u30B0 \xD7 1\u540D
\u2022 \u5E79\u90E8\u5C64\u5411\u3051AI\u6D3B\u7528\u6280\u80FD\u7814\u4FEE \xD7 5\u540D
\u2022 AI\u6D3B\u7528\u6226\u7565\u30B3\u30F3\u30B5\u30EB\u30C6\u30A3\u30F3\u30B0 \xD7 1\u30F6\u6708

\u3010\u4FA1\u683C\u3011
\u901A\u5E38\uFF1A200\u4E07\u5186\uFF08\u7A0E\u5225\uFF09
\u52A9\u6210\u91D1\u5F8C\uFF1A\u7D0450\u4E07\u5186\uFF08\u4E2D\u5C0F\u4F01\u696D\u306E\u5834\u5408\uFF09

\u3010\u5BFE\u8C61\u3011
AI\u5C0E\u5165\u3092\u691C\u8A0E\u4E2D\u306E\u4F01\u696D\u69D8\u5411\u3051`,options:[{id:"plan90_overview",label:"90\u65E5\u30D7\u30E9\u30F3\u306E\u6D41\u308C\u3092\u898B\u308B"},{id:"contact_overview",label:"\u3053\u306E\u30D7\u30E9\u30F3\u3067\u76F8\u8AC7\u3059\u308B"},{id:"package_plans",label:"\u4ED6\u306E\u30D7\u30E9\u30F3\u3092\u898B\u308B"},{id:"back_to_main",label:"\u30E1\u30A4\u30F3\u30E1\u30CB\u30E5\u30FC\u306B\u623B\u308B"}]},plan_standard10:{id:"plan_standard10",type:"message",text:`**\u3053\u3060\u308F\u308A10\u4EBA\u30D7\u30E9\u30F3**

\u3010\u5185\u5BB9\u3011
\u2022 \u7D4C\u55B6\u8005\u5411\u3051\u30D1\u30FC\u30BD\u30CA\u30EBAI\u30C8\u30EC\u30FC\u30CB\u30F3\u30B0 \xD7 1\u540D
\u2022 \u5E79\u90E8\u5C64\u5411\u3051AI\u6D3B\u7528\u6280\u80FD\u7814\u4FEE \xD7 10\u540D
\u2022 AI\u6D3B\u7528\u6226\u7565\u30B3\u30F3\u30B5\u30EB\u30C6\u30A3\u30F3\u30B0 \xD7 1\u30F6\u6708

\u3010\u4FA1\u683C\u3011
\u901A\u5E38\uFF1A400\u4E07\u5186\uFF08\u7A0E\u5225\uFF09
\u52A9\u6210\u91D1\u5F8C\uFF1A\u7D04100\u4E07\u5186\uFF08\u4E2D\u5C0F\u4F01\u696D\u306E\u5834\u5408\uFF09

\u3010\u5BFE\u8C61\u3011
\u672C\u683C\u7684\u306BAI\u6D3B\u7528\u3092\u9032\u3081\u305F\u3044\u4F01\u696D\u69D8\u5411\u3051`,options:[{id:"plan90_overview",label:"90\u65E5\u30D7\u30E9\u30F3\u306E\u6D41\u308C\u3092\u898B\u308B"},{id:"contact_overview",label:"\u3053\u306E\u30D7\u30E9\u30F3\u3067\u76F8\u8AC7\u3059\u308B"},{id:"package_plans",label:"\u4ED6\u306E\u30D7\u30E9\u30F3\u3092\u898B\u308B"},{id:"back_to_main",label:"\u30E1\u30A4\u30F3\u30E1\u30CB\u30E5\u30FC\u306B\u623B\u308B"}]},plan_premium15:{id:"plan_premium15",type:"message",text:`**\u3088\u304F\u3070\u308A15\u4EBA\u30D7\u30E9\u30F3**

\u3010\u5185\u5BB9\u3011
\u2022 \u7D4C\u55B6\u8005\u5411\u3051\u30D1\u30FC\u30BD\u30CA\u30EBAI\u30C8\u30EC\u30FC\u30CB\u30F3\u30B0 \xD7 1\u540D
\u2022 \u5E79\u90E8\u5C64\u5411\u3051AI\u6D3B\u7528\u6280\u80FD\u7814\u4FEE \xD7 15\u540D
\u2022 AI\u6D3B\u7528\u6226\u7565\u30B3\u30F3\u30B5\u30EB\u30C6\u30A3\u30F3\u30B0 \xD7 3\u30F6\u6708

\u3010\u4FA1\u683C\u3011
\u901A\u5E38\uFF1A600\u4E07\u5186\uFF08\u7A0E\u5225\uFF09
\u52A9\u6210\u91D1\u5F8C\uFF1A\u7D04200\u4E07\u5186\uFF08\u4E2D\u5C0F\u4F01\u696D\u306E\u5834\u5408\uFF09

\u3010\u5BFE\u8C61\u3011
\u82E5\u624B\u3092\u542B\u3080\u5168\u793E\u5C55\u958B\u3092\u76EE\u6307\u3059\u4F01\u696D\u69D8\u5411\u3051`,options:[{id:"plan90_overview",label:"90\u65E5\u30D7\u30E9\u30F3\u306E\u6D41\u308C\u3092\u898B\u308B"},{id:"contact_overview",label:"\u3053\u306E\u30D7\u30E9\u30F3\u3067\u76F8\u8AC7\u3059\u308B"},{id:"package_plans",label:"\u4ED6\u306E\u30D7\u30E9\u30F3\u3092\u898B\u308B"},{id:"back_to_main",label:"\u30E1\u30A4\u30F3\u30E1\u30CB\u30E5\u30FC\u306B\u623B\u308B"}]},service_individual:{id:"service_individual",type:"message",text:`**\u500B\u5225\u30B5\u30FC\u30D3\u30B9**

\u5FC5\u8981\u306A\u30B5\u30FC\u30D3\u30B9\u3092\u500B\u5225\u306B\u3054\u63D0\u4F9B\u3059\u308B\u3053\u3068\u3082\u53EF\u80FD\u3067\u3059\u3002`,options:[{id:"service_personal_training",label:"\u7D4C\u55B6\u8005\u5411\u3051\u30D1\u30FC\u30BD\u30CA\u30EBAI\u30C8\u30EC\u30FC\u30CB\u30F3\u30B0"},{id:"service_staff_training",label:"\u5E79\u90E8\u5C64\u5411\u3051AI\u6D3B\u7528\u6280\u80FD\u7814\u4FEE"},{id:"service_consulting",label:"AI\u6D3B\u7528\u6226\u7565\u30B3\u30F3\u30B5\u30EB\u30C6\u30A3\u30F3\u30B0"},{id:"pricing_overview",label:"\u4FA1\u683C\u30E1\u30CB\u30E5\u30FC\u306B\u623B\u308B"}]},service_personal_training:{id:"service_personal_training",type:"message",text:`**\u7D4C\u55B6\u8005\u5411\u3051\u30D1\u30FC\u30BD\u30CA\u30EBAI\u30C8\u30EC\u30FC\u30CB\u30F3\u30B0**

\u3010\u5185\u5BB9\u3011
\u2022 AI\u57FA\u790E\u77E5\u8B58\u306E\u7FD2\u5F97
\u2022 \u7523\u696D\u5909\u5316\u306E\u7406\u89E3
\u2022 \u6D3B\u7528\u4E8B\u4F8B\u306E\u5B66\u7FD2
\u2022 \u5C0E\u5165\u8A08\u753B\u8A2D\u8A08
\u2022 \u51688\u56DE\u306E\u30AA\u30F3\u30E9\u30A4\u30F3\u7814\u4FEE

\u3010\u4FA1\u683C\u3011
\xA5980,000\uFF08\u7A0E\u5225\uFF09

\u3010\u5F62\u5F0F\u3011
\u30AA\u30F3\u30E9\u30A4\u30F3\uFF081on1\u5F62\u5F0F\uFF09`,options:[{id:"plan90_overview",label:"90\u65E5\u30D7\u30E9\u30F3\u306E\u6D41\u308C\u3092\u898B\u308B"},{id:"contact_overview",label:"\u3053\u306E\u30B5\u30FC\u30D3\u30B9\u3067\u76F8\u8AC7\u3059\u308B"},{id:"service_individual",label:"\u4ED6\u306E\u30B5\u30FC\u30D3\u30B9\u3092\u898B\u308B"},{id:"back_to_main",label:"\u30E1\u30A4\u30F3\u30E1\u30CB\u30E5\u30FC\u306B\u623B\u308B"}]},service_staff_training:{id:"service_staff_training",type:"message",text:`**\u5E79\u90E8\u5C64\u5411\u3051AI\u6D3B\u7528\u6280\u80FD\u7814\u4FEE**

\u3010\u5185\u5BB9\u3011
\u2022 AI\u57FA\u790E\u77E5\u8B58
\u2022 \u30D7\u30ED\u30F3\u30D7\u30C8\u8A2D\u8A08\u6280\u8853
\u2022 \u696D\u52D9\u81EA\u52D5\u5316\u624B\u6CD5
\u2022 \u8CC7\u6599\u4F5C\u6210\u52B9\u7387\u5316
\u2022 \u5B9F\u8DF5\u7684\u306A\u30CF\u30F3\u30BA\u30AA\u30F3

\u3010\u4FA1\u683C\u3011
\xA5400,000/\u540D\uFF08\u7A0E\u8FBC\uFF09
\u203B\u52A9\u6210\u91D1\u5229\u7528\u3067\u6700\u592775%\u88DC\u52A9

\u3010\u5F62\u5F0F\u3011
\u96C6\u5408\u7814\u4FEE\u307E\u305F\u306F\u30AA\u30F3\u30E9\u30A4\u30F3`,options:[{id:"subsidy_overview",label:"\u52A9\u6210\u91D1\u306B\u3064\u3044\u3066\u8A73\u3057\u304F\u77E5\u308B"},{id:"contact_overview",label:"\u3053\u306E\u30B5\u30FC\u30D3\u30B9\u3067\u76F8\u8AC7\u3059\u308B"},{id:"service_individual",label:"\u4ED6\u306E\u30B5\u30FC\u30D3\u30B9\u3092\u898B\u308B"},{id:"back_to_main",label:"\u30E1\u30A4\u30F3\u30E1\u30CB\u30E5\u30FC\u306B\u623B\u308B"}]},service_consulting:{id:"service_consulting",type:"message",text:`**AI\u6D3B\u7528\u6226\u7565\u30B3\u30F3\u30B5\u30EB\u30C6\u30A3\u30F3\u30B0**

\u3010\u5185\u5BB9\u3011
\u2022 \u7D4C\u55B6\u6226\u7565\u3078\u306EAI\u7D44\u307F\u8FBC\u307F
\u2022 \u55B6\u696D\u529B\u5F37\u5316\u652F\u63F4
\u2022 \u65B0\u898F\u4E8B\u696D\u69CB\u7BC9\u652F\u63F4
\u2022 \u7D99\u7D9A\u7684\u306A\u4F34\u8D70\u652F\u63F4

\u3010\u4FA1\u683C\u3011
\xA5500,000/\u6708\uFF08\u7A0E\u5225\uFF09

\u3010\u671F\u9593\u3011
1\u30F6\u6708\u301C\uFF08\u63A8\u5968\uFF1A3\u30F6\u6708\u4EE5\u4E0A\uFF09`,options:[{id:"plan90_overview",label:"90\u65E5\u30D7\u30E9\u30F3\u306E\u6D41\u308C\u3092\u898B\u308B"},{id:"contact_overview",label:"\u3053\u306E\u30B5\u30FC\u30D3\u30B9\u3067\u76F8\u8AC7\u3059\u308B"},{id:"service_individual",label:"\u4ED6\u306E\u30B5\u30FC\u30D3\u30B9\u3092\u898B\u308B"},{id:"back_to_main",label:"\u30E1\u30A4\u30F3\u30E1\u30CB\u30E5\u30FC\u306B\u623B\u308B"}]},plan90_overview:{id:"plan90_overview",type:"message",text:`**90\u65E5\u30D7\u30E9\u30F3 - \u5168\u4F53\u30B9\u30B1\u30B8\u30E5\u30FC\u30EB**

90\u65E5\u9593\u3067\u3001AI\u6D3B\u7528\u306B\u3088\u308B\u7D4C\u55B6\u5237\u65B0\u3092\u5B9F\u73FE\u3057\u307E\u3059\u3002

\u5404\u30D5\u30A7\u30FC\u30BA\u306E\u8A73\u7D30\u3092\u3054\u89A7\u306B\u306A\u308A\u307E\u3059\u304B\uFF1F`,options:[{id:"plan90_schedule",label:"\u5168\u4F53\u30B9\u30B1\u30B8\u30E5\u30FC\u30EB\u3092\u898B\u308B"},{id:"plan90_phase1",label:"\u7B2C1\u30D5\u30A7\u30FC\u30BA\uFF081-30\u65E5\u76EE\uFF09"},{id:"plan90_phase2",label:"\u7B2C2\u30D5\u30A7\u30FC\u30BA\uFF0831-60\u65E5\u76EE\uFF09"},{id:"plan90_phase3",label:"\u7B2C3\u30D5\u30A7\u30FC\u30BA\uFF0861-90\u65E5\u76EE\uFF09"},{id:"back_to_main",label:"\u30E1\u30A4\u30F3\u30E1\u30CB\u30E5\u30FC\u306B\u623B\u308B"}]},plan90_schedule:{id:"plan90_schedule",type:"message",text:`**90\u65E5\u30D7\u30E9\u30F3 - \u30BF\u30A4\u30E0\u30E9\u30A4\u30F3**

**1\u65E5\u76EE**
\u7D4C\u55B6\u8005\u5411\u3051AI\u30C8\u30EC\u30FC\u30CB\u30F3\u30B0\u958B\u59CB

**15\u65E5\u76EE**
\u793E\u5185\u7814\u4FEE\u65B9\u91DD\u7B56\u5B9A

**31\u65E5\u76EE**
\u5E79\u90E8\u5C64\u5411\u3051\u7814\u4FEE\u958B\u59CB

**61\u65E5\u76EE**
\u81EA\u793EAI\u6226\u7565\u7B56\u5B9A\u958B\u59CB

**90\u65E5\u76EE**
\u5B9F\u884C\u6BB5\u968E\u3078\u79FB\u884C\u30FB\u53CE\u76CA\u6700\u5927\u5316\u652F\u63F4\u958B\u59CB`,options:[{id:"plan90_phase1",label:"\u7B2C1\u30D5\u30A7\u30FC\u30BA\u306E\u8A73\u7D30"},{id:"plan90_phase2",label:"\u7B2C2\u30D5\u30A7\u30FC\u30BA\u306E\u8A73\u7D30"},{id:"plan90_phase3",label:"\u7B2C3\u30D5\u30A7\u30FC\u30BA\u306E\u8A73\u7D30"},{id:"contact_overview",label:"\u8A73\u3057\u304F\u76F8\u8AC7\u3059\u308B"},{id:"back_to_main",label:"\u30E1\u30A4\u30F3\u30E1\u30CB\u30E5\u30FC\u306B\u623B\u308B"}]},plan90_phase1:{id:"plan90_phase1",type:"message",text:`**\u7B2C1\u30D5\u30A7\u30FC\u30BA\uFF081-30\u65E5\u76EE\uFF09**

**1\u65E5\u76EE\uFF1A\u7D4C\u55B6\u8005\u5411\u3051AI\u30C8\u30EC\u30FC\u30CB\u30F3\u30B0**
\u2022 AI\u306E\u57FA\u790E\u7406\u89E3
\u2022 \u6D3B\u7528\u4E8B\u4F8B\u306E\u5B66\u7FD2
\u2022 \u5C0E\u5165\u6226\u7565\u306E\u7FD2\u5F97

**15\u65E5\u76EE\uFF1A\u793E\u5185\u7814\u4FEE\u65B9\u91DD\u7B56\u5B9A**
\u2022 \u81EA\u793E\u306B\u6700\u9069\u306A\u7814\u4FEE\u8A08\u753B\u3092\u7B56\u5B9A
\u2022 \u5BFE\u8C61\u8005\u30FB\u30B9\u30B1\u30B8\u30E5\u30FC\u30EB\u306E\u6C7A\u5B9A

\u3010\u30B4\u30FC\u30EB\u3011
\u7D4C\u55B6\u5C64\u306EAI\u7406\u89E3\u3068\u793E\u5185\u5C55\u958B\u306E\u6E96\u5099\u5B8C\u4E86`,options:[{id:"plan90_phase2",label:"\u7B2C2\u30D5\u30A7\u30FC\u30BA\u3092\u898B\u308B"},{id:"plan90_schedule",label:"\u5168\u4F53\u30B9\u30B1\u30B8\u30E5\u30FC\u30EB\u306B\u623B\u308B"},{id:"contact_overview",label:"\u8A73\u3057\u304F\u76F8\u8AC7\u3059\u308B"},{id:"back_to_main",label:"\u30E1\u30A4\u30F3\u30E1\u30CB\u30E5\u30FC\u306B\u623B\u308B"}]},plan90_phase2:{id:"plan90_phase2",type:"message",text:`**\u7B2C2\u30D5\u30A7\u30FC\u30BA\uFF0831-60\u65E5\u76EE\uFF09**

**31\u65E5\u76EE\uFF1A\u5E79\u90E8\u5C64\u5411\u3051\u7814\u4FEE\u958B\u59CB**
\u2022 \u5E79\u90E8\u30FB\u7BA1\u7406\u8077\u304CAI\u3092\u5B9F\u52D9\u3067\u6D3B\u7528\u958B\u59CB
\u2022 \u30D7\u30ED\u30F3\u30D7\u30C8\u8A2D\u8A08\u30FB\u696D\u52D9\u81EA\u52D5\u5316\u306E\u7FD2\u5F97

**45\u65E5\u76EE\uFF1A\u5B9F\u8DF5\u30D5\u30A7\u30FC\u30BA**
\u2022 \u5404\u90E8\u9580\u3067\u306EAI\u6D3B\u7528\u63A8\u9032
\u2022 \u6210\u529F\u4E8B\u4F8B\u306E\u84C4\u7A4D

\u3010\u30B4\u30FC\u30EB\u3011
\u5E79\u90E8\u5C64\u304CAI\u3092\u4F7F\u3044\u3053\u306A\u305B\u308B\u72B6\u614B\u306B`,options:[{id:"plan90_phase3",label:"\u7B2C3\u30D5\u30A7\u30FC\u30BA\u3092\u898B\u308B"},{id:"plan90_schedule",label:"\u5168\u4F53\u30B9\u30B1\u30B8\u30E5\u30FC\u30EB\u306B\u623B\u308B"},{id:"contact_overview",label:"\u8A73\u3057\u304F\u76F8\u8AC7\u3059\u308B"},{id:"back_to_main",label:"\u30E1\u30A4\u30F3\u30E1\u30CB\u30E5\u30FC\u306B\u623B\u308B"}]},plan90_phase3:{id:"plan90_phase3",type:"message",text:`**\u7B2C3\u30D5\u30A7\u30FC\u30BA\uFF0861-90\u65E5\u76EE\uFF09**

**61\u65E5\u76EE\uFF1A\u81EA\u793EAI\u6226\u7565\u7B56\u5B9A\u958B\u59CB**
\u2022 \u7D4C\u55B6\u6226\u7565\u30FB\u4E8B\u696D\u6226\u7565\u306BAI\u3092\u7D44\u307F\u8FBC\u307F
\u2022 \u65B0\u898F\u4E8B\u696D\u69CB\u7BC9\u306E\u691C\u8A0E

**90\u65E5\u76EE\uFF1A\u5B9F\u884C\u6BB5\u968E\u3078\u79FB\u884C**
\u2022 \u53CE\u76CA\u6700\u5927\u5316\u306B\u5411\u3051\u305F\u7D99\u7D9A\u652F\u63F4\u958B\u59CB
\u2022 \u81EA\u8D70\u53EF\u80FD\u306A\u4F53\u5236\u306E\u78BA\u7ACB

\u3010\u30B4\u30FC\u30EB\u3011
AI\u6D3B\u7528\u304C\u7D4C\u55B6\u306E\u4E00\u90E8\u3068\u3057\u3066\u5B9A\u7740`,options:[{id:"plan90_schedule",label:"\u5168\u4F53\u30B9\u30B1\u30B8\u30E5\u30FC\u30EB\u306B\u623B\u308B"},{id:"pricing_overview",label:"\u4FA1\u683C\u30FB\u30D7\u30E9\u30F3\u3092\u898B\u308B"},{id:"contact_overview",label:"\u8A73\u3057\u304F\u76F8\u8AC7\u3059\u308B"},{id:"back_to_main",label:"\u30E1\u30A4\u30F3\u30E1\u30CB\u30E5\u30FC\u306B\u623B\u308B"}]},contact_overview:{id:"contact_overview",type:"message",text:`**\u304A\u554F\u3044\u5408\u308F\u305B\u65B9\u6CD5**

\u3054\u76F8\u8AC7\u30FB\u304A\u554F\u3044\u5408\u308F\u305B\u306F\u4EE5\u4E0B\u306E\u65B9\u6CD5\u3067\u627F\u3063\u3066\u304A\u308A\u307E\u3059\u3002`,options:[{id:"contact_email",label:"\u30E1\u30FC\u30EB\u3067\u76F8\u8AC7"},{id:"contact_line",label:"LINE\u516C\u5F0F\u30A2\u30AB\u30A6\u30F3\u30C8"},{id:"contact_ai_monday",label:"AI MONDAY\uFF08\u7121\u6599\u52C9\u5F37\u4F1A\uFF09"},{id:"back_to_main",label:"\u30E1\u30A4\u30F3\u30E1\u30CB\u30E5\u30FC\u306B\u623B\u308B"}]},contact_email:{id:"contact_email",type:"message",text:`**\u30E1\u30FC\u30EB\u3067\u306E\u304A\u554F\u3044\u5408\u308F\u305B**

\u682A\u5F0F\u4F1A\u793E Meta Heroes \u30B3\u30FC\u30DD\u30EC\u30FC\u30C8\u672C\u90E8

info@meta-heroes.io

\u304A\u6C17\u8EFD\u306B\u3054\u76F8\u8AC7\u304F\u3060\u3055\u3044\u3002
\u62C5\u5F53\u8005\u3088\u308A2\u55B6\u696D\u65E5\u4EE5\u5185\u306B\u3054\u8FD4\u4FE1\u3044\u305F\u3057\u307E\u3059\u3002`,options:[{id:"contact_line",label:"LINE\u516C\u5F0F\u30A2\u30AB\u30A6\u30F3\u30C8\u3082\u898B\u308B"},{id:"contact_ai_monday",label:"AI MONDAY\u306B\u3064\u3044\u3066\u77E5\u308B"},{id:"back_to_main",label:"\u30E1\u30A4\u30F3\u30E1\u30CB\u30E5\u30FC\u306B\u623B\u308B"}]},contact_line:{id:"contact_line",type:"message",text:`**LINE\u516C\u5F0F\u30A2\u30AB\u30A6\u30F3\u30C8**

LINE\u516C\u5F0F\u30A2\u30AB\u30A6\u30F3\u30C8\u3067\u306F\u3001\u6700\u65B0\u60C5\u5831\u3084\u30A4\u30D9\u30F3\u30C8\u6848\u5185\u3092\u304A\u5C4A\u3051\u3057\u3066\u3044\u307E\u3059\u3002

\u307E\u305F\u3001Instagram\u7B49\u306ESNS\u3067\u3082\u60C5\u5831\u767A\u4FE1\u4E2D\u3067\u3059\u3002

\u203BLINE\u767B\u9332\u65B9\u6CD5\u306F\u3001\u5F0A\u793EWeb\u30B5\u30A4\u30C8\u3092\u3054\u78BA\u8A8D\u304F\u3060\u3055\u3044\u3002`,options:[{id:"contact_email",label:"\u30E1\u30FC\u30EB\u3067\u3082\u76F8\u8AC7\u3059\u308B"},{id:"contact_ai_monday",label:"AI MONDAY\u306B\u3064\u3044\u3066\u77E5\u308B"},{id:"back_to_main",label:"\u30E1\u30A4\u30F3\u30E1\u30CB\u30E5\u30FC\u306B\u623B\u308B"}]},contact_ai_monday:{id:"contact_ai_monday",type:"message",text:`**AI MONDAY - \u7D99\u7D9A\u578BAI\u5B66\u7FD2\u30B3\u30DF\u30E5\u30CB\u30C6\u30A3**

\u3010\u958B\u50AC\u3011\u6BCE\u9031\u6708\u66DC\u65E5
\u3010\u53C2\u52A0\u8CBB\u3011\u7121\u6599
\u3010\u5F62\u5F0F\u3011Zoom / LINE\u767B\u9332\u5236

\u3010\u5185\u5BB9\u3011
\u2022 \u6700\u65B0AI\u6D3B\u7528\u4E8B\u4F8B\u306E\u7D39\u4ECB
\u2022 \u5B9F\u8DF5\u7684\u306ATips\u306E\u5171\u6709
\u2022 \u30B2\u30B9\u30C8\u767B\u58C7\u8005\u306B\u3088\u308B\u8B1B\u6F14

\u3010\u904E\u53BB\u306E\u767B\u58C7\u8005\u3011
\u5143\u30B9\u30AF\u30A6\u30A7\u30A2\u30FB\u30A8\u30CB\u30C3\u30AF\u30B9\u7C73\u56FD\u793E\u9577 \u4ED6

\u307E\u305A\u306F\u6C17\u8EFD\u306B\u3054\u53C2\u52A0\u304F\u3060\u3055\u3044\uFF01`,options:[{id:"contact_email",label:"\u53C2\u52A0\u65B9\u6CD5\u3092\u30E1\u30FC\u30EB\u3067\u554F\u3044\u5408\u308F\u305B\u308B"},{id:"contact_overview",label:"\u4ED6\u306E\u554F\u3044\u5408\u308F\u305B\u65B9\u6CD5\u3092\u898B\u308B"},{id:"back_to_main",label:"\u30E1\u30A4\u30F3\u30E1\u30CB\u30E5\u30FC\u306B\u623B\u308B"}]},back_to_main:{id:"welcome",type:"redirect"}};var v=p,b=new l(v,{iconUrl:"/icon.png",primaryColor:"#ff7a00",botName:"MOTTAIN-AI ChatBot"});b.init();window.AivoChatbot=b;})();
