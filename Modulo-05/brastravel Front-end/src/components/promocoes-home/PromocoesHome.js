import { Link } from "react-router-dom";

function PromocoesHome({link, text, title}) {
    return (
        <div className="col-12 col-sm-12 col-md-12 col-lg-5 m-1 rounded shadow colorBlue">
            <Link className="d-flex " style={{ textDecoration: 'none' }} to={link}>
                <div className="container py-2 text-white text-center text-break">
                    <h2>{title}</h2>
                    <hr />
                    <p>{text}</p>
                </div>
            </Link>
        </div>

    )
}

export default PromocoesHome