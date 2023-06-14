import { Slide } from "react-awesome-reveal";
import { Rotate } from "react-awesome-reveal";
import { Fade } from "react-awesome-reveal";
import students from '../../assets/pexels-yan-krukau-8613089.jpg';
import student from '../../assets/pexels-photo-5212331.jpeg';
import useData from "../../hooks/useData";
import Popular from "../../components/Popular/Popular";
import Instructors from "../../components/Instructors/Instructors";
import learning from '../../assets/pexels-max-fischer-5212695.jpg';


const Home = () => {
    const [details] = useData();
    const popular = details?.slice(0, 6);

    return (
        <div>
            <div>
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
            </div>
            <div>
                <Rotate duration={1000}>
                    <div className="mt-16">
                        <h3 className="text-3xl text-center border-4 w-5/12 mx-auto py-1">Popular Classes</h3>
                        <div className="w-10/12 mx-auto md:grid md:grid-cols-3 gap-5 mt-10">
                            {
                                popular.map(pClass => <Popular key={pClass._id} pClass={pClass}></Popular>)
                            }
                        </div>
                    </div>
                </Rotate>
            </div>
            <div className="mt-16">
                <h3 className="text-3xl text-center border-4 w-5/12 mx-auto py-1">Popular Instructors</h3>
                <Fade duration={5000}>
                    <div className="w-10/12 mx-auto md:grid md:grid-cols-3 gap-5 mt-10">
                        {
                            popular.map(pInstructor => <Instructors key={pInstructor._id} pInstructor={pInstructor}></Instructors>)
                        }
                    </div>
                </Fade>
            </div>
            <div className="mt-16">
                <h3 className="text-3xl text-center border-4 w-5/12 mx-auto py-1">Our Mission</h3>
                <div className="w-10/12 mx-auto md:flex md:items-center md:gap-16 py-10">
                    <div className="md:w-1/2">
                        <img src={learning} alt="" />
                    </div>
                    <div className="md:w-1/2 py-5">
                        <h3 className="text-2xl">
                            We aim to provide younger children with opportunities to learn foreign languages in their summer vacation.
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;