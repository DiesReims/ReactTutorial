import React, { useState } from "react";
import { useParams } from "react-router-dom";

const AoEDetail = () => {

    const { id } = useParams();

    const [equipo, setEquipo] = useState({})

    React.useEffect(() => {
        obtenerDatos()
    }, [])

    const obtenerDatos = async () => {
        //const data = await fetch(`https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations/${id}`); url not working
        const data = await fetch("https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations")
        const users = await data.json();
        const civilization = users.civilizations.filter(civ => civ.id == id);
        console.log(civilization)
        setEquipo(civilization[0]);
    }

    return (
        <div className="container">
            <h2>Detalle de civilización</h2>
            <div className="card">
                <img className="card-img-top rounded-top" src="https://as.com/meristation/imagenes/2019/12/16/analisis/1576535260_176460_1576568970_noticia_normal.jpg"></img>
                <div className="card-content">
                    <h3 className="card-title">{equipo.name}</h3>
                    <p className="lead"> Bonus Equipo: {equipo.team_bonus}</p>
                    <p className="lead"> Tipo Armada: {equipo.army_type}</p>
                </div>
            </div>
        </div>
    )
}

export default AoEDetail;