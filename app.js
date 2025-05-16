const galeria = document.getElementById("image");
let imagenesCargadas = [];
const textobuscador = document.getElementById("textobuscador");
const bucsar = document.getElementById('buscar');

fetch('./image.json').then(res => res.json()).then(image => {
    galeria.innerHTML = '';
    image.forEach(element => {
        imagenesCargadas = [...image];
        MesclarImagnes(image);
        mostrarImagenes(image);
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
        const p = document.createElement('p');
        p.textContent = 'Hacer Pedido';
        const img = document.createElement('img');
        img.src = `https://i.postimg.cc/${imagen.archivos}`;
        img.alt = imagen.nombres;
        img.loading = 'lazy';
        div.appendChild(p);
        div.appendChild(img);
        // cuando pasa por ensima el mouse
        // div.addEventListener('mouseover', () => {
        //     div.style.width = '100%';
        //     subtitel.style.display = 'block';
        //     div.style.cursor = 'pointer'
        // })
        // // cuando sale el mouse
        // div.addEventListener('mouseout', () => {
        //     div.style.width = '90%';
        //     subtitel.style.display = 'none';
        // })
        // abrir WhatsApp
        img.addEventListener('click', () => {
            const numeroPrueba = '543764582381';
            const numerodeempresa = '5493765159593'
            const numero = numerodeempresa;
            const mensaje = `Hola, quiero más información sobre esta imagen: https://i.postimg.cc/${imagen.archivos}`;
            const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
            window.open(url, '_blank');
        });
        p.addEventListener('click', () => {
            const numero = '5493765159593';
            const urlImage = `https://i.postimg.cc/${img.src}`;
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
    document.getElementById("textobuscador").value = '';
});
// Buscar imagenes por texto
function buscarImagen(filtro = '') {
    galeria.innerHTML = ''

    const filtradas = imagenesCargadas.filter(img =>
        img.nombres.toLowerCase().includes(filtro.toLowerCase())
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
            const img = document.createElement('img');
            img.src = `https://i.postimg.cc/${element.archivos}`;
            img.alt = element.nombres;
            div.appendChild(img);
            galeria.appendChild(div);
        });
    }
};
bucsar.addEventListener('click', () => {
    buscarImagen(textobuscador.value);
});
// pulsar la tecla enter para buscar
document.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        if (document.getElementById('textobuscador').value != '') {
            buscarImagen(textobuscador.value);
        }
        else {
            buscarImagen('')
        }
    }
});
