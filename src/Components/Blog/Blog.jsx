
const Blog = () => {
    return (
        <div className="bg-white text-black p-10">
            <div>
                <h1 className="font-bold text-xl font-righteous">What is JSX?</h1>
                <p className="text-xl">Ans: JSX is a syntax extension of JavaScript. It is used with React to describe what the user interface should look like. By using JSX, we can write HTML structures in the same file that contains JavaScript code.</p>
            </div>
            <div>
                <h1 className="text-xl font-bold font-righteous">Can web browsers read JSX directly? </h1>
                <p className="text-xl">Ans: Web browsers cannot read JSX directly. This is because they are built to only read regular JS objects and JSX is not a regular JavaScript object
                    For a web browser to read a JSX file, the file needs to be transformed into a regular JavaScript object. For this, we use Babel</p>
            </div>
            <div>
                <h1 className="text-xl font-bold font-righteous">What is the virtual DOM?</h1>
                <p className="text-xl">Ans: DOM stands for Document Object Model. The DOM represents an HTML document with a logical tree structure. Each branch of the tree ends in a node, and each node contains objects. <br />
                    React keeps a lightweight representation of the real DOM in the memory, and that is known as the virtual DOM. When the state of an object changes, the virtual DOM changes only that object in the real DOM, rather than updating all the objects. The following are some of the most frequently asked react interview questions.
                </p>
            </div>
        </div>
    );
};

export default Blog;