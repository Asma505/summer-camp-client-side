import { Slide } from "react-awesome-reveal";
import students from '../../assets/pexels-yan-krukau-8613089.jpg';
import student from '../../assets/pexels-photo-5212331.jpeg';


const Home = () => {
    return (
        <Slide>
            <div>
                <h3 id="banner" className="text-center text-3xl font-bold py-3 bg-slate-300">Learn Foreign Language</h3>
                <div className="flex">
                    <div className="w-1/2">
                        <img src={student} alt="" />
                    </div>
                    <div className="w-1/2">
                        <img src={students} alt="" />
                    </div>
                </div>
            </div>
        </Slide>
    );
};

export default Home;