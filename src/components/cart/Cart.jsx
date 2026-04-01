import { toast } from "react-toastify";
import cartImage from "../../assets/shopping-cart.png"
const Cart = ({ cart, setCart }) => {
    const totalPrice = cart.reduce((sum, item) => sum + item.price, 0)

    const handlePayment = () =>{
        setCart([])
        toast.success("Payment successful!")
    };

    const handleDelete = (item) => {
        const filteredArray = cart.filter(c => c.id !== item.id)
        setCart(filteredArray)
        toast.error("Item deleted!")
    }


    return (
        <div className="grid gap-4 max-w-300 mx-auto p-10 mt-10 shadow-lg rounded-2xl">

            <h2 className="text-2xl font-bold">Your Cart</h2>

            {
                cart.length === 0 ? <div className="flex flex-col items-center justify-center gap-4">
                    <img className="w-16 h-16" src={cartImage} alt="" />
                    <p className="text-gray-500">Your cart is empty</p>
                </div> : 
                <>
                {
                cart.map(item =>
                    <div className="flex justify-between items-center bg-base-200 rounded-2xl p-5" key={item.id}>

                        <div className="flex gap-2">
                            <div className="bg-white  border border-gray-300 rounded-full inline-block p-3">
                                <img src={item.icon} alt="" />
                            </div>

                            <div>
                                <h2 className="font-semibold text-xl">{item.name}</h2>
                                <p className="text-gray-500">${item.price}</p>
                            </div>
                        </div>

                        <div>
                            <button onClick={() => handleDelete (item)} className="btn btn-ghost text-red-500 font-medium">Remove</button>
                        </div>
                    </div>

                )
            }
            <div className="flex justify-between mt-5">
                <p>Total</p>
                <p className="font-bold text-xl">$<span>{totalPrice}</span></p>
            </div>

            <div>
                <button onClick={handlePayment} className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full w-full mt-5" >Proceed to Checkout</button>
            </div>
                </>
            }

            


        </div>
    );
};

export default Cart;