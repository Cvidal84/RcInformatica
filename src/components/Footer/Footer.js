import "./Footer.css";
import { Button } from "../Button/Button";

export const Footer = () => `
<div>
${Button("/icons/instagram.png", "Instagram","https://www.instagram.com/informatica.rc/")}
${Button("/icons/facebook.png", "Facebook","https://www.facebook.com/rc.informatica.cursos.web")}
${Button("/icons/whatsapp.png", "Whatsapp","https://wa.me/34698986560")}
${Button("/icons/in.png", "LinkedIn","https://www.linkedin.com/company/rcinformatica/")}
</div>
<p>&copy; 2025 RcInformática. Todos los derechos reservados.</p>
`;