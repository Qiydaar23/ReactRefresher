import { Link } from "react-router-dom"

function Logout(){
    return(
        <div>
           <Link to="/login"> <button>Logout</button></Link>
        </div>
    )
}
export default Logout