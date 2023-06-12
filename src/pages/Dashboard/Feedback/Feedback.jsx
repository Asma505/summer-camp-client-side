import { useLoaderData } from "react-router-dom";


const Feedback = () => {
    const data = useLoaderData();
    console.log(data);
    return (
        <div>
            <h3>Feedback Page</h3>
        </div>
    );
};

export default Feedback;