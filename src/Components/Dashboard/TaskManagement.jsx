import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../Hook/axiosSecure";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const TaskManagement = () => {
    const { user } = useContext(AuthContext)
    const axiosSecure = useAxiosSecure();
    const userEmail = user?.email;
    const { data: createTasks = [], refetch } = useQuery({
        queryKey: ["createTask"],
        queryFn: async () => {
            const res = await axiosSecure.get("/createTask");
            return res.data;
        },
    });
    const userTasks = createTasks.filter(task => task.email === userEmail);
    // console.log(userTasks);
    const completeTask = createTasks.filter(task => task.status === "Done");

    const handleDelete = (_id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.delete(`createTask/${_id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            refetch()

                        }
                    })
            }
        });
    }
    const handleUpdate = (_id) => {
        fetch(`https://tasker-server-side.vercel.app/createTask/${_id}`, {
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
                    refetch()
                }
            })
    }

    // return
    return (
        <div className="lg:flex items-center justify-evenly p-2 gap-4">
            <Helmet>
                <title>Tasker | Task Managerment</title>
            </Helmet>
            <div className="">
                {/* todo list */}
                <h1 className="text-xl font-bold font-righteous text-center">To-Do List</h1>
                <div>
                    {userTasks.map((Task, index) => (
                        <div key={index} className="bg-black mt-4 text-white rounded-lg w-full  h-auto mx-auto">
                            <div className="pl-5 gap-6 ">
                                <div className="p-4 w-40 h-52">
                                    <h2 className="text-xl font-bold">Title: {Task?.Title}</h2>
                                    <p className="text-white text-sm">Description: {Task?.description}</p>
                                    <p className="text-white text-sm">Date: {Task.date}</p>
                                </div>
                                <div className="flex items-center justify-between text-black font-righteous mx-auto">
                                    {
                                        Task.status === "pending" ? <>
                                            <button onClick={() => handleUpdate(Task._id)} className="px-6 py-2 md:mr-4 bg-red-600 rounded-xl">
                                                Pending
                                            </button> <br />

                                            <Link to={`/dashboard/taskManagement/updateData/${Task._id}`}>
                                                <button className="px-6 py-2 bg-yellow-300 rounded-xl">Update</button>
                                            </Link>

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
            <div className="">
                <h1 className="text-xl font-bold font-righteous text-center">Ongoing</h1>
                <div className="w-full">
                    {/* {userTasks.map((Task, index) => (
                        <div key={index} className="bg-black mt-4 text-white rounded-lg w-full  h-auto mx-auto">
                            <div className="flex items-center pl-5 gap-6 ">
                                <div className="p-4">
                                    <h2 className="text-xl font-bold">Title: {Task.Title}</h2>
                                    <p className="text-white text-sm">Description: {Task.Description}</p>
                                    <p className="text-white text-sm">Date: {Task.date}</p>
                                </div>
                            </div>
                        </div>
                    ))} */}
                </div>
            </div>
            <div className="">
                <h1 className="text-xl font-bold font-righteous text-center">Complete</h1>
                <div className="">
                    {completeTask?.map((Task, index) => (
                        <div key={index} className="bg-black mt-4 text-white rounded-lg ">
                            <div className="flex items-center pl-5 gap-6 ">
                                <div className="p-4 w-96 h-52">
                                    <h2 className="text-xl font-bold">Title: {Task.Title}</h2>
                                    <p className="text-white text-sm">Description: {Task.Description}</p>
                                    <p className="text-white text-sm">Date: {Task.date}</p>
                                    <button onClick={() => handleDelete(Task._id)} className="rounded-md md:mt-2 btn-outline text-sm bg-white text-black px-6 py-2">Delete</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TaskManagement;