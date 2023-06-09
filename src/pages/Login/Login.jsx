import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import '../../Shared/NavBar/NavBar.css'
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

const Login = () => {
    const { signIn, googleSignIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();


    const from = location.state?.from?.pathname || "/";

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);

        signIn(data.Email, data.Password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                navigate(from, { replace: true });
            })
    }


    const handleGoogleSignIn = () => {
        googleSignIn()
        .then(result => {
            const loggedInUser = result.user;
            console.log(loggedInUser);
            navigate(from, {replace: true});                       
        })        
    }    


    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="Email" {...register("Email", { required: true, pattern: /^\S+@\S+$/i })} className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="Password" {...register("Password", { required: true, min: 6, maxLength: 12, pattern: /(?=.*[A-Z])(?=.*[!@#$&*])/i })} className="input input-bordered" />
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn bg-slate-300" type="submit" value="Login" />
                        </div>
                        <div id='registerText' className='text-center'>
                            <div className='text-center mt-3'>
                                <button onClick={handleGoogleSignIn} className='btn bg-slate-300 rounded-lg'> Login with Google </button>
                            </div>
                            <p className='mt-5'><small>Dont have an account? </small><Link to="/register"><span>Register</span></Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;