import BannerImage from "../../assets/banner.png";
import playImage from "../../assets/Play (1).png"
import dot from "../../assets/Group 5 (1).png"

const Banner = () => {
  return (
    <div className="relative min-h-162.5 flex items-center overflow-hidden">
      <div className=" mx-auto grid grid-cols-1 pt-20 lg:grid-cols-2 gap-10 items-center relative z-10">
        {/* Left Content */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/30 text-purple-400 text-sm font-medium px-5 py-2 rounded-full">
            <img src={dot} alt="" /> New: AI-Powered Tools Available
          </div>

          <h1 className="text-4xl lg:text-5xl font-bold ">
            Supercharge Your
            <br />
            
              Digital Workflow
            
          </h1>

          <p className="text-lg text-zinc-700 max-w-lg">
            Access premium AI tools, design assets, templates, and productivity <br></br>
software—all in one place. Start creating faster today.
<br></br>
Explore Products
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <button className="btn  text-white rounded-full">Explore Products</button>
            <button className="btn btn-outline btn-primary rounded-full"><img src={playImage} alt="" /> Watch Demo</button>
          </div>

        
        </div>

        {/* Right Image */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative">
            <img
              className="relative h-130 w-auto object-contain drop-shadow-2xl rounded-3xl"
              src={BannerImage}
              alt="AI Models Banner"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;