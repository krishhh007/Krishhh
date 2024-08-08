import Image from "next/image";
import { useState } from "react";

const Positions = () => {
  const [position] = useState([
    {
      id: 1,
      image: "/images/ROS.jpg",
      role: "Rosette Smart Life- COO & Software developer",
      type: "hybrid",
      date: "05/2023 - 07/2024",
      skills: [
       
        { id: 1, name: "Flutter/Mobile Application development", image: "/images/flutter.png" },
        { id: 2, name: "Software development", image: "/images/flutter.png" },
       
      ],
      links: [
        { id: 1, url: "https://rosettesmartlife.com/" },
      ],
    },
  ]);

  return (
    <div className="py-6 border-b border-zinc-700">
      <h3 className="text-gray-400 capitalize text-lg font-medium">
        work history{" "}
      </h3>
      {position.map((pos) => (
        <div className="mt-6 flex space-x-3" key={pos.id}>
          <div className="relative w-[50px] h-[50px] rounded-full overflow-hidden">
            <Image
              src={pos.image}
              fill
              alt="job"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-white capitalize">{pos.role}</h2>
            <h5 className="text-gray-500 font-medium capitalize text-sm mt-[2px]">
              {pos.type} - <span>{pos.date}</span>
            </h5>
            {pos.skills && (
              <div className="flex flex-wrap gap-2 my-2">
                {pos.skills?.map((skill) => (
                  <div key={skill.id}>
                    <div className="flex items-center bg-zinc-800 px-3 py-1 rounded-sm ">
                      <div className="relative w-[20px] h-[20px]">
                        <Image
                          src={`${skill.image}`}
                          fill
                          alt="skill"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <span className="ml-2 text-gray-200 capitalize text-sm font-medium">
                        {skill.name}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}

            <div className="mt-2">
              {pos.links && (
                <ul className="list-disc pl-5">
                  {pos.links.map((link) => (
                    <li key={link.id}>
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400"
                      >
                        {link.url}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Positions;
