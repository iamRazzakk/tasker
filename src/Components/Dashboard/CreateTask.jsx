import React, { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";
import { useForm } from "react-hook-form";

const CreateTask = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const [startDate, setStartDate] = useState(new Date());
    const { user } = useContext(AuthContext);
    const email = user?.email;

    const onSubmit = (data) => {
        const { Title, description, priority } = data;

        const taskData = {
            Title,
            description,
            date: startDate, // Include the selected date
            priority,
            email,
            status: "pending",
        };

        fetch("http://localhost:5000/createTask", {
            method: "POST",
            headers: {
                "content-Type": "application/json",
            },
            body: JSON.stringify(taskData),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.acknowledged) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Add task successfully",
                        showConfirmButton: false,
                        timer: 1000,
                    });
                    reset();
                }
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    };

    return (
        <div className="md:p-6 md:h-[100vh]">
            <h1 className="text-5xl text-center font-righteous">Create List</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="card-body max-w-full text-white">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Title</span>
                    </label>
                    <input
                        type="text"
                        name="Title"
                        {...register("Title", { required: true, maxLength: 10 })}
                        placeholder="Title"
                        className="input input-bordered bg-black text-white"
                    />
                    {errors.Title && <span className="text-red-500">This Title field is required</span>}
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <input
                        type="text"
                        name="description"
                        {...register("description", { required: true })}
                        placeholder="Description"
                        className="input input-bordered bg-black text-white"
                    />
                    {errors.description && <span className="text-red-500">This Description field is required</span>}
                </div>
                <div className="flex items-center justify-between">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Date</span>
                        </label>
                        <DatePicker
                            className="p-2 rounded-lg bg-black text-white"
                            name="date"
                            selected={startDate}
                            onChange={(date) => setStartDate(date)}
                            dateFormat="dd-MM-yyyy"
                        />
                    </div>
                    <div className="form-control">
                        <label className="label-text">Choose a Priority:</label>
                        <select
                            className="p-2 rounded-lg bg-black text-white"
                            name="priority"
                            {...register("priority", { required: true })}
                            id="cars"
                        >
                            <option value="Low">Low</option>
                            <option value="moderate">Moderate</option>
                            <option value="headlines">Headlines</option>
                        </select>
                        {errors.priority && <span className="text-red-500">This Priority field is required</span>}
                    </div>
                </div>
                <div className="form-control mt-6">
                    <button type="submit" className="btn btn-primary">
                        Create Task
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CreateTask;
