import { Link } from "react-router-dom";
import Navbar from "./Navbar";
function Login(){
    return(
    <>
    <Navbar></Navbar>
        <div className="sm:container d-flex justify-content-center mt-5">
        <form className="col-11 col-sm-8 col-md-5 col-lg-4 p-3">
            <h3 className="text-center mb-4">Login</h3> 
            <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Email</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                <div id="emailHelp" className="form-text"></div>
            </div>
            <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">Senha</label>
                <input type="password" className="form-control" id="exampleInputPassword1" />
            </div>
            <div className="mb-3 form-field">
                <input type="checkbox" id="exampleCheck1" className="check" />
                <label for="exampleCheck1">Check</label>
            </div>
            <Link to="/feed">
            <button type="submit" className="btn-solid theme-primary">Login</button>
            </Link>
        </form>
        </div>
    </>
    )
}
export default Login;