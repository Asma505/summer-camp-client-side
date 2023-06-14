import { Link } from "react-router-dom";


const Mc = ({mc}) => {
    const {_id} = mc;
    return (
        <tr>
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
                <Link to={`/dashboard/update/${_id}`}><button className="btn bg-slate-300">Update</button></Link>
            </td>
        </tr>
    );
};

export default Mc;