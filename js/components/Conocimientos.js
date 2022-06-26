const Conocimiento = ({ urlImagen, titulo }) => {
    return `
        <article class="card-tech">
            <div class="card-tech__imagen">
                <img
                    src="${urlImagen}"
                    alt="${titulo}"
                />
            </div>
            <div class="card-tech__title">
                <p class="">${titulo}</p>
            </div>
        </article>
    `;
};

const Conocimientos = (listConocimiento) =>
    listConocimiento
        .map(({ urlImagen, titulo }) => Conocimiento({ urlImagen, titulo }))
        .join("");
