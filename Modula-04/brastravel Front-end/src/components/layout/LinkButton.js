import { Link } from 'react-router-dom'

function LinkButton({to}){

    return(
        <Link className="btn btn-sm btn-outline-warning text-white" to={to}>
        </Link>
    )
}

export default LinkButton