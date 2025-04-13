import 'remixicon/fonts/remixicon.css';
import { player } from '../../api/index';

const ipMC = "play.hexagonal.web.id";

document.querySelector('#app').innerHTML = `
  <div class="flex flex-col items-center justify-center p-2 space-y-10 w-full max-w-4xl mx-auto">

    <!-- Navbar -->
    <div id="navbar" class="navbar sticky top-0 z-50 bg-base-100 px-4 transition-all duration-300">
  <div class="flex-1">
    <a class="btn btn-ghost text-xl">HEXAGONAL</a>
  </div>
  <div class="flex items-center gap-x-3 relative">
    <button id="discordUrl" class="btn btn-square btn-ghost text-xl">
      <i class="ri-discord-fill"></i>
    </button>

    <!-- Toggle Menu Button -->
    <button id="menu-toggle" class="btn btn-circle btn-ghost text-xl">
      <i id="menu-icon" class="ri-menu-4-line"></i>
    </button>

    <!-- Dropdown Menu -->
    <ul id="dropdownMenu" class="menu menu-sm absolute right-0 top-full mt-2 z-50 p-2 shadow bg-base-100 rounded-box w-52 hidden">
      <li><a href="#hero">Hero</a></li>
      <li><a href="#player-list">Player Online</a></li>
    </ul>
  </div>
</div>


    <!-- Navbar End -->

    <!-- Hero Section -->
    <section id="hero" class="relative w-full">
      <img src="/background/dermaga.png" alt="Background" class="rounded-xl w-full h-[300px] object-cover" />
      <div class="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black/40 rounded-xl p-6">
        <h1 class="text-4xl font-bold mb-2">Selamat Datang di HEXAGONAL</h1>
        <p class="mb-4 text-lg">Server Minecraft Survival Yang cocok dimainkan bersama Temanmu!</p>
        <div class="flex flex-wrap justify-center gap-4">
          <button class="btn btn-primary" onclick="window.open('https://discord.com/invite/bQFJu52Xr3', '_blank')">
            <i class="ri-discord-fill mr-2"></i> Join Discord
          </button>
          <button class="btn btn-outline btn-secondary" onclick="navigator.clipboard.writeText('${ipMC}')">
            Copy IP
          </button>
        </div>
      </div>
    </section>
    <!-- Hero End -->

    <!-- Player Online -->
<section id="player-list" class="w-full bg-base-100 p-4 rounded-xl shadow-md">
  <div class="flex items-center justify-between mb-4">
    <h2 class="text-2xl font-bold">Player Online</h2>
    <div class="flex items-center gap-2 text-sm bg-base-200 px-3 py-1 rounded-full">
      <i class="ri-user-smile-line text-lg"></i>
      <span id="player-count" class="font-semibold">0/20</span>
    </div>
  </div>
  <ul id="online-players" class="space-y-2">
    ${[...Array(3)].map(() => `
      <li class="p-2 bg-base-200 rounded-md shadow-sm flex items-center gap-2 animate-pulse">
        <div class="w-6 h-6 bg-gray-400 rounded"></div>
        <div class="h-4 w-1/4 bg-gray-400 rounded"></div>
      </li>
    `).join('')}
  </ul>
</section>
<!-- Player Online End -->


    <!-- Footer -->
    <footer class="w-full footer footer-center bg-base-100 text-base-content p-4">
      <aside>
        <p>Copyright © ${new Date().getFullYear()} HEXA - All rights reserved</p>
      </aside>
    </footer>

  </div>
`;

// Load Player Online
async function loadPlayers() {
  const listContainer = document.getElementById('online-players');
  const playerCount = document.getElementById('player-count');
  try {
    const players = await player.lists();
    playerCount.textContent = `${players.length}/20`;
    if (players.length === 0) {
      listContainer.innerHTML = `<li class="text-gray-500">Tidak ada player online</li>`;
    } else {
      listContainer.innerHTML = players.map(p => `
        <li class="p-2 bg-base-200 rounded-md shadow-sm flex items-center gap-2">
          <img src="https://minotar.net/avatar/${p.name}/24" alt="${p.name}" class="rounded" />
          <span>${p.displayName}</span>
        </li>
      `).join('');
    }
  } catch (err) {
    listContainer.innerHTML = `<li class="text-red-500">Gagal memuat player online</li>`;
    playerCount.textContent = `0/20`;
    console.error(err);
  }
}


loadPlayers();

const toggleBtn = document.getElementById('menu-toggle');
const menuIcon = document.getElementById('menu-icon');
const dropdownMenu = document.getElementById('dropdownMenu');

let isMenuOpen = false;

toggleBtn.addEventListener('click', () => {
  isMenuOpen = !isMenuOpen;
  dropdownMenu.classList.toggle('hidden', !isMenuOpen);
  menuIcon.className = isMenuOpen ? 'ri-close-line' : 'ri-menu-4-line';
});

// Auto-close menu after clicking one of the links
dropdownMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    isMenuOpen = false;
    dropdownMenu.classList.add('hidden');
    menuIcon.className = 'ri-menu-4-line';
  });
});

// Scroll behavior untuk navbar
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 10) {
    navbar.classList.add('shadow-lg', 'bg-base-200');
  } else {
    navbar.classList.remove('shadow-lg', 'bg-base-200');
  }
});
