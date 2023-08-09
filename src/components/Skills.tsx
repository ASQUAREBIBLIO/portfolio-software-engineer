import { SkillItem } from "./Cards";
import { SectionTitle } from "./UIElements";

const skills = [
  {
    id: 1,
    percentage: 95,
    title: "HTML/CSS3",
  },
  {
    id: 2,
    percentage: 70,
    title: "PHP/Laravel",
  },
  {
    id: 3,
    percentage: 75,
    title: "JAVA/Spring",
  },
  {
    id: 4,
    percentage: 90,
    title: "React",
  },
  {
    id: 5,
    percentage: 70,
    title: "Next.js",
  },
  {
    id: 6,
    percentage: 70,
    title: "Bootstrap5",
  },
  {
    id: 7,
    percentage: 40,
    title: "TailwindCSS",
  },
  {
    id: 8,
    percentage: 75,
    title: "UML",
  },
];

const Skills = () => {
  return (
    <div className="relative z-30 px-2 py-12 sm:px-10 lg:px-32" id="skills">
      <SectionTitle title="Skills & technologies" />
      <div className="flex flex-wrap items-start gap-x-20 gap-y-12">
        {skills.map((skill) => (
          <SkillItem
            key={skill.id}
            id={skill.id}
            percentage={skill.percentage}
            skill={skill.title}
          />
        ))}
      </div>
    </div>
  );
};

export default Skills;
