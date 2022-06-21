// EVENTO DE DESCARGAS (PENDIENTE CARGAR ARCHIVOS A LA NUBE)

let descarga = document.querySelectorAll('.alertDescarga')


descarga.forEach(descarga => {
    descarga.addEventListener('click', () => {
        Swal.fire({
            title: '¿Desea descargar nuestro planner de regalo?',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: 'si',
            denyButtonText: `nos`,
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
              Swal.fire('Descargando!', '', 'success')
            } else if (result.isDenied) {
              Swal.fire('Cancelado', '', 'info')
            }
          })
    })
})



  