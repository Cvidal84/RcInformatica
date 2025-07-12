import "./Home.css";
import { cleanPage } from "../../utils/cleanPage";

// funcion para generar estrellas
function generateStars(quantity = 1000) {
  const starsContainer = document.querySelector(".stars");
  for (let i = 0; i < quantity; i++) {
    const star = document.createElement("div");
    star.classList.add("star");
    star.style.top = `${Math.random() * 100}%`;
    star.style.left = `${Math.random() * 100}%`;
    star.style.width = star.style.height = `${Math.random() * 2 + 1}px`;
    star.style.opacity = Math.random();
    starsContainer.appendChild(star);
  }
}

export const Home = () => {
  const main = document.querySelector("main");
  cleanPage(main);
  main.innerHTML = `
    <div class="stars"></div>
    <section class="home">
    <img src="/icons/logorc.png" alt="Logotico RcInformatica" class="logorc">
    <p>
    Bienvenido a RcInformática, una empresa tecnológica con amplia experiencia en el sector. Ofrecemos servicios de mantenimiento informático, telecomunicaciones y formación especializada en nuestra academia. Nos enorgullece brindar una atención cercana y personalizada, ayudándote a resolver cualquier duda o necesidad tecnológica. Estaremos encantados de acompañarte.</p>
    <p>¿Empezamos?</p>
    <a href="mailto:admin@rcinformatica.com">Mándanos un email →</a>
    </section>`;

    generateStars();
    // Insertar el script del chatbot si no está ya cargado
if (!document.getElementById("chatbaseScript")) {
  const script = document.createElement("script");
  script.id = "chatbaseScript";
  script.src = "https://www.chatbase.co/embed.min.js";
  script.defer = true;
  script.setAttribute("chatbotId", "NeX_WSCZG19Rtq0KH3Zrj");
  script.setAttribute("domain", "rcinformatica.vercel.app");
  document.body.appendChild(script);
}
};
