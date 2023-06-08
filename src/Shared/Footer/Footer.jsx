import '../NavBar/NavBar.css';


const Footer = () => {
    return (
        <div id='footer' className='bg-slate-300'>
            <div className='md:grid md:grid-cols-3 md:gap-8 w-10/12 mx-auto py-10'>
                <div className='my-10 mb-3'>                    
                    <h3 className='text-3xl font-bold mb-3'>Learn Language</h3>
                </div>
                <div className='my-10'>
                    <h3 className='text-xl font-bold mb-3'>Address</h3>
                    <p className='mb-3'>5 Harriman Woods Dr, Harriman, New York 10926, USA.</p>                    

                </div>
                <div className='my-10'>
                    <h3 className='text-xl font-bold mb-3'>Contact</h3>                    
                    <p className='underline underline-offset-8 mb-3'>Phone: +1-202-555-0150</p>
                    <p>Email: info@example.com</p>
                </div>
            </div>
            <p className='text-center py-5'>©Copyright protected website</p>
        </div>
    );
};

export default Footer;