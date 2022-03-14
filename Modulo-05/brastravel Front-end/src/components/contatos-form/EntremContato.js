import { FaWhatsapp, FaFacebook, FaTwitter, FaInstagram} from 'react-icons/fa';
import { BsTelephone, BsPhone } from "react-icons/bs";
import { MdAlternateEmail } from "react-icons/md";


function EntremContato() {

    return (
        <div className="col-12 col-sm-12 col-md-5 col-lg-5 shadow rounded py-3 m-2">

            <h1 className="display-3">Contatos</h1>
            <p className="lead fs-3">Entre em contato conosco</p>
            <hr className="my-2" />

            <div className="row">
                <div className="col-5 col-md-5 col-sm-5 col-lg-5 mx-auto text-break">
                    <p><FaWhatsapp/>  021 99999-8888</p>
                    <p><BsPhone/> 021 98888-7777</p>
                    <p><BsTelephone/> 021 2222-3333</p>
                    <p><BsTelephone/> 0800 4002-8922</p>
                </div>

                <div className="col-6 col-md-6 col-sm-6 col-lg-6 mx-auto text-break">

                    <p><MdAlternateEmail/> BrasTravel@email.com</p>
                    <p><FaFacebook/> Facebook.com/BrasTravel</p>
                    <p><FaTwitter/> Twitter.com/BrasTravel</p>
                    <p><FaInstagram/> Instagram.com/BrasTravel</p>
                </div>
            </div>
        </div>
    )
}

export default EntremContato