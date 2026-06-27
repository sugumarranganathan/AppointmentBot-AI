/* ==========================================================
   AppointmentBot AI
   Smart Appointment Assistant
   script.js
   Part 1
========================================================== */


/* ======================================================
   Get HTML Elements
====================================================== */

const chatbox = document.getElementById("chatbox");

const messageInput = document.getElementById("message");

const sendBtn = document.getElementById("sendBtn");

const clearBtn = document.getElementById("clearBtn");

const typing = document.getElementById("typing");

const exampleButtons =
document.querySelectorAll(".example-btn");


/* ======================================================
   Send Button Click
====================================================== */

sendBtn.addEventListener("click", sendMessage);


/* ======================================================
   Press Enter to Send
====================================================== */

messageInput.addEventListener("keypress", function(event){

    if(event.key === "Enter"){

        event.preventDefault();

        sendMessage();

    }

});


/* ======================================================
   Main Function
====================================================== */

function sendMessage(){

    const message = messageInput.value.trim();

    if(message === "") return;

    // Show user message
    addUserMessage(message);

    // Clear input box
    messageInput.value = "";

    // Show typing animation
    typing.style.display = "block";

    // Scroll
    scrollBottom();

    // Flask Prediction
    predictMessage(message);

}


/* ======================================================
   User Chat Bubble
====================================================== */

function addUserMessage(message){

    const div = document.createElement("div");

    div.className = "user-message";

    div.innerHTML = `

        <div class="message">

            ${message}

        </div>

        <div class="avatar">

            👤

        </div>

    `;

    chatbox.appendChild(div);

    scrollBottom();

}


/* ======================================================
   Auto Scroll
====================================================== */

function scrollBottom(){

    chatbox.scrollTop = chatbox.scrollHeight;

}


/* ==========================================================
   AppointmentBot AI
   Smart Appointment Assistant
   script.js
   Part 2
========================================================== */


/* ======================================================
   Flask Prediction API
====================================================== */

async function predictMessage(message){

    try{

        const response = await fetch("/predict",{

            method:"POST",

            headers:{

                "Content-Type":"application/json"

            },

            body:JSON.stringify({

                message:message

            })

        });

        const data = await response.json();

        // Hide typing animation

        typing.style.display = "none";

        // Display Bot Message

        addBotMessage(data.prediction);

    }

    catch(error){

        typing.style.display="none";

        addErrorMessage();

        console.error(error);

    }

}


/* ======================================================
   Bot Response
====================================================== */

function addBotMessage(prediction){

    let badge="";

    let reply="";

    if(prediction==="Booking"){

        badge='<span class="booking">🟢 Booking</span>';

        reply="Great! Your message looks like an appointment booking request.";

    }

    else{

        badge='<span class="non-booking">🔴 Non-Booking</span>';

        reply="This message doesn't appear to be an appointment booking request.";

    }

    const div=document.createElement("div");

    div.className="bot-message";

    div.innerHTML=`

        <div class="avatar">

            🤖

        </div>

        <div class="message">

            <strong>AppointmentBot AI</strong>

            <br><br>

            ${reply}

            <br><br>

            ${badge}

            <div class="time">

                ${getCurrentTime()}

            </div>

        </div>

    `;

    chatbox.appendChild(div);

    scrollBottom();

}


/* ======================================================
   Error Message
====================================================== */

function addErrorMessage(){

    const div=document.createElement("div");

    div.className="bot-message";

    div.innerHTML=`

        <div class="avatar">

            ⚠️

        </div>

        <div class="message">

            <strong>Server Error</strong>

            <br><br>

            Unable to connect to AppointmentBot AI.

            <br>

            Please try again.

            <div class="time">

                ${getCurrentTime()}

            </div>

        </div>

    `;

    chatbox.appendChild(div);

    scrollBottom();

}


/* ======================================================
   Current Time
====================================================== */

function getCurrentTime(){

    const now=new Date();

    return now.toLocaleTimeString([],{

        hour:"2-digit",

        minute:"2-digit"

    });

}


/* ==========================================================
   AppointmentBot AI
   Smart Appointment Assistant
   script.js
   Part 3
========================================================== */


/* ======================================================
   Clear Chat
====================================================== */

clearBtn.addEventListener("click", function(){

    chatbox.innerHTML = `

        <div class="bot-message">

            <div class="avatar">

                🤖

            </div>

            <div class="message">

                <h3>Hello 👋</h3>

                <p>

                    Welcome back to
                    <b>AppointmentBot AI</b>

                </p>

                <p>

                    Ask me anything about appointment booking.

                </p>

                <ul>

                    <li>Book appointment tomorrow</li>

                    <li>Reserve a slot</li>

                    <li>Can I visit on Monday?</li>

                </ul>

            </div>

        </div>

    `;

});


/* ======================================================
   Example Buttons
====================================================== */

exampleButtons.forEach(function(button){

    button.addEventListener("click", function(){

        messageInput.value = button.innerText;

        messageInput.focus();

    });

});


/* ======================================================
   Auto Focus
====================================================== */

window.onload = function(){

    messageInput.focus();

}


/* ======================================================
   Loading Animation
====================================================== */

function showTyping(){

    typing.style.display = "block";

}

function hideTyping(){

    typing.style.display = "none";

}


/* ======================================================
   Smooth Scroll
====================================================== */

function smoothScroll(){

    chatbox.scrollTo({

        top: chatbox.scrollHeight,

        behavior: "smooth"

    });

}


/* ======================================================
   Welcome Animation
====================================================== */

setTimeout(function(){

    const welcome = document.querySelector(".bot-message");

    if(welcome){

        welcome.style.animation =

        "messageAnimation .8s ease";

    }

},500);


/* ======================================================
   Enter Key Animation
====================================================== */

messageInput.addEventListener("focus",function(){

    messageInput.style.transition=".3s";

});


/* ======================================================
   Disable Send Button
====================================================== */

function disableButton(){

    sendBtn.disabled = true;

    sendBtn.style.opacity = ".5";

}


function enableButton(){

    sendBtn.disabled = false;

    sendBtn.style.opacity = "1";

}


/* ======================================================
   Optional Sound
====================================================== */

// Uncomment if notification sound is available

/*

const audio = new Audio("/static/audio/notification.mp3");

audio.play();

*/


/* ======================================================
   Console Message
====================================================== */

console.log("=======================================");

console.log(" AppointmentBot AI Loaded Successfully ");

console.log("=======================================");


/* ======================================================
   Project Information
====================================================== */

console.log("Developer : Sugumar R");

console.log("Frontend : HTML + CSS + JavaScript");

console.log("Backend : Flask");

console.log("Model : CountVectorizer + Linear SVM");

console.log("=======================================");
