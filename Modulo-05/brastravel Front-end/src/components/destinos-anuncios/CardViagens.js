function CardViagens({ id, titulo, preco, InsImg }) {
    return (
        <>
            <img src={InsImg} alt={id} />
            <div className="card-body">
                <h5 className="card-title">{titulo}</h5>
                <p className="fs-6 m-0">R$: {preco}</p>
                <p className="card-text">
                    Some quick example text to build on the card title and make up the bulk of
                    the
                    card's content.
                </p>
            </div>
        </>

    )
}

export default CardViagens