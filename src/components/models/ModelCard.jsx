import { useState } from 'react';
import { toast } from 'react-toastify';

const ModelCard = ({model, cart, setCart}) => {
    const [isBought, setIsBought] = useState(false)

    const handleBuying = () => {
         setIsBought(true)

         const isFound = cart.find(item => item.id === model.id)

         if(isFound) {
            toast.error("Item already added in cart!")
            return;
         }

        setCart([...cart, model])
        toast.success("Item added to cart!")
    }

    return (
        <div className="rounded-2xl bg-base-200 p-6 shadow-lg relative">
            <div className={`absolute ml-67 -mt-2  p-2 flex items-center ${model.tagType === "best seller" ? "badge badge-warning" : model.tagType === "new" ? "badge badge-accent" : "badge badge-primary"}`} >{model.tagType}</div>
            <div className="bg-white  border border-gray-300 rounded-full inline-block p-3">
                <img src={model.icon} alt="" />
            </div>

            <div className="my-4">
                <h3 className="font-bold text-2xl">{model.name}</h3>
                <p className="mt-4 text-gray-600">{model.description}</p>
            </div>

            <div>
                <p><span className="text-2xl font-bold">${model.price}</span>/{model.period}</p>
            </div>

            <div className="mt-4">
                {model.features.map(feature => (
                    <p><svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg> {feature}</p>
                ))}

                <button onClick={handleBuying} className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full mt-4 w-full">{isBought ? "Added to cart!" : "Buy Now"}</button>
            </div>
        </div>
    );
};

export default ModelCard;