import "./Home.css";
import { cleanPage } from "../../utils/cleanPage";

export const Home = () => {
  const main = document.querySelector("main");
  cleanPage(main);
  main.innerHTML = `
    <section class="home">
    <img src="/icons/logorc.png" alt="Logotico RcInformatica" class="logorc">
    <p>Bienvenidos a nuestra RcInformática, empresa tecnológica con muchos años de experiencia en el sector. Nos dedicamos tanto a manteniminentos informáticos, telecomunicaciones o clases en nuestra academia de informática. Bienvenido a nuestra gran familia, donde podrás tratar con personas cercanas para resolver todas tus dudas o problemas. Encantados de tratar contigo, empezamos??</p>
    <a href="mailto:admin@rcinformatica.com">Contactar con nosotros →</a>
    </section>`;
};