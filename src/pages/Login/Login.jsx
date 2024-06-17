import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";

const Login = () => {
    const {signIn}=useContext(AuthContext);
    const handleLogin = e =>{
        e.preventDefault();
        const form = new FormData(e.currentTarget);
            // console.log(form.get('password'));
            const email = form.get('email');
            const password=form.get('password');
            console.log(email, password);

            signIn(email,password)
            .then(result=>console.log(result.user))
            .catch(error=>console.error(error));



    }
    return (
        <div>
            <Navbar></Navbar>
            <div className="">
            <h3 className="text-3xl font-bold text-center">Please Login</h3>
            <form onSubmit={handleLogin} className="card-body md:w-3/4 lg:1/2 mx-auto">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email"  placeholder="Email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        <p className="text-center mt-4">Do not have an account? <Link className="text-blue-600 font-semibold" to="/register">Register</Link></p>
            </div>
        </div>
    );
};

export default Login;