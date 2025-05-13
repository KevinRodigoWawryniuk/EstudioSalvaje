const galeria = document.getElementById("image");
let imagenesCargadas = [];
const textobuscador = document.getElementById("textobuscador");
const bucsar = document.getElementById('buscar');
fetch('./image.json').then(res => res.json()).then(imagenes => {
    galeria.innerHTML = ''; // limpiamos la galeria 
    imagenes.forEach(element => {
        imagenesCargadas = [...imagenes];
        MesclarImagnes(imagenes);
        mostrarImagenes(imagenes);
    });
});
// mesclar y randomizar el orden de las imagenes
function MesclarImagnes(imagenes) {
    for (let i = imagenes.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [imagenes[i], imagenes[j]] = [imagenes[j], imagenes[i]];
    }
};
function mostrarImagenes(imagenes) {
    galeria.innerHTML = '';
    imagenes.forEach(imagen => {
        const div = document.createElement('div');
        const subtitel = document.createElement('p');
        subtitel.textContent = 'Si desea obtener mas informacion o realizar un pedido solo haga click en la imagen';
        const img = document.createElement('img');
        img.src = `./products/${imagen.archivo}`;
        img.alt = imagen.nombre;
        div.appendChild(img);
        div.appendChild(subtitel);
        // cuando pasa por ensima el mouse
        // div.addEventListener('mouseover', () => {
        //     div.style.width = '100%';
        //     subtitel.style.display = 'block';
        //     div.style.cursor = 'pointer'
        // })
        // cuando sale
        // div.addEventListener('mouseout', () => {
        //     div.style.width = '90%';
        //     subtitel.style.display = 'none';
        // })
        // abrir WhatsApp
        img.addEventListener('click', () => {
            const numero = '5493764582381';
            const urlImage = `${img.src}`;
            const mensaje = `Hola, quiero más información sobre esta imagen: ${urlImage}`;
            const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
            window.open(url, '_blank');
        });
        galeria.appendChild(div);
    });
};
document.getElementById("botonr").addEventListener('click', () => {
    const imagenesNuevas = [...imagenesCargadas];
    MesclarImagnes(imagenesNuevas);
    mostrarImagenes(imagenesNuevas);
});
// Buscar imagenes por texto
function buscarImagen(filtro = '') {
    galeria.innerHTML = ''

    const filtradas = imagenesCargadas.filter(img =>
        img.nombre.toLowerCase().includes(filtro.toLowerCase())
    );
    if (filtro === '' || filtro.trim() === '' || filtradas.length === 0) {
        MesclarImagnes(imagenesCargadas);
        mostrarImagenes(imagenesCargadas);
        document.getElementById('mensaje').textContent = 'no se a encontrado la imagen buscada';
        setTimeout(() => {
            document.getElementById('mensaje').textContent = '';
        }, 1000);
        return;
    } else {
        filtradas.forEach(element => {
            const div = document.createElement('div');
            const subtitel = document.createElement('p');
            subtitel.textContent = 'Si desea obtener mas informacion o realizar un pedido solo haga click en la imagen';
            const img = document.createElement('img');
            img.src = `./products/${element.archivo}`;
            img.alt = element.nombre;
            div.appendChild(img);
            div.appendChild(subtitel);
            galeria.appendChild(div);
        });
    }
};
bucsar.addEventListener('click', () => {
    buscarImagen(textobuscador.value);
});