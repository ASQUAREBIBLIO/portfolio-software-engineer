import { EducationItem } from "./Cards";
import { SectionTitle } from "./UIElements";

const education = [
  {
    id: 1,
    school: "Faculty of Science Semlalia Marrakech - Cadi Ayyad University",
    formation: "Information Systems Engineering (MS)",
    yearStart: 2022,
    yearEnd: 2024,
  },
  {
    id: 2,
    school: "Faculty of Science Semlalia Marrakech - Cadi Ayyad University",
    formation: "Mathematics and Computer Science (BS)",
    yearStart: 2019,
    yearEnd: 2022,
  },
  {
    id: 3,
    school: "Demnate High School - Demnate",
    formation: "Mathematics Science (A)",
    yearStart: 2016,
    yearEnd: 2019,
  },
];

const Resume = () => {
  return (
    <div
      className="w-full px-2 py-12 relative z-40 sm:px-10 lg:px-32"
      id="resume"
    >
      {/* <Lines /> */}
      <SectionTitle title="Resume" />
      <p className="text-left  text-slate-700">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit itaque
        accusamus optio temporibus maxime doloremque repudiandae perferendis
        natus numquam quas? Quas facere cum voluptates. Nam fugit amet in beatae
        reiciendis.
      </p>
      {education.map((item) => (
        <EducationItem
          key={item.id}
          id={item.id}
          school={item.school}
          formation={item.formation}
          yearStart={item.yearStart}
          yearEnd={item.yearEnd}
        />
      ))}
    </div>
  );
};

export default Resume;
