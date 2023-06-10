import ApClasses from "../../components/ApClasses/ApClasses";
import useData from "../../hooks/useData";




const Classes = () => {
    const [details] = useData();
    
    return (
        <div>
            <h3 className="text-3xl text-center border-4 w-5/12 mx-auto py-1 my-10">All Approved Classes</h3>
            <div className="md:grid md:grid-cols-3 gap-3">
                {
                    details.map(aClass => <ApClasses key={aClass._id} aClass={aClass}></ApClasses>)
                }
            </div>
        </div>
    );
};

export default Classes;