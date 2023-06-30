const candy = document.querySelector('#candy');
const candiesstatus = document.querySelector('#candiesstatus');
const sort = document.querySelector('#sort');
const close = document.querySelector('#close');
const list = document.querySelector('#list');
const clickText = document.querySelector('#click-text');
const saveinfo = document.querySelector('#save');
const goldcandy0 = document.querySelector('#goldcandy0');

const settings = document.querySelector('#settings');

const precommunicat1 = document.querySelector('#precommunicat1');
const communicat1 = document.querySelector('#communicat1');

const cancel1 = document.querySelector('#cancel1');
const save1 = document.querySelector('#save1');

let cookies = true;
let backgroundcandies = 0;

let candies = getCookies('candies') || 0;

let autoClick = false;
let candiesPerSecond = 1;
let click = 1;

let autoClickDelay = 1000;

let priceUpgrade0 = 15;
let priceUpgrade1 = 100;
let priceUpgrade2 = 1_000;
let priceUpgrade3 = 10_000;
let priceUpgrade4 = 100_000;
let priceUpgrade5 = 1_000_000;
let priceUpgrade6 = 1_500_000;
let priceUpgrade7 = 2_000_000;
let priceUpgrade8 = 5_000_000;
let priceUpgrade9 = 10_000_000;

let levelUpgrade0 = 0;
let levelUpgrade1 = 0;
let levelUpgrade2 = 0;
let levelUpgrade3 = 0;
let levelUpgrade4 = 0;
let levelUpgrade5 = 0;
let levelUpgrade6 = 0;
let levelUpgrade7 = 0;
let levelUpgrade8 = 0;
let levelUpgrade9 = 0;

let prices = [
  priceUpgrade0, priceUpgrade1, priceUpgrade2, priceUpgrade3, priceUpgrade4,
  priceUpgrade5, priceUpgrade6, priceUpgrade7, priceUpgrade8, priceUpgrade9
];

let generalVolume = 1;

Play('sounds/music/music.mp3', generalVolume, true);
RefreshStatusCandies();

const Sleep = (seconds) => {
  const milliseconds = (seconds * 1000);
  return new Promise(resolve => setTimeout(resolve, milliseconds));
}

const Nothing = () => {
  return "";
}

function RefreshStatusCandies() {
  candiesstatus.textContent = candies;
}

function RefreshStatusUpgrades(num) {
  let levels = [
    levelUpgrade0, levelUpgrade1, levelUpgrade2, levelUpgrade3, levelUpgrade4,
    levelUpgrade5, levelUpgrade6, levelUpgrade7, levelUpgrade8, levelUpgrade9
  ];
  for (let i=0; i<num; i++) {
    document.querySelector(`#lvl${i}`).textContent = levels[i];
  }
}

function refreshStatusPrices() {
  prices = [
    priceUpgrade0, priceUpgrade1, priceUpgrade2, priceUpgrade3, priceUpgrade4,
    priceUpgrade5, priceUpgrade6, priceUpgrade7, priceUpgrade8, priceUpgrade9
  ];
  for (let i = 0; i < prices.length; i++) {
    const priceElement = document.querySelector(`#price${i}`);
    priceElement.textContent = `Cost: ${prices[i]}`;
  }
}

candy.addEventListener('click', async function() {
  backgroundcandies <= 30 ? createFallingCandies() : Nothing();
  let sound = Math.floor(Math.random()*9);
  Play(`sounds/candy${sound}.mp3`, generalVolume, false);
  candies += click;
  RefreshStatusCandies();
  document.cookie = `candies=${candies}`;
  for (let i=0; i<1_000_000_000; i+= 100) {
    if (candies == i) {
        Play('sounds/aouncemment.mp3', generalVolume, false)
    }
  }
  candy.style.transform = 'scale(0.7)';
  await Sleep(0.1);
  candy.style.transform = 'scale(1)';
});

function Play(soundname, volume, choice) {
  let audio = new Audio(soundname);
  audio.volume = volume;
  audio.loop = choice;
  audio.play();
}

function getCookies(cookieName) {
  if (cookies == true) {
    const cookies = document.cookie.split(';').reduce((acc, cookie) => {
      const [name, value] = cookie.split('=').map(c => c.trim());
      acc[name] = parseInt(decodeURIComponent(value));
      return acc;
    }, {});
  
    return cookies[cookieName];
  }
}

sort.addEventListener('click', () => {list.style.animation = 'OpenList 1s forwards'});
close.addEventListener('click', () => {list.style.animation = 'CloseList 1s forwards'});

const upgrades = [
  '#upgrade0', '#upgrade1', '#upgrade2','#upgrade3', '#upgrade4',
  '#upgrade5', '#upgrade6', '#upgrade7', '#upgrade8', '#upgrade9'
];

setInterval(() => {
  for (let i=0; i<10; i++) {
    if (candies >= prices[i]) {
      document.querySelectorAll('.upgrades')[i].classList.add('canbuy');
    } else {
      document.querySelectorAll('.upgrades')[i].classList.remove('canbuy');
    }
  }
}, 5);

const Buying = (num) => {
  RefreshStatusCandies();
  RefreshStatusUpgrades(num+1);
  refreshStatusPrices();
  Play('sounds/buy.mp3', generalVolume, false);
}

