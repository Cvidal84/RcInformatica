import "./Home.css";
import { cleanPage } from "../../utils/cleanPage";

// funcion para generar estrellas
function generateStars(quantity = 1000) {
  const starsContainer = document.querySelector(".stars");
  starsContainer.innerHTML = ""; // Limpia estrellas anteriores si recargas
  for (let i = 0; i < quantity; i++) {
    const star = document.createElement("div");
    star.classList.add("star");
    star.style.top = `${Math.random() * 100}%`;
    star.style.left = `${Math.random() * 100}%`;
    const size = Math.random() * 2 + 1;
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.opacity = Math.random();
    star.style.setProperty('--delay', `${Math.random() * 10}s`); // Delay aleatorio hasta 10s
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

};
