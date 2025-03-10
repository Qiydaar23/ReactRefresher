import { Link } from "react-router-dom"

function Logout(){
    return(
        <div>
            
            <h1>Are You sure you want to log out</h1>
           <Link to="/login"> <button>Logout</button></Link>
        </div>
    )
}
export default Logout