import { Link } from 'react-router-dom';
import notFound from '../../assets/crying-baby.png';

const NotFound = () => {
    return (
        <div className="bg-slate-300 h-screen w-screen flex items-center justify-center">
            <div className="w-11/12 mx-auto flex justify-center items-center">
                <div className='w-1/2'>
                    <img src={notFound} alt="" />
                </div>
                <div className='text-center w-1/2'>
                    <h3 className='font-bold text-8xl text-slate-800'>404</h3>
                    <h3 className='text-5xl text-slate-800'>Page Not Found</h3>
                    <Link to="/"><button className='btn-block bg-blue-800 text-white py-3 rounded-lg mt-8'>Back To Home</button></Link>
                </div>

            </div>
        </div>
    );
};

export default NotFound;