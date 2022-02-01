/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './CardViagens.css'

function CardViagens({ id, titulo, preco, InsImg }) {

    return (
        <div className="card bg-warning"> <img src={InsImg} alt={id} />
            <div className="card-body">
                <h5 className="card-title">{titulo}</h5>
                <p className="fs-6 m-0">R$: {preco}</p>
                <p className="card-text">
                    Some quick example text to build on the card title and make up the bulk of
                    the
                    card's content.
                </p>
            </div>
        </div>
    )
}

export default CardViagens