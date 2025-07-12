import "./Navbar.css";

export const changeTheme = () => {
  const themeBtn = document.querySelector("#themeBtn");
  themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("light");
    changeText();
  });
};

export const changeText = () => {
  const themeBtn = document.querySelector("#themeBtn");
  if (themeBtn.innerText === "☀") {
    themeBtn.innerText = "☾";
  } else {
    themeBtn.innerText = "☀";
  }
};

export const setupHamburger = () => {
  const hamburgerBtn = document.querySelector("#hamburgerBtn");
  const navLinks = document.querySelector("#navLinks");

  hamburgerBtn.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
};

export const Navbar = () => `
<nav>
<h2>RcInformática</h2>
<button class="hamburger" id="hamburgerBtn">
    <img src="/icons/logorc.png" alt="Menú" class="menu-avatar" />
</button>
<ul id="navLinks">
    <li>
        <a href="#" id="homelink">Principal</a>
    </li>
    <li>
        <a href="#" id="courseslink">Cursos</a>
    </li>
    <li>
        <a href="#" id="mantlink">Mantenimientos</a>
    </li>
    <li>
        <a href="#" id="kit-digital">Kit Digital</a>
    </li>
    <li>
      <label><input value="on" name="dummy" type="checkbox" id="themeBtn"></label>
    </li>
</ul>
</nav>
`;

