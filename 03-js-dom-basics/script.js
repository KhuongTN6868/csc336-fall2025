// Get main elements
const about = document.querySelector("#about");

// Create mood button
const moodButton = document.createElement("button");
moodButton.textContent = "Switch Mood";
moodButton.classList.add("btn");
about.appendChild(moodButton);

// Message container
const messageDiv = document.createElement("div");
messageDiv.style.marginTop = "12px";
about.appendChild(messageDiv);

// Moods with messages & emojis
const moods = [
  {bg: "linear-gradient(90deg,#7b1f1f,#c62828)", msgs: ["Feeling bold today!","Conquer any challenge!"], emojis:["🌟","🔥"]},
  {bg: "linear-gradient(90deg,#1e3a8a,#2563eb)", msgs: ["Feeling calm!","Peaceful vibes!"], emojis:["🎵","🌿"]},
  {bg: "linear-gradient(90deg,#047857,#10b981)", msgs: ["Feeling fresh!","Full of energy!"], emojis:["⚡","🌞"]}
];

let moodIndex = 0;

// Simple confetti
function confetti() {
  const c = document.createElement("div");
  c.style.width = c.style.height = "8px";
  c.style.background = `hsl(${Math.random()*360},80%,60%)`;
  c.style.borderRadius = Math.random()>0.5?"50%":"0%";
  c.style.position="absolute";
  c.style.top=`${Math.random()*window.innerHeight}px`;
  c.style.left=`${Math.random()*window.innerWidth}px`;
  document.body.appendChild(c);
  
  let t = parseFloat(c.style.top);
  const interval = setInterval(()=>{
    t-=2; 
    c.style.top=t+"px"; 
    c.style.opacity-=0.02;
    if(t<0 || c.style.opacity<=0){ 
      clearInterval(interval); 
      c.remove();
    }
  },16);
}

// Mood switch function
moodButton.addEventListener("click",()=>{
  moodIndex=(moodIndex+1)%moods.length;
  const m = moods[moodIndex];
  document.querySelector(".site-header").style.background = m.bg;
  const msg = m.msgs[Math.floor(Math.random()*m.msgs.length)];
  const emoji = m.emojis[Math.floor(Math.random()*m.emojis.length)];
  messageDiv.textContent = msg+" "+emoji;
  for(let i=0;i<10;i++) confetti();
});

// Project cards interaction with toggle background
document.querySelectorAll(".card").forEach(card=>{
  let likes=0;
  const likeDiv=document.createElement("div");
  likeDiv.textContent="Likes: 0";
  likeDiv.style.marginTop="8px";
  card.appendChild(likeDiv);

  card.addEventListener("click",()=>{
    likes++; 
    likeDiv.textContent=`Likes: ${likes}`;

    // Toggle background color
    if(card.style.background === "rgb(255, 250, 229)") { // "#fffae5" in RGB
        card.style.background = ""; // reset to original
    } else {
        card.style.background = "#fffae5";
    }

    // Scale effect
    card.style.transform="scale(1.05)";
    setTimeout(()=>{card.style.transform="scale(1)";},300);
  });
});
