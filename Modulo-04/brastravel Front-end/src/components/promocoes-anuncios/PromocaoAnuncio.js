import { } from './PromocoesAnuncio.css'

function PromocaoAnuncio({ imagem, text, title, subtitle }) {

    return (
        <div className="card bg-warning">
            <img src={imagem} className="card-img-top" alt="..." />
            <div className="card-body">
                <h6 className="card-title">{title}</h6>
                <p className="fw-bold m-0">{subtitle}</p>
                <p>{text}</p>
            </div>
        </div>
    )

}

export default PromocaoAnuncio