document.addEventListener("DOMContentLoaded", function () {

    console.log("Website Loaded");

    const cards = document.getElementsByClassName("card");

    for (let i = 0; i < cards.length; i++) {

        cards[i].addEventListener("mouseenter", function () {
            this.style.transform = "scale(1.03)";
            this.style.transition = "0.3s ease";
        });

        cards[i].addEventListener("mouseleave", function () {
            this.style.transform = "scale(1)";
        });

    }

});
function send(){

    let input = document.getElementById("input");
    let text = input.value.trim();
    
    if(text === "") return;
    
    let chat = document.getElementById("chatBox");
    
    // USER MESSAGE
    let userMsg = document.createElement("div");
    userMsg.className = "msg user";
    userMsg.textContent = "You: " + text;
    chat.appendChild(userMsg);
    
    // BOT RESPONSE
    let reply = "";
    let lower = text.toLowerCase();
    
    // GREETING IMPROVED
    if(lower.includes("hello") || lower.includes("hi")){
    reply = "Hey 👋 nice to see you! How are you today?";
    }
    else if(lower.includes("how are you")){
    reply = "I'm doing great 😊 thanks for asking! What about you?";
    }
    else if(lower.includes("what's up") || lower.includes("whats up")){
    reply = "Just running inside your browser 😄 What are you working on?";
    }
    else if(lower.includes("name")){
    reply = "I'm your AI Chatbot built by Bardia 🤖";
    }
    else if(lower.includes("python")){
    reply = "Python is awesome 🐍 perfect for AI and automation!";
    }
    else if(lower.includes("javascript")){
    reply = "JavaScript makes websites alive ⚡";
    }
    else if(lower.includes("bye")){
    reply = "Goodbye 👋 have a great day!";
    }
    else{
    reply = "Hmm 🤔 I'm still learning, but that's interesting!";
    }
    
    // BOT MESSAGE
    let botMsg = document.createElement("div");
    botMsg.className = "msg bot";
    botMsg.textContent = "Bot: " + reply;
    chat.appendChild(botMsg);
    
    // CLEAR INPUT
    input.value = "";
    
    // SCROLL
    chat.scrollTop = chat.scrollHeight;
    
    }
    document.querySelectorAll(".nav a").forEach(link => {
        link.addEventListener("click", function(){
    
            let target = document.querySelector(this.getAttribute("href"));
    
            target.style.boxShadow = "0 0 20px rgba(245,208,111,0.5)";
    
            setTimeout(()=>{
                target.style.boxShadow = "none";
            },800);
    
        });
    });
    