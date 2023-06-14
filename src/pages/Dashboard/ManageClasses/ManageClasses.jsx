import Swal from "sweetalert2";
import useData from "../../../hooks/useData";
import { Link } from "react-router-dom";




const ManageClasses = () => {
    const [details, , refetch] = useData();


    const handleApproved = course => {
        fetch(`https://summer-camp-school-server-rho-sandy.vercel.app/details/approved/${course._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${course.class_name} is Approved`,
                        showConfirmButton: false,
                        timer: 1500
                    })

                }
            })
    }

    const handleDeny = course => {
        fetch(`https://summer-camp-school-server-rho-sandy.vercel.app/details/denied/${course._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${course.class_name} is Denied`,
                        showConfirmButton: false,
                        timer: 1500
                    })

                }
            })
    }



    return (
        <div>
            <h3 className="text-3xl font-bold text-center">All The Classes</h3>
            <div className="overflow-x-auto py-10">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Class Image</th>
                            <th>Class name</th>
                            <th>Instructor name</th>
                            <th>Instructor email</th>
                            <th>Available seats</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            details.map(course => <tr key={course._id}>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={course.class_image} />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {course.class_name}
                                </td>
                                <td>
                                    {course.instructor_name}
                                </td>
                                <td>
                                    {course.email}
                                </td>
                                <td className="text-center">
                                    {course.available_seats}
                                </td>
                                <td>
                                    ${course.price}
                                </td>
                                <td>
                                    {course.status === "approved" || course.status === "denied" ? <p>{course.status === "approved" ? "approved" : "denied"}</p> :
                                        <p>{course.status}</p>}
                                </td>
                                <td>
                                    <button onClick={() => handleApproved(course)} disabled={course.status === "denied" || course.status === "approved"} className="btn btn-xs btn-success">Approve</button>

                                    <button onClick={() => handleDeny(course)} disabled={course.status === "denied" || course.status === "approved"} className="btn btn-xs btn-error my-1">Deny</button>

                                    <Link to={`/dashboard/feedback/${course._id}`}><button className="btn btn-xs btn-info">Feedback</button></Link>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageClasses;