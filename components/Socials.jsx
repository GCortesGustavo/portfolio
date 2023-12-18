"use client"

import {
  RiLinkedinFill, 
  RiGithubFill, 
  RiInstagramFill
} from "react-icons/ri"

import Link from "next/link";

const icons = [
  {
    path: "https://www.linkedin.com/in/cortes-gustavo/",
    name: <RiLinkedinFill />
  },
  {
    path: "https://github.com/GCortesGustavo",
    name: <RiGithubFill />
  },
  {
    path: "https://www.instagram.com/gusti_cortes/?hl=es-la",
    name: <RiInstagramFill />
  }
]

const Socials = ({containerStyles, iconsStyles}) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => {
        return <Link href={icon.path} key={index}>
        <div className={`${iconsStyles}`}>{icon.name}</div>
        </Link>
      })}
    </div>
  )
}

export default Socials