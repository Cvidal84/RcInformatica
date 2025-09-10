import "./KitDigital.css";
import { cleanPage } from "../../utils/cleanPage";
import {digitalKitServices} from "../../data/digitalKitServices.js"
import { DigitalCard } from "../../components/DigitalCard/DigitalCard";
import { Divider } from "../../components/Divider/Divider";

export const KitDigital = () => {
    const main = document.querySelector("main");
    cleanPage(main);
    main.innerHTML = `
        <section class="digital">
        <h2>Servicios Kit Digital</h2>
        <h2 class="email">✉️ kitdigital@rcinformatica.com</h2>
        ${Divider()}
        <div class="digitals-container"></div>
        </section>
    `;
    const container = document.querySelector(".digitals-container");
    for (const digital of digitalKitServices){
        const figure = document.createElement("figure");
        figure.innerHTML = DigitalCard(digital);
        container.appendChild(figure);
    }
}