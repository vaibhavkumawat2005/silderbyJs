const slides = document.querySelector(".slides");
const sliders = document.querySelectorAll(".slide").length;
let currentSlide = 0;
const intervalTime = 3000;
let slideInterval;

function nextSlide() {
  currentSlide = (currentSlide + 1) % sliders;
  updateSlide();
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + sliders) % sliders;
  updateSlide();
}

function updateSlide() {
  slides.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function startSlider() {
  slideInterval = setInterval(nextSlide, intervalTime);
}

function stopsSlider() {
  clearInterval(slideInterval);
}

document.querySelector(".prev").addEventListener("click", () => {
  prevSlide();
  stopsSlider();
  startSlider();
});

document.querySelector(".next").addEventListener("click", () => {
  nextSlide();
  stopsSlider();
  startSlider();
});

const model = document.getElementById("myModel");
const colseModelBtn = document.getElementById("btnclose");

setTimeout(() => {
  model.style.display = "flex";
}, 5000);

colseModelBtn.addEventListener("click", () => {
  model.style.display = "none";
});

startSlider();

const data = [
  {
    imagSrc:
      "https://c4.wallpaperflare.com/wallpaper/596/453/207/digital-digital-art-artwork-illustration-simple-hd-wallpaper-preview.jpg",
    details:
      "Black Panther is a 2018 American superhero film based on the Marvel Comics character of the same name. Produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures, it is the 18th film in the Marvel Cinematic Universe (MCU). The film was directed by Ryan Coogler, who co-wrote the screenplay with Joe Robert Cole, and it stars Chadwick Boseman as T'Challa / Black Panther alongside Michael B. Jordan, Lupita Nyong'o, Danai Gurira, Martin Freeman, Daniel Kaluuya, Letitia Wright, Winston Duke, Sterling K. Brown, Angela Bassett, Forest Whitaker, and Andy Serkis. In Black Panther, T'Challa is crowned king of Wakanda following his father's death, but he is challenged by Killmonger (Jordan), who plans to abandon the country's isolationist policies and begin a global revolution.",
  },
  {
    imagSrc:
      "https://c4.wallpaperflare.com/wallpaper/328/810/463/digital-digital-art-artwork-illustration-simple-hd-wallpaper-preview.jpg",
    details: `Iron Man is the superhero persona of Anthony Edward "Tony" Stark, a businessman and engineer who runs the weapons manufacturing company Stark Industries. When Stark was captured in a war zone and sustained a severe heart wound, he built his Iron Man armor and escaped his captors. Iron Man's suits of armor grant him superhuman strength, flight, energy projection, and other abilities. The character was created in response to the Vietnam War as Lee's attempt to create a likeable pro-war character. Since his creation, Iron Man has been used to explore political themes, with early Iron Man stories being set in the Cold War. The character's role as a weapons manufacturer proved controversial, and Marvel moved away from geopolitics by the 1970s. Instead, the stories began exploring themes such as civil unrest, technological advancement, corporate espionage, alcoholism, and governmental authority.`,
  },

  {
    imagSrc:
      "https://c4.wallpaperflare.com/wallpaper/224/829/129/digital-digital-art-artwork-illustration-simple-hd-wallpaper-preview.jpg",
    details: `The character was reintroduced as a heroic, noble being in 2006, and appeared in the crossover comic book storyline Annihilation: Conquest. Groot went on to star in its spin-off series, Guardians of the Galaxy, joining the team of the same name.

Groot has been featured in a variety of associated Marvel media, including animated television series, toys and trading cards. Vin Diesel voices Groot in the MCU, starting in the 2014 film Guardians of the Galaxy, with Krystian Godlewski playing the initial incarnation of the character via performance capture and James Gunn doing so for his reborn offspring, colloquially known as "Baby Groot".`,
  },
  {
    imagSrc:
      "https://c4.wallpaperflare.com/wallpaper/745/12/858/digital-digital-art-artwork-illustration-simple-hd-wallpaper-preview.jpg",
    details:
      "Created by Stan Lee, Larry Lieber and Jack Kirby, his first appearance was in Tales to Astonish #27 (January 1962) as Dr. Henry Pym; however, he first appeared in costume as Ant-Man in Tales to Astonish #35 (September 1962). The persona was originated by the brilliant scientist Hank Pym's superhero alias after inventing a substance that can change size (Pym Particles), but reformed thieves Scott Lang and Eric O'Grady also took on the Ant-Man mantle after the original changed his superhero identity to various other aliases, such as Giant-Man, Goliath, and Yellowjacket. Pym's Ant-Man is also a founding member of the super hero team known as the Avengers. The character has appeared in several films based on the Marvel character, such as Ant-Man (2015), Captain America: Civil War (2016), Ant-Man and the Wasp (2018), Avengers: Endgame (2019), and Ant-Man and the Wasp: Quantumania (2023).",
  },
  {
    imagSrc:
      "https://c4.wallpaperflare.com/wallpaper/815/766/369/digital-digital-art-artwork-illustration-simple-hd-wallpaper-preview.jpg",
    details:
      "Deadpool is a 2016 American superhero film directed by Tim Miller, in his directorial debut, and written by Rhett Reese and Paul Wernick. Based on the Marvel Comics character of the same name and distributed by 20th Century Fox, it is a spin-off of the X-Men film series and its overall eighth installment. The film stars Ryan Reynolds in the title role, alongside Morena Baccarin, Ed Skrein, T.J. Miller, Gina Carano, and Brianna Hildebrand. In the film, Wade Wilson hunts the man responsible for giving him mutant abilities and a scarred physical appearance, becoming the antihero Deadpool.",
  },
];

const left = document.getElementById("left");
const right = document.getElementById("right");

data.forEach((item, index) => {
  const img = document.createElement("img");
  img.src = item.imagSrc;
  img.alt = `image ${index + 1}`;

  const infor = document.createElement("div");
  infor.className = "details";
  infor.textContent = item.details;

  left.appendChild(img);
  right.appendChild(infor);
});
