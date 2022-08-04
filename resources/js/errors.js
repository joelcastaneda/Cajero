
    /** ERRORES */
    function alert(t,msj,type){ 
        Swal.fire({
            title: t,
            text: msj,
            icon: type,
            confirmButtonText: 'Ok'
        })}