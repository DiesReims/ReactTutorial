import React,{useState} from "react";
import GastosForm from "./GastosForm";
import GastosList from "./GastosList";

function GastosCRUD(props) {
            
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-4"/>
                    <div className="col-md-4">
                        <h3>Gastos Calculator.</h3>
                        <p>Usando Redux para manejar una lista local simulando un API.</p>
                        </div>   
                    <div className="col-md-4"/>   
                </div>
                <div className="row">
                    <div className="col-md-6">
                    <GastosForm/>
                    </div>
                    <div className="col-md-6">
                        <GastosList/>
                    </div>
                </div>
            </div>
        );
    }

export default GastosCRUD;