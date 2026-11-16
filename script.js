// INFORMACIÓN DE LOS PERSONAJES Y FACCCIONES

const informacion = {

    invincible: {
        titulo: "INVINCIBLE - MARK GRAYSON",
        texto: "Mark Grayson es un joven mitad humano y mitad viltrumita. Hereda poderes extraordinarios de su padre y debe aprender a utilizarlos para proteger a la humanidad. Su historia trata sobre la identidad, la responsabilidad y las decisiones difíciles."
    },

    omniman: {
        titulo: "OMNI-MAN - NOLAN GRAYSON",
        texto: "Nolan es un viltrumita enviado a la Tierra. Durante años se presenta como el mayor superhéroe del planeta, pero sus verdaderas intenciones están relacionadas con los objetivos del Imperio Viltrumita."
    },

    eve: {
        titulo: "ATOM EVE",
        texto: "Samantha Eve Wilkins tiene la capacidad de manipular la materia a nivel molecular. Puede crear objetos, modificar su entorno y construir estructuras utilizando sus poderes."
    },

    allen: {
        titulo: "ALLEN EL ALIEN",
        texto: "Allen es un extraterrestre que trabaja para la Coalición de Planetas. Es fuerte, optimista y se convierte en uno de los aliados más importantes de Mark."
    },

    robot: {
        titulo: "ROBOT",
        texto: "Robot es un estratega brillante con enormes conocimientos tecnológicos. Su inteligencia y sus habilidades de planificación lo convierten en una figura importante dentro de los Guardianes del Globo."
    },

    thragg: {
        titulo: "THRAGG - GRAN REGENTE",
        texto: "Thragg es el máximo líder del Imperio Viltrumita. Es un combatiente extremadamente poderoso y representa una de las mayores amenazas para Mark y sus aliados."
    },

    viltrumitas: {
        titulo: "LOS VILTRUMITAS",
        texto: "Los viltrumitas son una civilización alienígena con capacidades físicas extraordinarias. Su imperio busca conquistar y controlar otros mundos. Nolan, Mark y Thragg están relacionados con esta especie."
    },

    coalicion: {
        titulo: "COALICIÓN DE PLANETAS",
        texto: "La Coalición de Planetas reúne diferentes civilizaciones que buscan resistir el dominio viltrumita. Sus integrantes trabajan juntos para proteger sus mundos y detener la expansión del imperio."
    }

};


// FUNCIÓN PARA MOSTRAR INFORMACIÓN

function mostrarInfo(personaje) {

    const datos = informacion[personaje];

    if (!datos) return;

    document.getElementById("modalTitulo").textContent = datos.titulo;
    document.getElementById("modalTexto").textContent = datos.texto;

    const modal = new bootstrap.Modal(
        document.getElementById("modalPersonaje")
    );

    modal.show();
}