for (let i=0; i<10; i++) {
  document.querySelectorAll('.upgrades')[i].addEventListener('click', () => {
    if (i == 0) {
      if (candies >= priceUpgrade0) {
        candies -= priceUpgrade0;
        levelUpgrade0++;
        autoClick = false;
        autoClick != true ? autoClick = true : clearInterval(Generate); //funkcja specjalna
        autoClickDelay--; //funkcja specjalna
        priceUpgrade0 = (priceUpgrade0+(levelUpgrade0));
        Buying(i);
      }
    }
    if (i == 1) {
      if (candies >= priceUpgrade1) {
        candies -= priceUpgrade1;
        levelUpgrade1++;
        click++; //funkcja specjalna
        priceUpgrade1 = (priceUpgrade1+(levelUpgrade1));
        Buying(i);
      }
    }
    if (i == 2) {
      if (candies >= priceUpgrade2) {
        candies -= priceUpgrade2;
        levelUpgrade2++;
        candiesPerSecond++; // funkcja specjalna
        priceUpgrade2 = (priceUpgrade2+(levelUpgrade2));
        Buying(i);
      }
    }
    if (i == 3) {
      if (candies >= priceUpgrade3) {
        candies -= priceUpgrade3;
        levelUpgrade3++;
        candiesPerSecond++; // funkcja specjalna
        priceUpgrade3 = (priceUpgrade3+(levelUpgrade3));
        Buying(i);
      }
    }
    if (i == 4) {
      if (candies >= priceUpgrade4) {
        candies -= priceUpgrade4;
        levelUpgrade4++;
        candiesPerSecond++; // funkcja specjalna
        priceUpgrade4 = (priceUpgrade4+(levelUpgrade4));
        Buying(i);
      }
    }
    if (i == 5) {
      if (candies >= priceUpgrade5) {
        candies -= priceUpgrade5;
        levelUpgrade5++;
        candiesPerSecond++; // funkcja specjalna
        priceUpgrade5 = (priceUpgrade5+(levelUpgrade5));
        Buying(i);
      }
    }
    if (i == 6) {
      if (candies >= priceUpgrade6) {
        candies -= priceUpgrade6;
        levelUpgrade6++;
        candiesPerSecond++; // funkcja specjalna
        priceUpgrade6 = (priceUpgrade6+(levelUpgrade6));
        Buying(i);
      }
    }
    if (i == 7) {
      if (candies >= priceUpgrade7) {
        candies -= priceUpgrade7;
        levelUpgrade7++;
        candiesPerSecond++; // funkcja specjalna
        priceUpgrade7 = (priceUpgrade7+(levelUpgrade7));
        Buying(i);
      }
    }
    if (i == 8) {
      if (candies >= priceUpgrade8) {
        candies -= priceUpgrade8;
        levelUpgrade8++;
        candiesPerSecond++; // funkcja specjalna
        priceUpgrade8 = (priceUpgrade8+(levelUpgrade8));
        Buying(i);
      }
    }
    if (i == 9) {
      if (candies >= priceUpgrade9) {
        candies -= priceUpgrade9;
        levelUpgrade9++;
        candiesPerSecond++; // funkcja specjalna
        priceUpgrade9 = (priceUpgrade9+(levelUpgrade9));
        Buying(i);
      }
    }
  });
}

function Generate() {
  if (autoClick) {
    candies += candiesPerSecond;
    RefreshStatusCandies();
  }
}

setInterval(Generate, autoClickDelay)

async function textInfoAnimation() {
  saveinfo.style.display = 'block';
  saveinfo.style.animation = 'save 1s forwards';
  await Sleep(3);
  saveinfo.style.animation = 'save2 1s forwards';
  await Sleep(1);
  saveinfo.style.display = 'none';
}

function save() {
  textInfoAnimation();

}

async function createFallingCandies() {
  const area = document.querySelector('.candiesarea');
  const obj = document.querySelector('.fallingcandies');
  const el = obj.content.cloneNode(true);
  const min = 25;
  const max = 75;
  const rand = Math.floor(Math.random() * (max - min + 1)) + min;
  el.querySelector('.fallingcandie').style.left = rand + '%';
  await Sleep(1);
  area.appendChild(el);
  backgroundcandies++;
}

function removeFallingCandies() {
  let fallingCandies = document.getElementsByClassName("fallingcandie");
  fallingCandies.parentNode.removeChild(fallingCandies);
}

goldcandy0.addEventListener('click', async function() {
  let number = Math.floor(Math.random()*500);
  candies += number;
  RefreshStatusCandies();
  goldcandy0.style.transform = 'scale(0.1) rotate(360deg)';
  goldcandy0.style.opacity = 0;
  await Sleep(2);
  goldcandy0.style.display = 'none';
  Play('sounds/aouncemment.mp3', generalVolume, false)
});

async function regulate(obj, visibility, time) {
  await Sleep(time);
  obj.style.display = visibility;
}

settings.addEventListener('click', () => {
  regulate(communicat1, 'block', 0);
  precommunicat1.style.animation = 'anim2 0.5s forwards';
});

save1.addEventListener('click', () => {
  precommunicat1.style.animation = 'anim1 0.5s forwards';
  regulate(communicat1, 'none', 0.5);
  generalVolume = ((document.querySelector('#setgeneralvolume').value) / 100);
});

cancel1.addEventListener('click', async function() {
  precommunicat1.style.animation = 'anim1 0.5s forwards';
  regulate(communicat1, 'none', 0.5);
  await Sleep(1);
  document.querySelector('#setgeneralvolume').value = 100;
});

