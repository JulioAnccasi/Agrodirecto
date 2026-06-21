const servicios = document.querySelector("#servicios");
const soporte = document.querySelector("#soporte");

servicios.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector(".descripcion").scrollIntoView({ behavior: "smooth" });
});

soporte.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector(".redes-contacto").scrollIntoView({ behavior: "smooth" });
});