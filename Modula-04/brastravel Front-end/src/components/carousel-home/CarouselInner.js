import {} from './CarouselInner.css'

function CarouselInner({ img1, img2, img3 }) {
    return (

        <div className="carousel-inner">
            <div className="carousel-item active imgIndex">
                <img src={img1} className="d-block imgIndex mx-auto" alt="imgHome" />
            </div>
            <div className="carousel-item imgIndex">
                <img src={img2} className="d-block imgIndex mx-auto" alt="imgHome2" />
            </div>
            <div className="carousel-item imgIndex">
                <img src={img3} className="d-block imgIndex mx-auto" alt="imgHome3" />
            </div>
        </div>

    )
}

export default CarouselInner