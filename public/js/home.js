const mostrarPublicaciones = (publicaciones, elementoHtml) => {

    let secciones = "";
    publicaciones.forEach( (pub) => {
        secciones += `
        
            <section class="card-group container">
            <div class="card">
                <a href="${pub.url_sitio}" target="_blank"> 
                    <img src="${pub.url_imagen}" class="card-img" style="opacity: 0.8;" alt="${pub.titulo}" />
                </a>
                <div class="card-body">
                    <h5 class="card-title">${pub.titulo}</h5>
                    <p class="card-text overflow-auto">${pub.detalle}</p>
                </div>
                <div class="card-footer">
                    <small class="text-muted">${pub.fecha}</small>
                </div>
            </div>
            </section>

        `
    })

    elementoHtml.innerHTML = secciones;
    
}

const obtenerPublicaicones = async () => {
    const response = await fetch('/publicaciones')
    const data = await response.json()
    return data;
}





document.addEventListener('DOMContentLoaded', async () => {
    
    const publicaciones = await obtenerPublicaicones()
    const main = document.querySelector('#lista-publicaciones')
    mostrarPublicaciones(publicaciones, main)
})