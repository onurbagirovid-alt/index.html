/* ===== JSON + LOCALSTORAGE ===== */

// JSON-dan oxu
let ticketData = localStorage.getItem("tickets");

// Əgər varsa oxu, yoxdursa 100 ilə başla
let ticket = ticketData
  ? JSON.parse(ticketData)
  : { stock: 100 };

let lang = "az";

/* ===== LANGUAGE ===== */
const text = {
  az:{
    home:"Ana Səhifə",
    episodes:"Bölümlər",
    ticket:"Bilet Al",
    fraqman:"Fragman",
    heroTitle:"Arka Sokaklar { 2025 - 2026 }",
    heroText:'<span>Kanal D |</span> <span>Sezon: 20 |</span> <span>Time: 01:25 |</span> <span>Last Part: 732</span>',
    episodesText:"Serial yüzlərlə bölüm ilə yayımlanmışdır.",
    fraqmanText:"Serialın ən son fragmanı burada.",
    name:"Ad",
    buy:"Al",
    newepisodes: "Yeni Bölüm 732",
    episodesTitle: "Yeni Bölüm",
    newFragman:"Yeni fragman 733",
    fragmanTitle:"Yeni Fragman"
  },
  en:{
    home:"Home",
    episodes:"Episodes",
    ticket:"Buy Ticket",
    fraqman:"Trailer",
    heroTitle:"Legendary Series { 2025 - 2026 }",
    heroText:'<span>Channel D |</span> <span>Season: 20 |</span> <span>Time: 01:25 |</span> <span>Last Part: 732</span>',
    episodesText:"The series has hundreds of episodes.",
    fraqmanText:"Watch the latest trailer here.",
    name:"Name",
    buy:"Buy",
    newepisodes: "New episodes 732",
    episodesTitle: "New Episodes",
    newFragman:"New Trailer 733",
    fragmanTitle:"New Trailer"
  }
};

/* ===== LANGUAGE SWITCH ===== */
function changeLang(l){
  lang = l;

  document.querySelectorAll("[data-key]").forEach(e=>{
    const key = e.dataset.key;

    if(key === "heroTitle"){
      e.innerHTML = "<hr>" + text[lang][key] + "<hr>";
    }
    else if(key === "heroText"){
      e.innerHTML = text[lang][key];
    }
    else{
      e.innerText = text[lang][key];
    }
  });

  document.querySelectorAll("[data-key-placeholder]").forEach(e=>{
    e.placeholder = text[lang][e.dataset.keyPlaceholder];
  });
}

/* ===== PAGE ===== */
function openPage(id){
  document.querySelectorAll(".page").forEach(p=>p.classList.remove("active"));
  document.getElementById(id).classList.add("active");
  document.getElementById("menu").classList.remove("show");
}

/* ===== MENU ===== */
function toggleMenu(){
  document.getElementById("menu").classList.toggle("show");
}

/* ===== BUY TICKET ===== */
function buyTicket(e){
    e.preventDefault();
  
    let count = Number(document.getElementById("count").value);
  
    if(count <= 0) return;
  
    if(ticket.stock >= count){
      ticket.stock -= count;
  
      // JSON kimi saxla
      localStorage.setItem("tickets", JSON.stringify(ticket));
  
      alert(lang === "az"
        ? "Uğurla alındı"
        : "Successfully purchased");
        input = "";
        System.out.println("Input təmizləndi: '" + input + "'");
      
    }
    else{
      alert(lang === "az"
        ? "Stokda kifayət qədər bilet yoxdur"
        : "Not enough tickets");
    }
  
    document.getElementById("stockCount").innerText = ticket.stock;
  }
  
  /* ===== INIT ===== */
  document.getElementById("stockCount").innerText = ticket.stock;
  changeLang("az");

  function updateDateTime(){
    const now = new Date();
  
    const saat = now.toLocaleTimeString("az-AZ", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    });
  
    const tarix = now.toLocaleDateString("az-AZ", {
      day: "2-digit",
      month: "long",
      year: "numeric"
    });
  
    document.getElementById("dateTime").innerText =
      ` Data : ${tarix} | Hour :  ${saat}`;
  }
  
  // hər saniyə yenilə
  setInterval(updateDateTime, 1000);
  updateDateTime();  

  function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('show');
  }
  
  // Səhifələr arası keçid
  function openPage(id) {
    document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
    document.getElementById(id).classList.add('active');
  
    // Mobilda link kliklənəndə menyunu bağla
    if (window.innerWidth <= 768) {
      document.getElementById('menu').classList.remove('show');
    }
  }

  const snowContainer = document.getElementById("snow");

function createSnowflake() {
    const snowflake = document.createElement("div");
    snowflake.classList.add("snowflake");
    const size = Math.random() * 8 + 2; // 2px - 10px
    snowflake.style.width = size + "px";
    snowflake.style.height = size + "px";
    snowflake.style.left = Math.random() * window.innerWidth + "px";
    snowflake.style.animationDuration = (Math.random() * 5 + 5) + "s"; // 5s-10s
    snowContainer.appendChild(snowflake);

    // Animasiya bitdikdən sonra sil
    setTimeout(() => {
        snowflake.remove();
    }, 10000);
}

// Hər 200ms yeni qar damlası əlavə et
setInterval(createSnowflake, 200);



  