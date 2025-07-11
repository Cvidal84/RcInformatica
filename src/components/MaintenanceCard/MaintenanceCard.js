import "./MaintenanceCard.css";

export const MaintenanceCard = (service) => `
  <div class="maintenance-card">
    <img src="${service.image}" alt="${service.title}" />
    <div class="header">
      <h2>${service.title}</h2>
      <span class="mode">${service.mode}</span>
    </div>
    <div class="detail">
      <p>${service.description}</p>
      <ul class="services">
        ${service.services.map(item => `<li>${item}</li>`).join("")}
      </ul>
    </div>
  </div>
`;