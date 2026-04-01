

const Workflow = () => {
    return (
        <div className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] flex flex-col w-90%">
            <h2 className="font-extrabold text-4xl text-white text-center pt-28">Ready to Transform Your Workflow?</h2>
            <p className="text-center text-zinc-400 pt-4">Join thousands of professionals who are already using Digitools to work smarter.<br></br> Start your free trial today.</p>

            <div className="mx-auto pt-10 flex gap-4">
                <button className="btn bg-white text-purple-600 rounded-full">Explore Products</button>
                <button className="btn bg-transparent text-white rounded-full w-[150px]">View Pricing</button>
            </div>

            <p className="text-center text-zinc-400 pt-4 pb-28">14-day free trial • No credit card required • Cancel anytime</p>
        </div>
    );
};

export default Workflow;