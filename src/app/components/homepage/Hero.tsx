import Image from "next/image";
import bannerImg from "../../../assets/hero_img.jpg";

const Hero = () => {
    return (
        <div className="bg-slate-300 p-5 rounded-xl flex max-sm:flex-col justify-between gap-5 items-center">
            <div>
                <h1 className="font-bold text-4xl max-w-150 mb-8">Books to freshen up your bookshelf</h1>
                <button className="btn btn-success">View the task</button>
            </div>
            <div>
                <Image src={bannerImg} alt="banner-image" className="rounded-xl"></Image>
            </div>
        </div>
    );
};

export default Hero;