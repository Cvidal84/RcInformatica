export const linkPage = (id, page) => {
  const link = document.querySelector(id);
  if (link) {
    link.addEventListener("click", (e) => {
      e.preventDefault(); // <--- importante para evitar recarga
      page(); // ejecuta la función asociada
    });
  } else {
    console.warn(`No se encontró el elemento con el selector: ${id}`);
  }
};
