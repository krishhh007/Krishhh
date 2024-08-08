import { BsGithub, BsTwitter, BsLinkedin, BsYoutube, BsInstagram, BsFacebook, BsWhatsapp } from "react-icons/bs"
import { AiOutlineMail } from "react-icons/ai"
import { BiUserCircle } from "react-icons/bi";
import { useState } from "react"
const Contacts = () => {
    const [contacts] = useState([
      {
        id: 1,
        icon: <BsGithub className="text-gray-200" />,
        title: "github",
        url: "https://github.com/Krishnaraj017",
      },
      //{id: 2, icon:<BsTwitter className="text-gray-200"/>, title:'twitter', url:'https://twitter.com/gordxrohit' },
      {
        id: 2,
        icon: <BsLinkedin className="text-gray-200" />,
        title: "linkedin",
        url: "https://www.linkedin.com/in/krishnaraj-shetty-7s",
      },
      {
        id: 3,
        icon: <AiOutlineMail className="text-gray-200" />,
        title: "Email",
        url: "mailto:krishnarajshetty699@gmail.com",
      },
      {
        id: 4,
        icon: <BsYoutube className="text-gray-200" />,
        title: "youtube",
        url: "https://www.youtube.com/channel/UCYjX3RIopQyJGXWxE6qPGbA",
      },
      {
        id: 5,
        icon: <BsInstagram className="text-gray-200" />,
        title: "instagram",
        url: "https://www.instagram.com/_krishhh_017/",
      },
      //   {
      //     id: 6,
      //     icon: <BsFacebook className="text-gray-200" />,
      //     title: "facebook",
      //     url: "https://m.facebook.com/rohit.mandal.56481379",
      //   },

      {
        id: 6,
        icon: <BsWhatsapp className="text-gray-200" />,
        title: "WhatApp",
        url: "https://whatsapp.com/dl",
      },
      {
        id: 7,
        icon: <BiUserCircle className="text-gray-200" />,
        title: "download CV",
        url: "/files/Krishnaraj_Resume.pdf",
      },
    ]);
  return (
    <div className="py-6 border-b border-zinc-700">
        <h3 className="text-gray-400 capitalize text-lg font-medium">contacts</h3>
        <div className="flex flex-wrap -mx-2">
            {contacts.map(con => (
                <div key={con.id} className="p-2">
                    <a href={con.url} className="flex items-center bg-zinc-800 px-3 py-1.5 rounded-sm " target="-blank">
                {con.icon}
                 <span className="ml-2 text-gray-200 capitalize text-sm font-medium">{con.title}</span>
            </a>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Contacts
