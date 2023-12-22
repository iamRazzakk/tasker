import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";


const Profile = () => {
    const { user } = useContext(AuthContext)
    console.log(user);
    return (
        <div className="max-w-full">
            <h1 className="text-center  text-bold md:text-2xl font-Poppins uppercase font-bold">my profile</h1>
            <div className="md:flex md:mt-6">
                <div className="flex-1">
                    <img className="w-60 h-60 rounded-full mx-auto p-6" src={user?.photoURL} alt="user img" />
                </div>
                <div className="flex-1  max-w-full mx-auto p-6 text-center">
                    <h1 className="md:text-2xl font-bold uppercase ">
                        {user?.displayName}
                    </h1>
                    <p className="text-green-500 w-12 mx-auto md:text-xl flex justify-center item-center whitespace-normal">{user?.email}</p>
                </div>
            </div>
        </div>
    );
};

export default Profile;