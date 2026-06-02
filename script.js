// ============================
// MENU MOBILE
// ============================

const mobileBtn = document.createElement("div");
mobileBtn.classList.add("mobile-btn");

mobileBtn.innerHTML = `
  <span></span>
  <span></span>
  <span></span>
`;

document.querySelector("nav").appendChild(mobileBtn);

const navList = document.querySelector("nav ul");

mobileBtn.addEventListener("click", () => {
  navList.classList.toggle("active");
  mobileBtn.classList.toggle("open");
});

// ============================
// ESTILO MENU MOBILE
// ============================

const style = document.createElement("style");

style.innerHTML = `
  .mobile-btn{
    display:none;
    flex-direction:column;
    gap:5px;
    cursor:pointer;
  }

  .mobile-btn span{
    width:28px;
    height:3px;
    background:#fff;
    border-radius:10px;
    transition:0.3s;
  }

  .mobile-btn.open span:nth-child(1){
    transform:rotate(45deg) translateY(11px);
  }

  .mobile-btn.open span:nth-child(2){
    opacity:0;
  }

  .mobile-btn.open span:nth-child(3){
    transform:rotate(-45deg) translateY(-11px);
  }

  @media(max-width:768px){

    .mobile-btn{
      display:flex;
    }

    nav ul{
      position:absolute;
      top:80px;
      left:0;
      width:100%;
      background:#050816;
      flex-direction:column;
      padding:30px;
      display:none;
      gap:20px;
      border-top:1px solid rgba(255,255,255,0.1);
    }

    nav ul.active{
      display:flex;
    }
  }
`;

document.head.appendChild(style);

// ============================
// HEADER SCROLL EFFECT
// ============================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

  if(window.scrollY > 50){
    header.style.background = "#02040be8";
    header.style.boxShadow = "0 5px 20px rgba(0,0,0,0.4)";
  } else {
    header.style.background = "rgba(0,0,0,0.6)";
    header.style.boxShadow = "none";
  }

});

// ============================
// ANIMAÇÃO AO ROLAR
// ============================

const animatedElements = document.querySelectorAll(
  ".card, .step, .testimonial, .section-title"
);

const observer = new IntersectionObserver((entries) => {

  entries.forEach((entry) => {

    if(entry.isIntersecting){

      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0px)";

    }

  });

},{
  threshold:0.15
});

animatedElements.forEach((el) => {

  el.style.opacity = "0";
  el.style.transform = "translateY(40px)";
  el.style.transition = "all 0.8s ease";

  observer.observe(el);

});

// ============================
// CONTADOR DE NÚMEROS
// ============================

function animateValue(element, start, end, duration){

  let startTime = null;

  function animation(currentTime){

    if(!startTime){
      startTime = currentTime;
    }

    const progress = Math.min(
      (currentTime - startTime) / duration,
      1
    );

    element.innerHTML = Math.floor(
      progress * (end - start) + start
    );

    if(progress < 1){
      requestAnimationFrame(animation);
    }

  }

  requestAnimationFrame(animation);

}

// ============================
// BOTÃO WHATSAPP
// ============================

const whatsappButtons = document.querySelectorAll(".btn");

whatsappButtons.forEach((button) => {

  if(button.innerText.includes("WhatsApp")){

    button.addEventListener("click", (e) => {

      e.preventDefault();

      const phone = "5562992118162";

      const message =
      "Olá! Quero agendar uma aula experimental no Elite Lab.";

      const url =
      `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

      window.open(url, "_blank");

    });

  }

});

// ============================
// EFEITO PARALLAX HERO
// ============================

const hero = document.querySelector(".hero");

window.addEventListener("scroll", () => {

  let offset = window.scrollY;

  hero.style.backgroundPositionY = offset * 0.5 + "px";

});

// ============================
// SCROLL SUAVE LINKS
// ============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

  anchor.addEventListener("click", function(e){

    e.preventDefault();

    const target = document.querySelector(
      this.getAttribute("href")
    );

    if(target){

      target.scrollIntoView({
        behavior:"smooth"
      });

    }

  });

});

// ============================
// EFEITO HOVER 3D NOS CARDS
// ============================

const cards = document.querySelectorAll(".card");

cards.forEach((card) => {

  card.addEventListener("mousemove", (e) => {

    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateY = ((x / rect.width) - 0.5) * 10;
    const rotateX = ((y / rect.height) - 0.5) * -10;

    card.style.transform =
      `perspective(1000px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      translateY(-10px)`;

  });

  card.addEventListener("mouseleave", () => {

    card.style.transform =
      "perspective(1000px) rotateX(0) rotateY(0)";

  });

});

// ============================
// PRELOADER
// ============================

const preloader = document.createElement("div");

preloader.innerHTML = `
  <div class="loader"></div>
`;

preloader.classList.add("preloader");

document.body.appendChild(preloader);

const preloadStyle = document.createElement("style");

preloadStyle.innerHTML = `
  .preloader{
    position:fixed;
    inset:0;
    background:#050816;
    display:flex;
    align-items:center;
    justify-content:center;
    z-index:99999;
    transition:0.6s;
  }

  .loader{
    width:60px;
    height:60px;
    border:5px solid #1e2a52;
    border-top:5px solid #f5a623;
    border-radius:50%;
    animation:spin 1s linear infinite;
  }

  @keyframes spin{
    to{
      transform:rotate(360deg);
    }
  }
`;

document.head.appendChild(preloadStyle);

window.addEventListener("load", () => {

  setTimeout(() => {

    preloader.style.opacity = "0";

    setTimeout(() => {
      preloader.remove();
    }, 600);

  }, 800);

});

// ============================
// ANO AUTOMÁTICO NO FOOTER
// ============================

const footer = document.querySelector("footer");

const year = new Date().getFullYear();

footer.innerHTML += `
  <p style="margin-top:10px;">
    © ${year} Todos os direitos reservados.
  </p>
`;

// ========================================
// ANIMAÇÃO DOS NÚMEROS
// ========================================

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver((entries)=>{

  entries.forEach((entry)=>{

    if(entry.isIntersecting){

      const counter = entry.target;

      const target = +counter.getAttribute("data-target");

      let current = 0;

      const increment = target / 100;

      const updateCounter = ()=>{

        current += increment;

        if(current < target){

          counter.innerText = Math.floor(current);

          requestAnimationFrame(updateCounter);

        } else {

          counter.innerText = "+" + target;

        }

      };

      updateCounter();

      counterObserver.unobserve(counter);

    }

  });

},{
  threshold:0.5
});

counters.forEach(counter=>{
  counterObserver.observe(counter);
});