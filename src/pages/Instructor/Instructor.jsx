import useData from "../../hooks/useData";


const Instructor = () => {
    const [details] = useData()
    return (
        <div>
            <h3 className="text-3xl text-center border-4 w-5/12 mx-auto py-1 my-10">Our Instructors</h3>
            <div className="w-8/12 mx-auto md:grid md:grid-cols-2 md:gap-5">
                {
                    details.map(data => <div key={data._id}>
                        <div className="text-center text-2xl py-5">
                            <img src={data.instructor_image} alt="" />
                            <h3 className="py-3">{data.instructor_name}</h3>
                            <p>Email: {data.instructor_email}</p>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Instructor;