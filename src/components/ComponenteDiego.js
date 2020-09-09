import React from 'react';


class ComponenteDiego extends React.Component{

    render(){
        let receta = {
            nombre: 'Pizza',
            Ingredientes: ['Pan','Salami','Tocino'],
            calorias: 433
        };
        return (
            <div className="container">
                <div className="card" style={{width: "20rem"}}>
                <img className="card-img-top rounded-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRutoDH6_v8Ql4fAa-aqJE-fx-PMnTmB-mBPQ&usqp=CAU" alt="Card image cap"/>
                    <div className="card-body">
                    <h5 className="card-title">
                        {receta.nombre}
                    </h5>
                        <p className="card-text text-primary">
                        Consumo calorico: {receta.calorias} calorias.
                        </p>
                    </div>
                <ol>
                    {
                        receta.Ingredientes.map((ingrediente, i)=> {
                            return (
                            <li key={i}>{ingrediente}</li>
                            );
                        })
                    }
                </ol>
                <a href="#" class="btn btn-dark block">Más Información...</a>
                </div>
            </div>
        );
    }
}

export default ComponenteDiego;