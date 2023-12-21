import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../Hook/axiosSecure";

const MyTask = () => {
    const axiosSecure = useAxiosSecure();
    const { data: createTasks = [] } = useQuery({
        queryKey: ["createTask"],
        queryFn: async () => {
            const res = await axiosSecure.get("/createTask");
            return res.data;
        },
    });
    console.log(createTasks);
    return (
        <div className="p-10 bg-white h-screen">
            <h1 className="text-5xl text-center font-righteous text-black">Today Task</h1>
            {
                createTasks?.map((Task, index) => (
                    <div
                        key={index}
                        className="bg-black mt-4 text-white rounded-lg w-1/2 h-auto mx-auto"
                    >
                        <div className="flex items-center pl-5 gap-6">
                            <div className="">
                                <input  type="checkbox" id="demoCheckbox" name="checkbox" value="1"></input>
                            </div>
                            <div>
                                <h2 className="text-xl font-bold">Title: {Task.Title}</h2>
                                <p className="text-white text-sm">Description: {Task.Description}</p>
                                <p className="text-white text-sm">Date: {Task.date}</p>
                            </div>
                        </div>


                    </div>
                ))
            }
        </div>
    );
};

export default MyTask;