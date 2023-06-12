import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useCourse from "../../hooks/useCourse";
import useAdmin from "../../hooks/useAdmin";
import useInstructor from "../../hooks/useInstructor";



const ApClasses = ({ aClass }) => {
    const { class_image, class_name, instructor_name, available_seats, price, _id } = aClass;

    const { user } = useContext(AuthContext);
    const location = useLocation();
    const [, refetch] = useCourse();
    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();
    const navigate = useNavigate();

    const noSeat = available_seats === 0; 

    const handleSelectCourse = aClass => {
        console.log(aClass);
        if (user && user.email) {
            const selectedCourse = { courseId: _id, courseName: class_name, courseImage: class_image, instructorName: instructor_name, availableSeats: available_seats, price, email: user.email };

            fetch('http://localhost:5000/course', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(selectedCourse)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        refetch();
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Course Selected Successfully.',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        }
        else {
            Swal.fire({
                title: 'Please login to select course',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login Now'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            })
        }
    }

    return (
        <div>
            {noSeat ?
                <div className="w-10/12 mx-auto p-5 bg-red-300">
                    <img src={class_image} alt="" />
                    <h3 className="mt-3 text-xl">{class_name}</h3>
                    <p>Instructor Name: {instructor_name}</p>
                    <p>Available Seats: {available_seats}</p>
                    <p>Price: {price}</p>
                    <button disabled={true} onClick={() => handleSelectCourse(aClass)} className="btn btn-block bg-slate-300 mt-5">Select</button>
                </div> :
                
                isInstructor || isAdmin? 
                
                <div id="abc" className="w-10/12 mx-auto p-5">
                    <img src={class_image} alt="" />
                    <h3 className="mt-3 text-xl">{class_name}</h3>
                    <p>Instructor Name: {instructor_name}</p>
                    <p>Available Seats: {available_seats}</p>
                    <p>Price: {price}</p>
                    <button disabled={true} onClick={() => handleSelectCourse(aClass)} className="btn btn-block bg-slate-300 mt-5">Select</button>
                </div>:

                <div className="w-10/12 mx-auto p-5">
                    <img src={class_image} alt="" />
                    <h3 className="mt-3 text-xl">{class_name}</h3>
                    <p>Instructor Name: {instructor_name}</p>
                    <p>Available Seats: {available_seats}</p>
                    <p>Price: {price}</p>
                    <button onClick={() => handleSelectCourse(aClass)} className="btn btn-block bg-slate-300 mt-5">Select</button>
                </div>
            }
        </div>
    );
};

export default ApClasses;