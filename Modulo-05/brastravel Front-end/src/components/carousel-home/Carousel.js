import { Link } from 'react-router-dom'
import CarouselInner from './CarouselInner'


function Carousel({ img1, img2, img3, link, text }) {
    return (
        <div className="col-12 col-sm-12 col-md-12 col-lg-5 m-1 p-3 bg-warning rounded">
            <h3 className="text-white text-center shadow-lg text-break rounded py-1">{text}</h3>
            <div id={link} className="carousel slide shadow " data-bs-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-bs-target={"#" + link} data-bs-slide-to="0" className="active"></li>
                    <li data-bs-target={"#" + link} data-bs-slide-to="1"></li>
                    <li data-bs-target={"#" + link} data-bs-slide-to="2"></li>
                </ol>
                
                <Link className="btn" to={"/" + link}>
                    <CarouselInner img1={img1} img2={img2} img3={img3} />
                </Link>

                <a className="carousel-control-prev" href={"#" + link} role="button" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </a>
                <a className="carousel-control-next" href={"#" + link} role="button" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </a>
            </div>
        </div>
    )
}

export default Carousel