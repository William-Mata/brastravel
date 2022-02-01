
import Carousel from '../carousel-home/Carousel'
import PromocoesHome from '../promocoes-home/PromocoesHome'

function Home() {
    return (
        <div className="container-fluid p-5">
            <div className="row justify-content-center shadow py-2">
                <Carousel img1="/img/lugares-viajar-brasil-praia-forte-820x430.jpeg" img2="/img/lugares-viajar-no-brasil-carneiros-820x615.jpeg" img3="/img/lugares-para-viajar-brasil-820x430.jpg" link="Nacionais" text="Viagens Nacionais"/>

                <Carousel img1="/img/italia.jpg" img2="/img/bora-bora.jpg" img3="/img/londres.jpg" link="Internacionais" text="Viagens Internacionais" />
            </div>

            <div className="row justify-content-center shadow h-auto mt-5 py-2">
                <PromocoesHome title="Promoções Nacionais" text="Promoções com até 60% de desconto para suas viagens Nacionais, confira nossas promoções clicando aqui ou acessando a nossa pagina de promoções." link="/Nacionais"/>
                <PromocoesHome title="Promoções Internacionais" text="Promoções com até 40% de desconto para suas viagens Internacionais, confira nossas promoções clicando aqui ou acessando a nossa pagina de promoções." link="/Internacionais"/>
            </div>
        </div >
    )
}

export default Home