import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import { useLoaderData } from "react-router-dom";


const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);
const Payment = () => {    

    const loadedData = useLoaderData();    
    console.log(loadedData);

    return (
        <div className="w-8/12">
            <h3>Please Process Payment</h3>
            <Elements stripe={stripePromise}>
                <CheckoutForm loadedData={loadedData} price={loadedData[0].price}></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;