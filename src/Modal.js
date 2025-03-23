import mediumZoom from 'medium-zoom';

// Seleccionamos los elementos del modal
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImg");
const closeBtn = document.querySelector(".close");

// Agregar evento a cada imagen para abrir el modal
document.querySelectorAll(".artwork img").forEach(img => {
  img.addEventListener("click", function() {
    modal.style.display = "flex";
    modalImg.src = this.src;
  });
});

// Evento para cerrar el modal
closeBtn.addEventListener("click", function() {
  modal.style.display = "none";
});

// Cerrar el modal si se hace clic fuera de la imagen
modal.addEventListener("click", function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});


const zoomableImages = document.querySelectorAll('.zoomable-image');
mediumZoom(zoomableImages, {
  margin: 20, // Margen de la imagen en el zoom
  background: 'rgba(0, 0, 0, 0.8)', // Fondo oscuro al hacer zoom
  scrollOffset: 40, // Cuánto desplazamiento se permite antes de cerrar el zoom
});
