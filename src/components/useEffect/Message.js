import React, { useEffect, useState } from 'react'

export const Message = () => {

    const [Coords, setCoords] = useState({x:0, y:0});

    const {x, y} = Coords

    useEffect(() => {
        //Cuerpo del efecto
        console.log('componente montado')

        const mouseMove = (e)=>{
            const coords = { x: e.x, y: e.y };
            setCoords(coords)
            // console.log(coors)
        }
        window.addEventListener('mousemove',mouseMove)

        return () => {
            //Limpieza
            window.removeEventListener('mousemove',mouseMove)
            console.log('componente desmontado')
        };
    }, []);//Dependencia

  return (
    <div>Eres Genial - x: {x} - y: {y}</div>
  )
}
