import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../components/style/styles";
import { MeshImage, github } from "../assets";
import { SectionWrapper } from "../components/hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)} className="bg-[#171717] p-5 rounded-lg">
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="github"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>
        <div className="mt-5 ">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px] text-white">{description}</p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color} text-white`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", 1 * 0.5, 0.75)}
      className="w-full py-20 "
      style={{
        backgroundImage: `url(${MeshImage}), linear-gradient(#1d1d1d, #1d1d1d)`,
      }}
    >
      <motion.div variants={textVariant()} className="flex flex-col justify-center items-center">
        <div className="border border-[#06d889] py-3 px-5 w-[250px] text-white flex justify-center items-center font-bold">
          <p className={styles.sectionSubText}>My Work</p>
        </div>
        <h2 className="text-center mt-4 text-4xl font-bold text-white">Projects</h2>
      </motion.div>
      <div className="w-full flex">
        {/* <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-30px text-white"
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p> */}
      </div>
      <div className="mt-20 flex flex-wrap gap-7 justify-center">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </motion.div>
  );
};

export default SectionWrapper(Works, "");
