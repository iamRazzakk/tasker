
import { useState } from 'react';
import DatePicker from "react-datepicker";
const UpdateTask = () => {
    const [startDate, setStartDate] = useState(new Date());
    const handleUpdate = e => {
        e.preventDefault();
        const form = e.target;
        const Title = form.Title.value;
        const description = form.description.value;
        const date = form.date.value;
        const priority = form.priority.value;
        console.log(Title, description, date, priority);
    }
    return (
        <div className="md:p-6 bg-white">
            <form onSubmit={handleUpdate} className="card-body text-white">
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
                    <button className="btn btn-primary">Update Task</button>
                </div>
            </form>
        </div>
    )
};

export default UpdateTask;