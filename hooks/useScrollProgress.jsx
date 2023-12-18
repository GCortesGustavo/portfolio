import React, {useState, useEffect} from 'react'

const useScrollProgress = () => {
    const [completion, setCompletion] = useState(0)

    useEffect(() => {
        const updateScrollCompletion = () => {
            const currentProgress = window.scrollY;
            const scrollHeight = document.body.scrollHeight - window.innerHeight;

            if (scrollHeight) {
                setCompletion(Number(currentProgress/scrollHeight).toFixed(2) * 100)
            }
        }

        //event
        window.addEventListener("scroll", updateScrollCompletion)
        //clear Event
        return () => window.removeEventListener("scroll", updateScrollCompletion)
    }, []);


    return completion

}

export default useScrollProgress


//Window.scrollY : Calcula el progreso de desplazamiento en el eje vertical Y. 
//Esto se divide por la altura total del desplazamiento: document.body.scrollHeight - window.innerHeight.

//AddEventListener: Escucha el evento de desplazamiento. Cada vez que se desplaza hacia abajo se ejecuta el Evento. Cuando subimos se desmonta.
