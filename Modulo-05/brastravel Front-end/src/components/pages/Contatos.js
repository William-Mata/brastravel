import ContatosForm from "../contatos-form/ContatosForm"
import EntremContato from "../contatos-form/EntremContato"

function Contatos() {
    return (
            <div className="row my-5 justify-content-center align-content-center">
                <EntremContato/>
                <ContatosForm/>
            </div>
    )
}

export default Contatos