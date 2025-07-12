import "./CourseCard.css";

export const CourseCard = (course) => `
<div class="course-card">
<img src=${course.image} alt=${course.title}/>
<div class="header">
<h2>${course.title}</h2>
</div>
<div class="detail">
<p>${course.description}</p>
<p class="tech">${course.tech.join(" - ")}</p>
</div>
</div>
`;