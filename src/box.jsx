import React, { useContext } from 'react';
import style from './assets/box.module.css';
import { FruitApp } from "./context/context";

function Box({ data }) {
    const { state, dispatch } = useContext(FruitApp);
    const { name, image, price } = data;
    const { count } = state;

    const increase = () => {
        dispatch({ type: 'artir' });
    };

    const decrease = () => {
        if (count > 1) {
            dispatch({ type: 'azalt' });
        }
    };

    const handleAdd = () => {
        dispatch({ type: 'add' });
    };

    return (
        <div className={style.boxs}>
            <img src={image} alt={name} />
            <h2>{name}</h2>
            <h5>{price * count}</h5>
            <div className={style.buttons}>
                <button onClick={increase}>+</button>
                <p>{count}</p>
                <button onClick={decrease}>-</button>
            </div>
            <button onClick={handleAdd}>Add</button>
        </div>
    );
}

export default Box;
