import hutao from '/hutao.png';

export function project() {
 return `
 <ul class="list bg-base-100 rounded-box shadow-md w-full">
  
  <li class="p-4 pb-2 text-xs opacity-60 tracking-wide">Currently on Project</li>
  
  <li class="list-row flex items-center justify-between gap-4 p-4">
    <div class="flex items-center gap-3">
      <img class="size-10 rounded-box" src="${hutao}"/>
      <div>
        <div>Hutao Tools</div>
        <div class="text-xs uppercase font-semibold opacity-60">Web downloader</div>
      </div>
    </div>
    <a href="https://hutatools.my.id" target="_blank" rel="noopener noreferrer">
      <button class="btn btn-square btn-ghost">
        <i class="ri-external-link-line"></i>
      </button>
    </a>
  </li>
  
  <li class="list-row flex items-center justify-between gap-4 p-4">
    <div class="flex items-center gap-3">
      <img class="size-10 rounded-box" src="/hyeone.jpg"/>
      <div>
        <div>Hyeone MD</div>
        <div class="text-xs uppercase font-semibold opacity-60">BOT WHATSAPP</div>
      </div>
    </div>
    <a href="https://hyebot.wzblueline.xyz" target="_blank" rel="noopener noreferrer">
      <button class="btn btn-square btn-ghost">
        <i class="ri-external-link-line"></i>
      </button>
    </a>
  </li>
</ul>`
}

export function school() {
    return `<ul class="timeline timeline-vertical">
         <li>
    <div class="timeline-start timeline-box text-center">
       <time class="block font-bold mb-1">2025</time>
    S1 INFORMATIKA - ITS NU PEKALONGAN
    </div>
    <div class="timeline-middle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        class="text-primary h-5 w-5">
        <path
          fill-rule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clip-rule="evenodd" />
      </svg>
    </div>
    <hr class="bg-primary" />
  </li>
  <li>
    <hr class="bg-primary" />
    <div class="timeline-middle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        class="text-primary h-5 w-5">
        <path
          fill-rule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clip-rule="evenodd" />
      </svg>
    </div>
    <div class="timeline-end timeline-box text-center">
       <time class="block font-bold mb-1">2022</time>
    AKUNTANSI - SMK NEGERI 1 SRAGI
    </div>
    <hr class="bg-primary" />
  </li>
  <li>
    <hr class="bg-primary" />
     <div class="timeline-start timeline-box text-center">
       <time class="block font-bold mb-1">2019</time>
    SMP NEGERI 2 SRAGI
    </div>
    <div class="timeline-middle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        class="text-primary h-5 w-5">
        <path
          fill-rule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clip-rule="evenodd" />
      </svg>
    </div>
    <hr class="bg-primary" />
  </li>
    <li>
    <hr class="bg-primary" />
     <div class="timeline-end timeline-box text-center">
       <time class="block font-bold mb-1">2019</time>
    SMP NEGERI 2 SRAGI
    </div>
    <div class="timeline-middle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        class="text-primary h-5 w-5">
        <path
          fill-rule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clip-rule="evenodd" />
      </svg>
    </div>
  </li>
        </ul>`
}

export function gallery() {
  return `
  <div class="w-full max-w-4xl mx-auto text-center">
    <h3 class="p-4 pb-2 text-sm font-bold opacity-80 tracking-wide uppercase border-b border-base-300">
      Manhwa Favorit Gw
    </h3>

    <div class="carousel w-full max-w-md mx-auto mt-4 space-x-4">
      <div class="carousel-item w-3/4 md:w-1/2 flex justify-center">
        <img src="/galeri/manhwa/solo-leveling.jpg" class="rounded-xl shadow-lg hover:scale-105 transition-transform" />
      </div>
      <div class="carousel-item w-3/4 md:w-1/2 flex justify-center">
        <img src="/galeri/manhwa/TRDCH.jpg" class="rounded-xl shadow-lg hover:scale-105 transition-transform" />
      </div>
      <div class="carousel-item w-3/4 md:w-1/2 flex justify-center">
        <img src="/galeri/manhwa/FTBLBV.webp" class="rounded-xl shadow-lg hover:scale-105 transition-transform" />
      </div>
    </div>
  </div>
  `;
}



export function skill(){
  return `<progress class="progress progress-accent w-56" value="10" max="100"></progress>`
}