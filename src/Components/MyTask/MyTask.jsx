import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../Hook/axiosSecure";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import '../../Components/Home/Navbar/Navbar.css'
import Swal from "sweetalert2";


const MyTask = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useContext(AuthContext)
    const userEmail = user?.email;
    const { data: createTasks = [] } = useQuery({
        queryKey: ["createTask"],
        queryFn: async () => {
            const res = await axiosSecure.get("/createTask");
            return res.data;
        },
    });
    const userTasks = createTasks.filter(task => task.email === userEmail);
    const completeTask = createTasks.filter(task => task.status === "Done");
    const handleUpdate = (_id) => {
        fetch(`http://localhost:5000/createTask/${_id}`, {
            method: "PATCH",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: "Done" })
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Update successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }
    return (
        <div className="p-10 bg-white">
            <h1 className="text-5xl text-center font-righteous text-black">My Task</h1>
            <div>

            </div>
            <div className="flex items-center justify-center gap-4 md:mt-10">
                <div className="bg-black p-2 rounded-lg w-1/2">
                    <h1 className="text-red-500 text-center">Total task: {userTasks.length}</h1>
                </div>
                <div className="bg-black p-2 rounded-lg w-1/2">
                    <h1 className="text-green-500 text-center">Complete task: {completeTask.length}</h1>
                </div>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 w-full">
                {userTasks.map((Task, index) => (
                    <div key={index} className="bg-black mt-4 text-white rounded-lg w-full  h-auto mx-auto">
                        <div className="flex items-center pl-5 gap-6 ">
                            <div className="p-4">
                                <h2 className="text-xl font-bold">Title: {Task.Title}</h2>
                                <p className="text-white text-sm">Description: {Task.Description}</p>
                                <p className="text-white text-sm">Date: {Task.date}</p>
                            </div>
                            <div className="flex items-end justify-between text-black font-righteous ml-10 mx-auto">
                                {
                                    Task.status === "pending" ? <>
                                        <button onClick={() => handleUpdate(Task._id)} className="px-6 py-2 bg-red-600 rounded-xl">
                                            Pending
                                        </button>
                                    </> :
                                        <>
                                            <button className="px-6 py-2 bg-green-600 rounded-xl">Complete</button>
                                        </>
                                }
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyTask;