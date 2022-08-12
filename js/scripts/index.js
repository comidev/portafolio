// Conocimientos

const htmlFrontendHome = document.getElementById("frontend");
const htmlBackendHome = document.getElementById("backend");
const htmlLearning = document.getElementById("learning");

htmlFrontendHome.innerHTML = Conocimientos(frontend);
htmlBackendHome.innerHTML = Conocimientos(backend);
htmlLearning.innerHTML = Conocimientos(learning);

// Últimos 3 Proyectos

const htmlProyectos3 = document.getElementById("proyectos-3");
const renderProyecto3 = Proyectos(true);
htmlProyectos3.innerHTML = renderProyecto3;

// Últimas 3 Experiencias

const htmlExperiencia3 = document.getElementById("experiencia-3");
const renderExperiencia3 = Experiencias(true);
htmlExperiencia3.innerHTML = renderExperiencia3;
