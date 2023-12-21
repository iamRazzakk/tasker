
import { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import Swal from "sweetalert2";
const CreateTask = () => {
    const [startDate, setStartDate] = useState(new Date());
    const handleSubmitTask = e => {
        e.preventDefault();
        const from = e.target;
        const Title = from.Title.value;
        const Description = from.description.value;
        const date = from.date.value;
        const priority = from.priority.value;
        console.log(Title, Description, date, priority);
        const taskData = {
            Title,
            Description,
            date,
            priority,
        };

        fetch('http://localhost:5000/createTask', {
            method: "POST",
            headers: {
                "content-Type": "application/json",
            },
            body: JSON.stringify(taskData),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {  
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Add task successfully",
                        showConfirmButton: false,
                        timer: 1000
                    });
                }
            })
            .catch(error => {
                console.error("Error:", error);
            });

    }

    return (
        <div className="md:p-6">
            <form onSubmit={handleSubmitTask} className="card-body text-white">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Title</span>
                    </label>
                    <input type="text" name="Title" placeholder="Title" className="input input-bordered bg-black text-white" required />
                </div>
                {/* description */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <input type="text" name="description" placeholder="Description" className="input input-bordered bg-black text-white" required />
                </div>
                <div className="flex items-center">
                    {/* deadlines */}
                    <div className="flex-1 mt-4">

                        <DatePicker className="p-2 rounded-lg bg-black text-white" name="date" selected={startDate} onChange={(date) => setStartDate(date)} />
                    </div>
                    {/* diffecalty */}
                    <div className="form-control flex-1">
                        <label className="label-text">Choose a Priority:</label>
                        <select className="p-2 rounded-lg bg-black text-white" name="priority" id="cars">
                            <option value="Low">Low</option>
                            <option value="moderate">Moderate</option>
                            <option value="headlines">headlines</option>
                        </select>
                    </div>
                </div>


                <div className="form-control mt-6">
                    <button className="btn btn-primary">Create Task</button>
                </div>
            </form>
        </div>
    );
};

export default CreateTask;