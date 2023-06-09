

const Popular = ({pClass}) => {
    const {class_name, class_image, num_students} = pClass;
    return (
        <div className="text-center">
            <img src={class_image} alt="" />
            <h3 className="text-xl">{class_name}</h3>
            <p>Number of Students: {num_students}</p>
        </div>
    );
};

export default Popular;