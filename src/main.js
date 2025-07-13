import './style.css'
import { changeTheme, setupHamburger} from "./components/Navbar/Navbar";
import { linkPage } from "./utils/linkPage";
import { Navbar } from "./components/Navbar/Navbar";
import { Footer } from "./components/Footer/Footer";
import { Home } from "./pages/Home/Home";
import { Courses } from "./pages/Courses/Courses";
import { Maintenances } from "./pages/Maintenances/Maintenances";
import { Divider } from "./components/Divider/Divider";
import { KitDigital } from './pages/KitDigital/KitDigital';

const header = document.querySelector("header");
header.innerHTML = Navbar();
const footer = document.querySelector("footer");
footer.innerHTML = Footer();

linkPage("#homelink", Home);
linkPage("#courseslink", Courses);
linkPage("#mantlink", Maintenances);
linkPage("#kit-digital", KitDigital);

Home();

changeTheme();
setupHamburger();

footer.insertAdjacentHTML("beforebegin", Divider());