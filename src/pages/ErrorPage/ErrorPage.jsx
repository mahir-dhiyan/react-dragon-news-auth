import { FaRegSmileBeam } from "react-icons/fa";
import builder from '../../assets/errorBuilder.png';
import { Link } from "react-router-dom";
const ErrorPage = () => {
    return (
        <div>
           
           <div className="flex flex-col justify-center items-center   h-screen gap-5"> 
           <img className='mx-auto  w-1/4' src={builder} alt="" />
           <h2 className="text-red-600 font-bold text-3xl text-center flex flex-col items-center ">This Page is Still Under Construction!!! <br /> <p className='text-purple-500'>Checkout our other pages! <FaRegSmileBeam className="inline-block" />
           
           </p>
           </h2>
           <button className="btn btn-outline btn-success"> 
            <Link to='/'>Return to Home</Link>
           </button>
           </div>
        </div>
    );
};

export default ErrorPage;