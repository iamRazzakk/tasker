import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../Hook/axiosSecure";
import { Helmet } from "react-helmet-async";

const PreviousTask = () => {
    const axiosSecure = useAxiosSecure();
    const { data: completeTasks = [] } = useQuery({
        queryKey: ["createTask"],
        queryFn: async () => {
            const res = await axiosSecure.get("/createTask");
            return res.data;
        },
    });
    const previousTasks = completeTasks.filter(
        task => task.status === "Done" && new Date
    );
    return (
        <div className="md:h-[100vh]">
            <Helmet>
                <title>Tasker | Previous Task</title>
            </Helmet>
            <h1 className="text-center font-bold font-righteous text-black text-3xl bg-white">Previous Task List</h1>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 w-full p-6 bg-white">
                {previousTasks.map((Task, index) => (
                    <div key={index} className="bg-black mt-4 text-white rounded-lg w-full  h-auto mx-auto">
                        <div className="flex items-center pl-5 gap-6 ">
                            <div className="p-4">
                                <h2 className="text-xl font-bold">Title: {Task.Title}</h2>
                                <p className="text-white text-sm">Description: {Task.Description}</p>
                                <p className="text-white text-sm">Date: {Task.date}</p>
                            </div>
                            <div className="flex items-end justify-between text-black font-righteous ml-10 mx-auto">

                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PreviousTask;