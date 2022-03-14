
import PromocaoAnuncio from "../promocoes-anuncios/PromocaoAnuncio";


function Promocoes() {
    return (
        <div className="row justify-content-center my-4">
            <div className="col-6 col-sm-6 col-md-4 col-lg-3 py-3">
                <PromocaoAnuncio imagem="/img/natal.jpg" title="Promoção de Natal - Viagens Internacionais" subtitle="Desconto de 30% - NATAL30" text="Um desconto de 30% para você e sua familia viagarem com o melhor preço no natal, aplique o Cupom NATAL30 na pagina de pagamentos." />
            </div>
            <div className="col-6 col-sm-6 col-md-4 col-lg-3 p-3">
                <PromocaoAnuncio imagem="/img/natal.jpg" title="Promoção de Natal - Viagens Nacionais" subtitle="Desconto de 45% - NATAL45" text="Um desconto de 45% para você e sua familia viagarem com o melhor preço no natal, aplique o Cupom NATAL45 na pagina de pagamentos." />
            </div>
            <div className="col-6 col-sm-6 col-md-4 col-lg-3 p-3">
                <PromocaoAnuncio imagem="/img/novo.jpg" title="Promoção de Ano Novo - Viagens Internacionais" subtitle="Desconto de 40% - NOVO40" text="Um desconto de 40% para você e sua familia viagarem com o melhor preço no novo ano que está por vim, aplique o Cupom NOVO40 na pagina de pagamentos." />
            </div>
            <div className="col-6 col-sm-6 col-md-4 col-lg-3 p-3">
                <PromocaoAnuncio imagem="/img/novo.jpg" title="Promoção de Ano Novo - Viagens Nacionais" subtitle="Desconto de 50% - NOVO50" text="Um desconto de 50% para você e sua familia viagarem com o melhor preço no novo ano que está por vim, aplique o Cupom NOVO50 na pagina de pagamentos." />
            </div>
            <div className="col-6 col-sm-6 col-md-4 col-lg-3 p-3">
                <PromocaoAnuncio imagem="/img/ferias.jpg" title="Promoção de Ferias - Viagens Internacionais" subtitle="Desconto de 25% - FERIAS25" text="Um desconto de 25% para você e sua familia viagarem com o melhor preço nas ferias, aplique o Cupom FERIAS25 na pagina de pagamentos." />
            </div>
            <div className="col-6 col-sm-6 col-md-4 col-lg-3 p-3">
                <PromocaoAnuncio imagem="/img/ferias.jpg" title="Promoção de Ferias - Viagens Nacionais" subtitle="Desconto de 35% - FERIAS35" text="Um desconto de 35% para você e sua familia viagarem com o melhor preço nas ferias, aplique o Cupom FERIAS35 na pagina de pagamentos." />
            </div>
            <div className="col-6 col-sm-6 col-md-4 col-lg-3 p-3">
                <PromocaoAnuncio imagem="/img/carnaval.jpg" title="Promoção de Carnaval - Viagens Internacionais" subtitle="Desconto de 35% - CARNAVAL35" text="Se prepare para o carnaval com um desconto de 35% para você e sua familia viagarem com o melhor preço, aplique o Cupom CARNAVAL35 na pagina de pagamentos." />
            </div>
            <div className="col-6 col-sm-6 col-md-4 col-lg-3 p-3">
                <PromocaoAnuncio imagem="/img/carnaval.jpg" title="Promoção de Carnaval - Viagens Nacionais" subtitle="Desconto de 60% - CARNAVAL60" text="Se prepare para o carnaval com um desconto de 60% para você e sua familia viagarem com o melhor preço, aplique o Cupom CARNAVAL60 na pagina de pagamentos." />
            </div>
        </div>
    )

}
export default Promocoes