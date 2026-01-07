const images = {
    softgirl: ["assets/images/softgirl/s1.jpeg", "assets/images/softgirl/s4.webp", "assets/images/softgirl/s5.webp",
        "assets/images/softgirl/s3.jpeg", "assets/images/softgirl/s2.webp", "assets/images/softgirl/s6.webp",
        "assets/images/softgirl/s7.webp", "assets/images/softgirl/s8.webp", "assets/images/softgirl/s9.webp",
        "assets/images/softgirl/s10.webp"],
    darkacademia: ["assets/images/darkacademia/d1.jpeg", "assets/images/darkacademia/d3.webp", "assets/images/darkacademia/d4.webp",
                    "assets/images/darkacademia/d2.jpeg", "assets/images/darkacademia/d5.webp", "assets/images/darkacademia/d6.webp",
                    "assets/images/darkacademia/d7.jpeg",  "assets/images/darkacademia/d9.jpeg", "assets/images/darkacademia/d8.jpeg",
                    "assets/images/darkacademia/d10.webp"],
    y2k: ["assets/images/baddie/b6.jpeg", "assets/images/baddie/b1.webp", "assets/images/baddie/b2.webp", "assets/images/baddie/b3.webp",
        "assets/images/baddie/b7.jpeg", "assets/images/baddie/b4.jpeg", "assets/images/baddie/b5.webp", "assets/images/baddie/b8.webp",
       "assets/images/baddie/b9.webp", "assets/images/baddie/b10.jpeg"]
};

const music = {
    softgirl: new Audio("assets/music/softgirl.mp3"),
    darkacademia: new Audio("assets/music/darkacademia.mp3"),
    y2k: new Audio("assets/music/baddie.mp3")
};

let currenttrack;
document.getElementById("loadBtn").addEventListener("click", () => {
    const vibe = document.getElementById("vibeSelect").value;
    loadMoodboard(vibe);
    playMusic(vibe);
    changeTheme(vibe);
    
    document.getElementById("home-page").style.display = "none";
    document.getElementById("moodboard-page").style.display = "block";
});

function loadMoodboard(vibe) {
    const board = document.getElementById("moodboard");
    board.innerHTML = "";
  
    const allImages = [...images[vibe], ...images[vibe], ...images[vibe]]; // duplicate for loop
    allImages.forEach((src) => {
      const img = document.createElement("img");
      img.src = src;
      img.style.width = "200px"; // you can adjust this
      img.style.height = "200px";
      img.style.borderRadius = "10px";
      img.style.objectFit = "cover";
      board.appendChild(img);
    });
  
    board.scrollLeft = 0;
    autoScrollCarousel(); // call scrolling again
  }

function playMusic(vibe) {
    if (currenttrack) currenttrack.pause();
    currenttrack = music[vibe];
    currenttrack.loop = true;
    currenttrack.play();
}

const musicBtn = document.getElementById("musicBtn");

musicBtn.addEventListener("click", () => {
    if (currenttrack.paused) {
        currenttrack.play();
        musicBtn.textContent = "Pause Music";
    } else {
        currenttrack.pause();
        musicBtn.textContent = "Play Music";
    }
});

function changeTheme(vibe) {
    const body = document.body;
    if (vibe=== "softgirl") {
        body.style.backgroundColor = "#ffe4f1";
    } else if (vibe === "darkacademia") {
        body.style.backgroundColor = "brown"
    } else if (vibe === "y2k") {
        body.style.backgroundColor = "#d0f0ff"
    }
}

let scrollInterval;

function autoScrollCarousel() {
    const carousel = document.getElementById("moodboard");
  
    if (scrollInterval) clearInterval(scrollInterval);
  
    scrollInterval = setInterval(() => {
      carousel.scrollLeft += 1;
  
      // Reset when almost at the end (not halfway)
      if (carousel.scrollLeft + carousel.clientWidth >= carousel.scrollWidth - 1) {
        carousel.scrollLeft = 0;
      }
    }, 20);
  }

function typeText() {
  const target = document.getElementById("intro-text");
  if (index < text.length) {
    target.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeText, speed);
  }
}

document.getElementById("loadBtn").addEventListener("click", () => {
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 }
  });
});

const introText = "Choose your vibe and let the mood take over... ✨";
let i = 0;

function typeWriter() {
  if (i < introText.length) {
    document.getElementById("intro-text").textContent += introText.charAt(i);
    i++;
    setTimeout(typeWriter, 80);
  }
}

window.onload = typeWriter;

const quotes = [
  "Vibes speak louder than words.",
  "Your vibe attracts your tribe.",
  "Catch flights, not feelings.",
  "Stay soft, glow hard.",
  "Main character energy 💅"
];

document.getElementById("loadBtn").addEventListener("click", () => {
  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  document.getElementById("quote").textContent = quote;
});

document.getElementById("saveMoodboardBtn").addEventListener("click", () => {
  html2canvas(document.getElementById("moodboard-page")).then((canvas) => {
    const link = document.createElement("a");
    link.download = "moodboard.png";
    link.href = canvas.toDataURL();
    link.click();
  });
});

document.getElementById("colorPicker").addEventListener("input", (e) => {
  document.documentElement.style.setProperty('--accent-color', e.target.value);
});

function setMood(mood) {
  document.getElementById("quiz").style.display = "none";
  document.getElementById("home-page").style.display = "none";
  document.getElementById("moodboard-page").style.display = "block";
  document.getElementById("moodboard-page").classList.add("show");

}


window.addEventListener("DOMContentLoaded", typeText);
