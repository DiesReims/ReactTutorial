import React, { useState } from "react";
import { Link } from 'react-router-dom';

const AoE = () => {

    const [equipo, setEquipo] = useState([])

    React.useEffect(() => {
        obtenerDatos()
    }, [])

    const obtenerDatos = async () => {
        const data = await fetch("https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations");
        const users = await data.json();
        setEquipo(users.civilizations);
    }

    return (
        <div className="container">
            <h3>AOE 2 civilizations</h3>
            <p>Utiliza Cors para realizar la petición.</p>
            <ul className="list-group">
                {
                    equipo.map(item => (
                        <li
                            className="list-group-item"
                            key={item.id}>
                            <Link to={`/aoe/${item.id}`}>
                                {item.name} - {item.expansion}
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    );

}

export default AoE;