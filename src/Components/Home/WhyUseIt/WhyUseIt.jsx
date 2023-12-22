
const WhyUseIt = () => {
    return (
        <div className="bg-white text-black">
            <h1 className="text-center font-bold font-righteous text-5xl">Why use It</h1>
            <ul className="steps p-6 md:gap-4">
                <div className="border md:mt-6 bg-gray-300 rounded-lg md:p-6">
                    <li className="step step-primary ">
                        <h2 className="text-xl font-bold">For Developers</h2>
                        <p>
                            Boost your coding productivity with our task management tool. Organize your sprints, track your progress,
                            and achieve coding milestones efficiently.
                        </p>
                    </li>
                </div>
                <div className="border md:mt-6 bg-gray-300 rounded-lg md:p-6">
                    <li className="step step-primary ">
                        <h2 className="text-xl font-bold">For Corporate Professionals</h2>
                        <p>
                            Stay on top of your professional tasks. Manage projects, collaborate with teams, and ensure deadlines are met
                            seamlessly. Elevate your work efficiency with our intuitive to-do platform.
                        </p>
                    </li>
                </div>
                <div className="border md:mt-6 bg-gray-300 rounded-lg md:p-6">
                    <li className="step step-primary ">
                        <h2 className="text-xl font-bold">For Bankers</h2>
                        <p>
                            Keep track of important financial tasks and deadlines. Our secure platform ensures that your financial data
                            is managed efficiently. Stay organized, meet compliance requirements, and excel in your financial tasks.
                        </p>
                    </li>
                </div>
            </ul>
        </div>
    );
};

export default WhyUseIt;