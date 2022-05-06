const Conocimiento = ({ urlImagen, titulo, nivel }) => {
    return `
        <article class="card-tech">
            <div class="card-tech__imagen">
                <img
                    src="${urlImagen}"
                    alt="${titulo}"
                />
            </div>
            <p class="card-tech__title">${titulo}</p>
            <p class="text card-tech__subtitle">${nivel}</p>
        </article>
    `;
};

const Conocimientos = (listConocimiento) => {
    return listConocimiento
        .map(({ urlImagen, titulo, nivel }) =>
            Conocimiento({ urlImagen, titulo, nivel })
        )
        .join("");
};
