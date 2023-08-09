import { ProjectCard } from "./Cards";
import { SectionTitle } from "./UIElements";
import VERSE from "../../public/verse.png";
import PORTFOLIO from "../../public/web.png";
import ASTORE from "../../public/astore.png";
import WAGER from "../../public/wager.png";

const portfolio = [
  {
    id: 1,
    title: "Astore",
    image: ASTORE,
    techs: [{ name: "Next.js" }, { name: "TailwindCSS" }],
  },
  {
    id: 2,
    title: "Verse",
    image: VERSE,
    techs: [{ name: "Next.js" }, { name: "SCSS" }],
  },
  {
    id: 3,
    title: "Portfolio",
    image: PORTFOLIO,
    techs: [{ name: "React" }, { name: "SCSS" }],
  },
  {
    id: 4,
    title: "Wager",
    image: WAGER,
    techs: [{ name: "Next.js" }, { name: "SCSS" }],
  },
];

const Portfolio = () => {
  return (
    <div className="relative z-40 px-2 py-12 sm:px-10 lg:px-32" id="portfolio">
      <SectionTitle title="Portfolio" />
      <p className="text-left  text-slate-700">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {portfolio.map((project) => (
          <ProjectCard
            key={project.id}
            id={project.id}
            title={project.title}
            description=" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet iusto ea velit vel."
            image={project.image}
            techs={project.techs}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
