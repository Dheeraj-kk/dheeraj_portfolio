import CountUp from "react-countup";

const Stats = () => {
  return (
    <div className="flex flex-col gap-8 xl:flex-row xl:gap-12 xl:items-center">
      <div className="flex gap-4">
        <div className="text-5xl font-bold text-accent flex">
          <CountUp end={1} duration={5} delay={4} className="block" />
          <div>+</div>
        </div>
        <span>
          Years <br /> Experience
        </span>
      </div>
      <div className="flex gap-4 ">
        <div className="text-5xl font-bold text-accent flex">
          <CountUp end={4} duration={5} delay={2} className="block w-[60px]" />
        </div>
        <span>
            Clients <br /> Worldwide
          </span>
      </div>
    </div>
  );
};

export default Stats;
