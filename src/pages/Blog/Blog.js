import "./Blog.css";
import { cleanPage } from "../../utils/cleanPage";
import { db } from "../../firebase/config";
import {
  collection,
  addDoc,
  deleteDoc,
  doc,
  onSnapshot,
  query,
  orderBy,
} from "firebase/firestore";

export const Blog = () => {
  const main = document.querySelector("main");
  cleanPage(main);

  main.innerHTML = `
    <div class="blog-container">
      <div class="blog-header">
        <h2>Blog</h2>
        <p>Noticias, actualizaciones y recursos interesantes.</p>
      </div>

      <div class="create-post-section">
        <h3>Publicar nuevo artículo</h3>
        <form id="createPostForm" class="post-form">
          <input type="text" id="postTitle" placeholder="Título del artículo" required>
          <textarea id="postContent" rows="4" placeholder="Contenido del artículo..." required></textarea>
          <input type="url" id="postLink" placeholder="Enlace opcional (ej: https://...)" >
          <button type="submit">Publicar</button>
        </form>
      </div>

      <div id="postsList" class="posts-list">
        <!-- Posts will be injected here -->
        <p style="text-align:center; color: #888;">Cargando publicaciones...</p>
      </div>
    </div>

    <!-- Password Modal -->
    <div id="passwordModal" class="modal-overlay">
        <div class="modal-content">
            <h3>Contraseña de Administrador</h3>
            <input type="password" id="modalPasswordInput" placeholder="Introduce la contraseña">
            <div class="modal-buttons">
                <button id="modalCancelBtn" class="modal-btn cancel">Cancelar</button>
                <button id="modalConfirmBtn" class="modal-btn confirm">Confirmar</button>
            </div>
        </div>
    </div>
  `;

  const form = document.getElementById("createPostForm");
  const postsList = document.getElementById("postsList");
  const modal = document.getElementById("passwordModal");
  const modalInput = document.getElementById("modalPasswordInput");
  const modalConfirmBtn = document.getElementById("modalConfirmBtn");
  const modalCancelBtn = document.getElementById("modalCancelBtn");

  // Helper function to ask for password using the modal
  const askPassword = () => {
    return new Promise((resolve) => {
      modal.classList.add("show");
      modalInput.value = "";
      modalInput.focus();

      const confirmHandler = () => {
        const password = modalInput.value;
        cleanup();
        resolve(password);
      };

      const cancelHandler = () => {
        cleanup();
        resolve(null);
      };

      const keyHandler = (e) => {
        if (e.key === "Enter") confirmHandler();
        if (e.key === "Escape") cancelHandler();
      };

      const cleanup = () => {
        modal.classList.remove("show");
        modalConfirmBtn.removeEventListener("click", confirmHandler);
        modalCancelBtn.removeEventListener("click", cancelHandler);
        modalInput.removeEventListener("keyup", keyHandler);
      };

      modalConfirmBtn.addEventListener("click", confirmHandler);
      modalCancelBtn.addEventListener("click", cancelHandler);
      modalInput.addEventListener("keyup", keyHandler);
    });
  };

  // Real-time listener for posts
  const q = query(collection(db, "posts"), orderBy("date", "desc"));
  const unsubscribe = onSnapshot(q, (snapshot) => {
    const posts = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

    if (posts.length === 0) {
      postsList.innerHTML =
        '<p style="text-align:center; color: #888;">No hay publicaciones aún.</p>';
      return;
    }

    postsList.innerHTML = posts
      .map(
        (post) => `
      <article class="blog-post">
        <div class="post-header-row">
            <h3>${post.title}</h3>
            <button class="delete-btn" data-id="${
              post.id
            }" title="Borrar publicación">🗑️</button>
        </div>
        <span class="post-date">${new Date(
          post.date
        ).toLocaleDateString()}</span>
        <p class="post-content">${post.content}</p>
        ${
          post.link
            ? `<a href="${post.link}" target="_blank" class="post-link">Leer más →</a>`
            : ""
        }
      </article>
    `
      )
      .join("");

    // Add event listeners to delete buttons
    document.querySelectorAll(".delete-btn").forEach((btn) => {
      btn.addEventListener("click", async (e) => {
        const id = e.target.dataset.id; // Firestore IDs are strings
        if (confirm("¿Seguro que quieres borrar esta publicación?")) {
          const password = await askPassword();
          if (password === "combrombo000666") {
            try {
              await deleteDoc(doc(db, "posts", id));
            } catch (error) {
              console.error("Error deleting document: ", error);
              alert("Error al borrar la publicación.");
            }
          } else if (password !== null) {
            alert("Contraseña incorrecta");
          }
        }
      });
    });
  });

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const password = await askPassword();
    if (password !== "combrombo000666") {
      if (password !== null) alert("Contraseña incorrecta");
      return;
    }

    const title = document.getElementById("postTitle").value;
    const content = document.getElementById("postContent").value;
    const link = document.getElementById("postLink").value;

    const newPost = {
      title,
      content,
      link,
      date: new Date().toISOString(),
    };

    try {
      await addDoc(collection(db, "posts"), newPost);
      form.reset();
    } catch (e) {
      console.error("Error adding document: ", e);
      alert("Error al publicar el artículo.");
    }
  });
};
