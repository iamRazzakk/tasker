

const CreateTask = () => {
    return (
        <div className="p-6">
            <form className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Title</span>
                    </label>
                    <input type="text" placeholder="Title" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <input type="text" placeholder="Description" className="input input-bordered" required />
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Create Task</button>
                </div>
            </form>
        </div>
    );
};

export default CreateTask;