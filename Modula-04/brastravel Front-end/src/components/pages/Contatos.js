import ContatosForm from "../contatos-form/ContatosForm"
import EntremContato from "../contatos-form/EntremContato"

function Contatos() {
    return (

        <div className="container-fluid p-5">
            <div className="row">
                <EntremContato/>
                <ContatosForm/>
            </div>
        </div>
    )
}

export default Contatos