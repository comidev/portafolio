const Proyecto = ({ title, urlImagen, tools, info, urlCode, urlDemo }) => {
    return `
        <article class="card">
            <img
                src="${urlImagen}"
                alt="${title}"
            />
            <div class="card__info">
                <h4 class="card__title">${title}</h4>
                <ul class="tools">
                    ${tools.map((item) => `<li class="tool">#${item}</li>`).join("")}
                </ul>
                <p class="text card__text">${info}</p>
                <div class="buttons buttons-card">
                    <a
                    href="${urlCode}"
                    target="_blank"
                    class="btn btn-gold"
                    >Code</a>
                    <a
                    href="${urlDemo}"
                    target="_blank"
                    class="btn btn-primary"
                    >Demo</a>
                </div>
            </div>
        </article>
    `;
};

const Experiencia = ({ title, urlImagen, info }) => {
    return `
       <article class="card">
                <img
                    src="${urlImagen}"
                    alt="${title}"
                />
                <div class="card__info">
                <h4 class="card__title">${title}</h4>
                <p class="text card__text">${info}</p>
                </div>
        </article>
    `;
};

const SIZE_HOME = 4;

const Proyectos = (isHome) => {
    const list = isHome ? proyectos.slice(0, SIZE_HOME) : proyectos;
    return list
        .map(({ title, urlImagen, info, urlCode, urlDemo, tools }) =>
            Proyecto({ title, urlImagen, tools, info, urlCode, urlDemo })
        )
        .join("");
};

const Experiencias = (isHome) => {
    const list = isHome ? experiencias.slice(0, SIZE_HOME) : experiencias;
    return list
        .map(({ title, urlImagen, info }) => Experiencia({ title, urlImagen, info }))
        .join("");
};
