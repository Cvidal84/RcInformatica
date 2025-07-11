import "./Button.css";

export const Button = (icon, text, link) => `
<a href="${link}" target="_blank" rel="noopener noreferrer">
<button class="my-btn">
<img src=${icon} alt='${text} icon'/>
<h4>${text}</h4>
</button>
`;