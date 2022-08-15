
// Aparicion de elementos

window.addEventListener('scroll', function () {                         //Al hacer scroll, se ejecuta la funcion
    let elements = document.getElementsByClassName('scroll-content');   //Se obtienen todos los elementos con la clase scroll-content
    let screenSize = window.innerHeight;                                //Se obtiene el tamaño de la pantalla               

    for (var i = 0; i < elements.length; i++) {                         //Se recorren todos los elementos
        let element = elements[i];                                      //Se obtiene el elemento actual

        if (element.getBoundingClientRect().top < screenSize) {         //Si el elemento esta en la pantalla
            element.classList.add('visible');                           //Se agrega la clase visible
        } else {
            element.classList.remove('visible');                        //Si no, se quita la clase visible
        }
    }
});

