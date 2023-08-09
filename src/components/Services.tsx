import { MdDesignServices, MdCode } from "react-icons/md";
import { PiGraphBold } from "react-icons/pi";
import { ServiceCard } from "./Cards";
import { SectionTitle } from "./UIElements";

const services = [
  {
    id: 1,
    title: "UI Design",
    icon: <MdDesignServices />,
  },
  {
    id: 2,
    title: "Web & Mobile Dev",
    icon: <MdCode />,
  },
  {
    id: 3,
    title: "SEO",
    icon: <PiGraphBold />,
  },
];

const Services = () => {
  return (
    <div className="relative z-30 px-2 sm:px-10 py-12 lg:px-32" id="services">
      <SectionTitle title="Services" />
      <p className="text-left  text-slate-700">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map((service) => (
          <ServiceCard
            key={service.id}
            id={service.id}
            icon={service.icon}
            title={service.title}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
