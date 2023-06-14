import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const Update = () => {
    const loadedData = useLoaderData();
    const { _id} = loadedData[0]; 

    const handleUpdate = event => {
        event.preventDefault();

        const form = event.target;        
        const price = parseInt(form.price.value);

        form.reset('');

        const update = {price};
        console.log(update);

        fetch(`https://summer-camp-school-server-rho-sandy.vercel.app/mycourse/${_id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(update)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Price Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }
    return (
        <div className="w-9/12 mx-auto my-16">
            <p className="text-3xl font-bold text-center my-10">Update Price</p>
            
            <p className="text-3xl text-center my-10"></p>
            <form onSubmit={handleUpdate}>                
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <label className="input-group">
                        <span>Price</span>
                        <input type="text" name="price"  placeholder="Update Price" className="input input-bordered w-full" />
                    </label>
                </div>
                <input className="btn bg-slate-300 w-full my-10" type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default Update;