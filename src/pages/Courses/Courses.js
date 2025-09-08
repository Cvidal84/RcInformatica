import "./Courses.css";
import { cleanPage } from "../../utils/cleanPage";
import { courses } from "../../data/courses";
import { CourseCard } from "../../components/CourseCard/CourseCard";
import { Divider } from "../../components/Divider/Divider";

export const Courses = () => {
  const main = document.querySelector("main");
  cleanPage(main);
  main.innerHTML = `
    <section class="courses">
    <h2>Nuestros cursos</h2>
    <h2>✉️ admin@rcinformatica.com</h2>
    ${Divider()}
    <div class="courses-container"></div>
    </section>`;
  const container = document.querySelector(".courses-container");
  for (const course of courses) {
    const figure = document.createElement("figure");
    figure.innerHTML = CourseCard(course);
    container.appendChild(figure);
  }
};