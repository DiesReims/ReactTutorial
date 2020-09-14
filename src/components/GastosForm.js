import React, { useState } from "react";
//Hooks react redux
import { useDispatch, useSelector } from 'react-redux';
//Acciones redux
import { añadirGastoAccion } from '../redux/gastoDucks';

function GastosForm(props) {
    const [gasto, setGasto] = useState("");
    const [costo, setCosto] = useState(0);
    const dispatch = useDispatch();

    const handleChange = (e) => {
        const value = e.target.value;
        if (e.target.name === "txtGasto") {
            setGasto(value);
        }
        else if (e.target.name === "txtMonto") {
            setCosto(value);
        }
    }

    const saveData = () => {
        const wrapper = {
            gasto: gasto,
            costo: costo
        }
        if(!validateGasto(wrapper.gasto)) return;
        if(!validateCosto(wrapper.costo)) return;
        dispatch(añadirGastoAccion(wrapper));
        setGasto("");
        setCosto("");
    }

    const validateGasto = (gasto) => {
        const mess = "El gasto debe contener un valor";
        if(gasto == undefined){
            alert(mess);
            return false;
        }
        if(gasto.length === 0){
            alert(mess)
            return false;
        }
        return true;
    }

    const validateCosto = (costo) => {
        if(costo <= 0){
            alert("El costo no puede ser 0 o menor a 0.");
            return false;
        }
        return true;
    }

    return (
        <div className="col-md-12">
            <form>
                <h6>**GASTOS SEMANALES**</h6>
                <hr />
                <div className="form-group row">
                    <label>Gasto:</label>
                    <input
                        name="txtGasto"
                        className="form-control"
                        onChange={handleChange}
                        type="text" 
                        value={gasto}/>
                </div>
                <div className="form-group row">
                    <label>Monto:</label>
                    <input
                        name="txtMonto"
                        className="form-control"
                        onChange={handleChange}
                        type="number"
                        value={costo} />
                </div>
                <button
                    type="button"
                    className="btn btn-dark btn-block"
                    onClick = {saveData}>
                    AGREGAR</button>
            </form>
        </div>
    );
}





export default GastosForm;