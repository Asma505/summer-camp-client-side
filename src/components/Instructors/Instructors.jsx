

const Instructors = ({pInstructor}) => {
    const {instructor_name, instructor_image} = pInstructor;
    return (
        <div className="text-center">
            <img src={instructor_image} alt="" />
            <h3 className="text-xl">{instructor_name}</h3>            
        </div>
    );
};

export default Instructors;