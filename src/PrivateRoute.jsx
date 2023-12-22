import { Navigate, useLocation } from "react-router";
import { useContext } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { AuthContext } from "./Components/Provider/AuthProvider";


const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    if (loading) {
        return <div className="h-[80vh] flex justify-center items-center">
            <ClipLoader color='#231f20' size={20} />
        </div>
    }
    if (user) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>
};

export default PrivateRoute;