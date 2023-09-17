import Button from "../components/Button";
import { arrowRight } from "../assets/icons";
import { shoes, statistics } from "../constants";
import { bigShoe1 } from "../assets/images";
import { ShoeCard } from "../components/ShoeCard";

const Hero = () => {
  return (
    <section
      id="home"
      className="
        w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-lg:padding-x pt-28">
        <p className="text-xl font-montserrat text-coral-red">
          Summer Collection
        </p>
        <h1 className="text-8xl font-bold mt-10 font-palanquin max-sm:text-[72px] max-sm:leading-[82]">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
            The New Arrival
          </span>
          <br />
          <span className="text-coral-red inline-block mt-3">Nike </span> Shoes
        </h1>
        <p className="text-slate-gray font-montserrat text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
          Discover stylish Nike arrivals, quality comfort and innovation for
          your active live
        </p>
        <Button label="Shop now" iconURL={arrowRight} />
        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((stat) => (
            <div key={stat.label}>
              <p className="text-4xl font-bold font-palanquin">{stat.value}</p>
              <p className="leading-7 font-montserrat text-slate-gray">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
        <img src={bigShoe1} alt="Big Shoe collection"
        width={610}
        height={500} 
        className="object-contain relative z-10"/>
      
      
      <div>
      {shoes.map((shoe)=>(
              <div key={shoe}>
                <ShoeCard 
                imgURL={shoe}
                changeBigShoeImage={() =>{}}
                bigShoeImg=""/>
              </div>
            ))}
      </div>
      </div>
    </section>
  );
};

export default Hero;
