import { use } from "react";
import ModelCard from "./ModelCard";

const Models = ({ modelPromise, cart, setCart }) => {
    const models = use(modelPromise);
    

    return (
        <div className="mt-10 max-w-300 mx-auto">
            

            <div className=" grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                {models.map(model =>
                    <ModelCard key={model.id} model={model} cart={cart} setCart={setCart}></ModelCard>
                )}
            </div>

        </div>
    );
};

export default Models;