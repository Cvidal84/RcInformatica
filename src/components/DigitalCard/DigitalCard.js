import "./DigitalCard.css";

export const DigitalCard = (digital) =>`
    <div class="digital-card">
        <img src="${digital.image}" alt="${digital.title}"/>
        <div class="header">
            <h2>${digital.title}</h2>
        </div>
        <div class="detail">
            <p>${digital.description}</p>
        </div>
    </div>
`;