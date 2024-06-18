import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext);

    const location = useLocation();
    console.log(location.pathname);
    if (loading) {
        return <div className="mx-auto  flex justify-center h-screen"><span className="loading w-40  mx-auto  loading-infinity "></span></div>
    }
    if (user) {
        return children;
    }


    return <Navigate state={location.pathname} to='/login'></Navigate>;
};

export default PrivateRoutes;