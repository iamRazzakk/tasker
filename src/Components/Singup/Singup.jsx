import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from 'react-icons/fc';
import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from './../Provider/AuthProvider';
import { useForm } from "react-hook-form";
import { FaGithub } from "react-icons/fa";
import { Helmet } from "react-helmet-async";


const Singup = () => {
    const { createUser, googleSingIn, updateProfileUser,githubSingIn } = useContext(AuthContext)
    // const axiosPublic = useAxiosPublic();
    const location = useNavigate()
    const {
        register,
        handleSubmit,
        // eslint-disable-next-line no-unused-vars
        reset,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                updateProfileUser(data.name, data.photoURL)
                    .then(() => {
                        const userInfo = {
                            name: data.name,
                            email: data.email,
                            photo: data.photo
                        }
                        console.log(userInfo);
                        // axiosPublic.post('/users', userInfo)
                        //     .then((res) => {
                        //         if (res.data.insertedId) {
                        //             console.log("user profile update");
                        //             reset()
                        //             Swal.fire({
                        //                 position: 'top-end',
                        //                 icon: 'success',
                        //                 title: 'User created successfully.',
                        //                 showConfirmButton: false,
                        //                 timer: 1500
                        //             });
                        //         }
                        //     })
                        location('/')
                    })
                    .catch(error => console.log(error))
            })
    };
    const handleSingUpWithGoogle = () => {
        googleSingIn()
            .then(() => {
                Swal.fire("Login successfully");
                location('/dashboard/profile')
            })
            .catch(error => {
                console.log(error);
            })
    }
    const handleSinginWithGithub = () => {
        githubSingIn()
            .then(() => {
                location('/dashboard/profile')
                Swal.fire("Login successfully");
            })
    }
    return (
        <div className=" m-auto font-righteous bg-white">
            <Helmet>
                <title>Tasker | Sing Up</title>
            </Helmet>
            <div>
                <h1 className="text-5xl text-center font-bold">SingUp now!</h1>
            </div>
            <div className="w-1/2 mx-auto">
                <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" {...register("name", { required: true })} placeholder="name" className="input input-bordered" />
                        {errors.name && <span className="text-red-500">This name field is required</span>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" {...register("email", { required: true })} placeholder="email" className="input input-bordered" />
                        {errors.email && <span className="text-red-500">This email field is required</span>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo</span>
                        </label>
                        <input type="text" name="photo" {...register("photo", { required: true })} placeholder="Enter your Image" className="input input-bordered" />
                        {errors.photo && <span className="text-red-500">This Photo field is required</span>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" {...register("password", { required: true })} name="password" placeholder="password" className="input input-bordered" />
                        {errors.password && <span className="text-red-500">This password field is required</span>}
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                    <div className="divider"></div>
                    <div className="text-2xl flex justify-center items-center">
                        <button onClick={handleSingUpWithGoogle} className="btn btn-outline rounded-full"><FcGoogle></FcGoogle></button>
                        <button onClick={handleSinginWithGithub} className="btn btn-outline ml-4 rounded-full">
                            <FaGithub />
                        </button>
                    </div>
                    <p className="text-center">Already Have an account? please <Link className="text-blue-600" to={'/login'}>Log in</Link></p>
                    <div className="divider"></div>
                </form>
            </div>
        </div>
    );
};

export default Singup;