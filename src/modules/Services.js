import React from "react";
import { MeshImage } from "../assets";
import ServiceCard from "../components/screen/ServiceCard";
import { CloudIcon, CodeIcon, CyberIcon, DatabaseIcon, DigitalIcon, SoftIcon } from "../assets/images/services";

const Services = () => {
  const Data = [
    {
      id: 1,
      name: "Web Development",
      description:
        "Web development is the process of creating websites and web applications for the internet or intranet.",
      icon: CodeIcon,
    },
    {
      id: 2,
      name: "Cloud Solutions",
      description:
        "Cloud solutions refer to the use of cloud computing technology to provide services and solutions over the internet.",
      icon: CloudIcon,
    },
    {
      id: 3,
      name: "Cyber Security",
      description:
        "Cybersecurity refers to the protection of computer systems, networks, and data from theft, damage, or unauthorized access.",
      icon: CyberIcon,
    },
    {
      id: 4,
      name: "Data Analytic",
      description:
        "Data analytics refers to the process of examining and interpreting large datasets to extract insights and draw conclusions.",
      icon: DatabaseIcon,
    },
    {
      id: 5,
      name: "Software Development",
      description:
        "Software development is the process of creating computer software programs that perform specific functions or tasks.",
      icon: SoftIcon,
    },
    {
      id: 6,
      name: "Digital Marketing",
      description:
        "Digital marketing refers to the use of digital channels and technologies to promote products, services, or brands.",
      icon: DigitalIcon,
    },
  ];
  return (
    <div
      className="p-20"
      style={{
        backgroundImage: `url(${MeshImage}), linear-gradient(#1d1d1d, #1d1d1d)`,
      }}
    >
      <div className="flex justify-center">
        <div className=" border border-[#06d889] py-3 px-5 w-[250px] text-white flex justify-center items-center font-bold">
          SOLUTIONS WE OFFER
        </div>
      </div>
      <h3 className="text-center text-4xl font-bold text-white mt-3">
        Services & Solutions
      </h3>
      <div className="py-10 flex flex-wrap justify-between">
        {Data.map((item)=>(
             <ServiceCard data={item}/>
        ))}
        {/* <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard /> */}
      </div>
    </div>
  );
};

export default Services;
