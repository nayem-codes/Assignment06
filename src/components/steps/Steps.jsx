import user from "../../assets/user.png"
import product from "../../assets/package.png"
import rocket from "../../assets/rocket.png"

const Steps = () => {
    return (
        <div className="bg-base-200 mt-28 flex flex-col items-center justify-center">
            <h2 className="pt-28 font-extrabold text-5xl">Get Started in 3 Steps</h2>
            <p className="text-gray-600 mt-4">Start using premium digital tools in minutes, not hours.</p>

            <div className="card-container mt-10 mb-28 grid sm:grid-cols-1 xl:grid-cols-3 gap-7">
                <div className="card bg-base-100 w-96 shadow-sm  relative">
                    <span className="relative bg-purple-700 text-white rounded-full p-2 ml-85 mt-4 mr-2">01</span>
                    <figure className="px-10 pt-5">
                        <img className="bg-purple-200 p-5 rounded-full"
                            src={user}
                            alt=""
                            className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center pb-22">
                        <h2 className="card-title">Create Account</h2>
                        <p className="text-gray-600">Sign up for free in seconds. No credit card <br></br> required to get started.</p>
                        
                    </div>
                </div>
                <div className="card bg-base-100 w-96 shadow-sm  relative">
                    <span className="relative bg-purple-700 text-white rounded-full p-2 ml-85 mt-4 mr-2">02</span>
                    <figure className="px-10 pt-5">
                        <img className="bg-purple-200 p-5 rounded-full"
                            src={product}
                            alt=""
                            className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center pb-22">
                        <h2 className="card-title">Choose Products</h2>
                        <p className="text-gray-600">Browse our catalog and select the tools <br></br> that fit your needs..</p>
                        
                    </div>
                </div>
                <div className="card bg-base-100 w-96 shadow-sm  relative">
                    <span className="relative bg-purple-700 text-white rounded-full p-2 ml-85 mt-4 mr-2">03</span>
                    <figure className="px-10 pt-5">
                        <img className="bg-purple-200 p-5 rounded-full"
                            src={rocket}
                            alt=""
                            className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center pb-22">
                        <h2 className="card-title">Start Creating</h2>
                        <p className="text-gray-600">Download and start using your premium <br></br> tools immediately.</p>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Steps;