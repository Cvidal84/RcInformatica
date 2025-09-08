import "./Maintenances.css";
import { cleanPage } from "../../utils/cleanPage.js";
import { maintenances } from "../../data/maintenances.js";
import { MaintenanceCard } from "../../components/MaintenanceCard/MaintenanceCard.js";
import { Divider } from "../../components/Divider/Divider.js";

export const Maintenances = () => {
  const main = document.querySelector("main");
  cleanPage(main);
  main.innerHTML = `
    <section class="maintenances">
    <h2>Nuestros mantenimientos</h2>
    <h2>✉️ admin@rcinformatica.com</h2>
    ${Divider()}
    <div class="maintenances-container"></div>
    </section>`;
  const container = document.querySelector(".maintenances-container");
  for (const maintenance of maintenances) {
    const figure = document.createElement("figure");
    figure.innerHTML = MaintenanceCard(maintenance);
    container.appendChild(figure);
  }
};
