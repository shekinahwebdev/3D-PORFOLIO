import CountUp from "react-countup";
import { counterItems } from "../constants";

const AnimatedCounter = () => {
  return (
    <div id="counter" className="padding-x-lg xl:mt-0 mt-32">
      <div className="mx-auto grid-4-cols">
        {counterItems.map((item) => (
          <div className="bg-zinc-900 rounded-lg p-10 flex flex-col justify-center">
            <div
              key={item.label}
              className="counter-number text-3xl mb-2 font-bold"
            >
              <CountUp suffix={item.suffix} end={item.value} duration={5} />
            </div>
            <div className="text-white text-lg">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedCounter;
