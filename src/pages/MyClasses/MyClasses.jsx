import useMyClass from "../../hooks/useMyClass";



const MyClasses = () => {
    const [mycourse] = useMyClass();
    return (
        <div>
            <h3 className="text-3xl font-bold text-center">My Classes</h3>
            <div className="overflow-x-auto py-10">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Class Image</th>
                            <th>Class name</th>
                            <th>Instructor name</th>
                            <th>Enrolled Students</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Feedback</th>
                            <th>Update</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            mycourse.map(mc => <tr key={mc._id}>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={mc.class_image} />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {mc.class_name}
                                </td>
                                <td>
                                    {mc.instructor_name}
                                </td>
                                <td className="text-center">
                                    {mc.num_students}
                                </td>
                                <td className="text-center">
                                    ${mc.price}
                                </td>
                                <td>
                                    {mc.status === "approved" || mc.status === "denied" ? <p>{mc.status === "approved" ? "approved" : "denied"}</p> :
                                        <p>{mc.status}</p>}
                                </td>
                                <td>
                                    {mc.feedback}
                                </td>
                                <td>
                                    <button className="btn bg-slate-300">Update</button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyClasses;