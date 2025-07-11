export function linkPage() {
  document.addEventListener("DOMContentLoaded", () => {
    const boton = document.getElementById("miElemento"); // usa el ID correcto
    if (boton) {
      boton.addEventListener("click", () => {
        console.log("Botón clicado");
      });
    } else {
      console.warn("No se encontró el elemento con id 'miElemento'");
    }
  });
}
