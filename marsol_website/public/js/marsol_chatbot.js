(function () {
    "use strict";

    function initMarsolChatbot() {

        // Prevent duplicate chatbot
        if (document.getElementById("marsol-chat-wrapper")) {
            return;
        }

        // ==========================================
        // CREATE CHATBOT
        // ==========================================

        const wrapper = document.createElement("div");
        wrapper.id = "marsol-chat-wrapper";

        wrapper.innerHTML = `
            <div id="marsol-chat-box">

                <div class="marsol-chat-header">
                    <div class="marsol-chat-title">
                        <span class="marsol-chat-logo">M</span>
                        <span>Marsol Assistant</span>
                    </div>

                    <button
                        id="marsol-chat-close"
                        aria-label="Close chatbot"
                    >×</button>
                </div>

                <div id="marsol-chat-messages">

                    <div class="marsol-bot-message">
                        <div class="marsol-message-title">
                            Hi! 👋
                        </div>

                        I'm Marsol's AI assistant.

                        <br><br>

                        Ask me anything about
                        <strong>Marsol Technologies</strong>
                        or the current page.
                    </div>

                </div>

                <div class="marsol-chat-input-area">

                    <input
                        id="marsol-chat-input"
                        type="text"
                        placeholder="Ask something..."
                        autocomplete="off"
                    />

                    <button
                        id="marsol-chat-send"
                        aria-label="Send message"
                    >
                        ➤
                    </button>

                </div>

            </div>

            <button
                id="marsol-chat-button"
                aria-label="Open Marsol Assistant"
                title="Chat with Marsol Assistant"
            >
                <span class="marsol-chat-icon">💬</span>
            </button>
        `;

        document.body.appendChild(wrapper);


        // ==========================================
        // CSS
        // ==========================================

        const style = document.createElement("style");
        style.id = "marsol-chatbot-style";

        style.textContent = `

            /* ==========================================
               GLOBAL CHATBOT WRAPPER
               ========================================== */

            #marsol-chat-wrapper {
                position: fixed;
                right: 24px;
                bottom: 24px;

                width: auto;
                height: auto;

                z-index: 2147483647;

                font-family:
                    Arial,
                    Helvetica,
                    sans-serif;

                pointer-events: none;
            }


            /* ==========================================
               FLOATING BUTTON
               ========================================== */

            #marsol-chat-button {
                pointer-events: auto;

                width: 60px;
                height: 60px;

                border: none;
                border-radius: 50%;

                background: #f58220;
                color: white;

                display: flex;
                align-items: center;
                justify-content: center;

                cursor: pointer;

                padding: 0;

                box-shadow:
                    0 6px 20px rgba(0,0,0,0.25);

                transition:
                    transform 0.2s ease,
                    box-shadow 0.2s ease;
            }


            #marsol-chat-button:hover {
                transform: scale(1.08);

                box-shadow:
                    0 9px 28px rgba(0,0,0,0.30);
            }


            #marsol-chat-button:active {
                transform: scale(0.95);
            }


            .marsol-chat-icon {
                font-size: 27px;
                line-height: 1;
            }


            /* ==========================================
               CHAT WINDOW
               ========================================== */

            #marsol-chat-box {

                position: fixed;

                right: 24px;
                bottom: 96px;

                width: 370px;
                height: 500px;

                background: #ffffff;

                border-radius: 18px;

                overflow: hidden;

                display: none;

                flex-direction: column;

                box-shadow:
                    0 15px 50px rgba(0,0,0,0.25);

                border: 1px solid #eeeeee;

                pointer-events: auto;
            }


            #marsol-chat-box.marsol-chat-open {
                display: flex;
            }


            /* ==========================================
               HEADER
               ========================================== */

            .marsol-chat-header {

                height: 68px;

                flex-shrink: 0;

                background:
                    linear-gradient(
                        135deg,
                        #f58220,
                        #ff9b45
                    );

                color: white;

                display: flex;

                align-items: center;

                justify-content: space-between;

                padding: 0 18px;
            }


            .marsol-chat-title {

                display: flex;

                align-items: center;

                gap: 10px;

                font-size: 17px;

                font-weight: 700;
            }


            .marsol-chat-logo {

                width: 36px;
                height: 36px;

                border-radius: 50%;

                background: white;

                color: #f58220;

                display: flex;

                align-items: center;
                justify-content: center;

                font-weight: 800;

                font-size: 18px;
            }


            .marsol-chat-header button {

                border: none;

                background: transparent;

                color: white;

                font-size: 30px;

                line-height: 1;

                cursor: pointer;

                padding: 2px 6px;

                opacity: 0.9;
            }


            .marsol-chat-header button:hover {
                opacity: 1;
            }


            /* ==========================================
               MESSAGE AREA
               ========================================== */

            #marsol-chat-messages {

                flex: 1;

                min-height: 0;

                padding: 18px;

                overflow-y: auto;

                background: #fffaf6;
            }


            /* ==========================================
               BOT MESSAGE
               ========================================== */

            .marsol-bot-message {

                background: white;

                color: #292929;

                padding: 13px 15px;

                margin-bottom: 12px;

                border-radius: 14px;

                border-top-left-radius: 4px;

                max-width: 84%;

                line-height: 1.5;

                font-size: 14px;

                box-shadow:
                    0 2px 10px rgba(0,0,0,0.06);

                border: 1px solid #f1e7df;

                word-wrap: break-word;
            }


            .marsol-message-title {
                font-weight: 700;
                margin-bottom: 4px;
            }


            /* ==========================================
               USER MESSAGE
               ========================================== */

            .marsol-user-message {

                background: #f58220;

                color: white;

                padding: 12px 15px;

                margin-bottom: 12px;

                border-radius: 14px;

                border-top-right-radius: 4px;

                max-width: 84%;

                margin-left: auto;

                line-height: 1.5;

                font-size: 14px;

                word-wrap: break-word;

                box-shadow:
                    0 2px 8px rgba(245,130,32,0.18);
            }


            /* ==========================================
               INPUT AREA
               ========================================== */

            .marsol-chat-input-area {

                flex-shrink: 0;

                display: flex;

                align-items: center;

                gap: 8px;

                padding: 12px;

                background: white;

                border-top: 1px solid #eeeeee;
            }


            #marsol-chat-input {

                flex: 1;

                min-width: 0;

                height: 42px;

                padding: 0 13px;

                border-radius: 10px;

                border: 1px solid #dddddd;

                background: #fafafa;

                color: #222;

                outline: none;

                font-size: 14px;
            }


            #marsol-chat-input:focus {

                border-color: #f58220;

                background: white;

                box-shadow:
                    0 0 0 2px rgba(245,130,32,0.10);
            }


            #marsol-chat-input::placeholder {
                color: #999;
            }


            #marsol-chat-send {

                width: 44px;
                height: 42px;

                flex-shrink: 0;

                border: none;

                border-radius: 10px;

                background: #f58220;

                color: white;

                cursor: pointer;

                font-size: 19px;

                display: flex;

                align-items: center;
                justify-content: center;
            }


            #marsol-chat-send:hover {
                background: #e87516;
            }


            /* ==========================================
               SCROLLBAR
               ========================================== */

            #marsol-chat-messages::-webkit-scrollbar {
                width: 6px;
            }


            #marsol-chat-messages::-webkit-scrollbar-track {
                background: transparent;
            }


            #marsol-chat-messages::-webkit-scrollbar-thumb {
                background: #dddddd;
                border-radius: 10px;
            }


            /* ==========================================
               MOBILE
               ========================================== */

            @media (max-width: 600px) {

                #marsol-chat-wrapper {
                    right: 15px;
                    bottom: 15px;
                }


                #marsol-chat-button {

                    width: 56px;
                    height: 56px;
                }


                #marsol-chat-box {

                    right: 10px;
                    bottom: 82px;

                    width: calc(100vw - 20px);

                    height: min(500px, calc(100vh - 110px));

                    border-radius: 16px;
                }
            }

        `;

        document.head.appendChild(style);


        // ==========================================
        // ELEMENTS
        // ==========================================

        const button =
            document.getElementById("marsol-chat-button");

        const chatBox =
            document.getElementById("marsol-chat-box");

        const closeButton =
            document.getElementById("marsol-chat-close");

        const input =
            document.getElementById("marsol-chat-input");

        const sendButton =
            document.getElementById("marsol-chat-send");

        const messages =
            document.getElementById("marsol-chat-messages");


        // ==========================================
        // OPEN
        // ==========================================

        button.addEventListener("click", function () {

            chatBox.classList.add("marsol-chat-open");

            setTimeout(function () {
                input.focus();
            }, 100);
        });


        // ==========================================
        // CLOSE
        // ==========================================

        closeButton.addEventListener("click", function () {

            chatBox.classList.remove("marsol-chat-open");
        });


        // ==========================================
        // SEND MESSAGE
        // ==========================================

        async function sendMessage() {

            const message = input.value.trim();

            if (!message) {
                return;
            }


            // USER MESSAGE

            const userMessage =
                document.createElement("div");

            userMessage.className =
                "marsol-user-message";

            userMessage.textContent =
                message;

            messages.appendChild(userMessage);


            input.value = "";


            // LOADING

            const loading =
                document.createElement("div");

            loading.className =
                "marsol-bot-message";

            loading.id =
                "marsol-loading";

            loading.textContent =
                "Thinking... 🤔";

            messages.appendChild(loading);


            messages.scrollTop =
                messages.scrollHeight;


            // ==========================================
            // CALL FRAPPE API
            // ==========================================

            try {

                const response = await fetch(
                    "/api/method/marsol_website.api.chatbot.chat",
                    {
                        method: "POST",

                        headers: {
                            "Content-Type":
                                "application/json",

                            "X-Frappe-CSRF-Token":
                                frappe.csrf_token
                        },

                        credentials: "same-origin",

                        body: JSON.stringify({
                            message: message,

                            page_url:
                                window.location.pathname,

                            page_title:
                                document.title,

                            page_heading:
                                document.querySelector("h1")
                                    ?.innerText || "",

                            page_context:
                                document.body.innerText
                                    .substring(0, 8000)
                        })
                    }
                );


                if (!response.ok) {

                    throw new Error(
                        "API request failed: " +
                        response.status
                    );
                }


                const result =
                    await response.json();


                console.log(
                    "Marsol Gemini response:",
                    result
                );


                if (loading) {
                    loading.remove();
                }


                const reply =
                    result.message?.reply;


                if (!reply) {

                    throw new Error(
                        "No reply received from API"
                    );
                }


                // BOT MESSAGE

                const botMessage =
                    document.createElement("div");

                botMessage.className =
                    "marsol-bot-message";

                function formatBotReply(text) {
                    const escapeHtml = value =>
                        String(value)
                            .replace(/&/g, "&amp;")
                            .replace(/</g, "&lt;")
                            .replace(/>/g, "&gt;")
                            .replace(/"/g, "&quot;")
                            .replace(/'/g, "&#039;");

                    let html = "";
                    let inList = false;

                    escapeHtml(text)
                        .split("\n")
                        .forEach(function(line) {
                            const trimmed = line.trim();

                            if (!trimmed) {
                                if (inList) {
                                    html += "</ul>";
                                    inList = false;
                                }
                                return;
                            }

                            if (/^[-*] /.test(trimmed)) {
                                if (!inList) {
                                    html += "<ul>";
                                    inList = true;
                                }

                                html +=
                                    "<li>" +
                                    trimmed.substring(2)
                                        .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") +
                                    "</li>";
                                return;
                            }

                            if (inList) {
                                html += "</ul>";
                                inList = false;
                            }

                            if (/^#{1,3} /.test(trimmed)) {
                                html +=
                                    "<h3>" +
                                    trimmed.replace(/^#{1,3} /, "")
                                        .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") +
                                    "</h3>";
                                return;
                            }

                            html +=
                                "<p>" +
                                trimmed
                                    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") +
                                "</p>";
                        });

                    if (inList) {
                        html += "</ul>";
                    }

                    return html;
                }

                botMessage.innerHTML =
                    formatBotReply(reply);

                messages.appendChild(botMessage);


                messages.scrollTop =
                    messages.scrollHeight;

            }

            catch (error) {

                console.error(
                    "Marsol chatbot error:",
                    error
                );


                if (loading) {
                    loading.remove();
                }


                const errorMessage =
                    document.createElement("div");

                errorMessage.className =
                    "marsol-bot-message";

                errorMessage.textContent =
                    "Sorry, I couldn't connect to the assistant. Please try again.";

                messages.appendChild(
                    errorMessage
                );


                messages.scrollTop =
                    messages.scrollHeight;
            }
        }


        // ==========================================
        // SEND BUTTON
        // ==========================================

        sendButton.addEventListener(
            "click",
            sendMessage
        );


        // ==========================================
        // ENTER KEY
        // ==========================================

        input.addEventListener(
            "keydown",
            function (event) {

                if (event.key === "Enter") {

                    event.preventDefault();

                    sendMessage();
                }
            }
        );
    }


    // ==========================================
    // INITIALIZE
    // ==========================================

    if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initMarsolChatbot);
} else {
    setTimeout(initMarsolChatbot, 0);
}
})();
