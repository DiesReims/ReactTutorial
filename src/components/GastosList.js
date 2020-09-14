import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removedGastoAccion } from '../redux/gastoDucks';

function GastosList(props) {
    const [time, setTime] = useState(Date.now());
    const gastos = useSelector(store => store.gastos.array);
    const total = (gastos.length === 0 ? 0 : gastos.map(c => c.costo).reduce((a, b) => (a + Number(b)), 0));
    const dispatch = useDispatch();

    React.useEffect(() => {
        const interval = setInterval(() => setTime(Date.now()), 1000);
        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <div>
            <ul className="list-group">
                {gastos.map(item => (
                    <li
                        className="list-group-item"
                        key={item.gasto}>{item.gasto} ${item.costo} MXN.
                        <span className="close danger"
                        onClick={() => dispatch(removedGastoAccion(item.gasto))}>X</span>
                    </li>)
                )}
            </ul>
            <div>
                <h4>Total: $ {total} MXN</h4>
            </div>
        </div>
    );
}

export default GastosList;