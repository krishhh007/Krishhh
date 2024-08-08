import { useState } from "react";
import { FaHandPaper } from "react-icons/fa";
const About = () => {
  const [heading] = useState<string>("hello everyone");
  const [description] = useState<string>(
"I am a Computer Science and Engineering student with proven experience in software development at an early-stage startup. I have a strong understanding of SOLID principles and am eager to leverage my skills to enhance my domain and technical expertise. I am committed to contributing to the organization's overall success by applying my knowledge and dedication effectively" );
  return (
    <div className="py-6 border-b border-zinc-700">
      <h3 className="text-gray-400 capitalize text-lg font-medium">about me</h3>
      <h1 className="text-white text-2xl font-medium capitalize my-2 flex items-center">
        {heading}{" "}
        <FaHandPaper className="ml-3 text-yellow-400 rotate-[10deg]" />
      </h1>
      <p className="text-gray-400 font-medium ">{description}</p>
    </div>
  );
};

export default About;
