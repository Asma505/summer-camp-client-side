import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import useCourse from "../../hooks/useCourse";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);
const Payment = () => {
    const [course] = useCourse();
    const total = course.reduce((sum, c)=> sum + c.price, 0);
    const price = parseFloat(total.toFixed(2));
    return (
        <div className="w-8/12">
            <h3>Please Process Payment</h3>
            <Elements stripe={stripePromise}>
                <CheckoutForm price={price}></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;