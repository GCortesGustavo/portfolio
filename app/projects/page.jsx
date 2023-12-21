"use client"
import React, {useState} from "react";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import ProjectCard from "@/components/ProjectCard";


const projectData = [
  {
      image: "/work/1.png",
      category: "Next14",
      name: "Portfolio",
      description: "Personal website to share my work and services, and connect with clients from all countries",
      link: "/",
      github: "https://github.com/GCortesGustavo/portfolio",
  },
  {
      image: "/work/3.png",
      category: "Astro",
      name: "TestaClone",
      description: "Clone of the main tesla page to learn about the astro library and improve my knowledge in tailwind css",
      link: "/",
      github: "https://github.com/GCortesGustavo/TestaClone",
  },
  {
      image: "/work/2.png",
      category: "React js",
      name: "Livechatg",
      description: "Real-time chat where the messages sent and the people who send them are stored. Socket.io is used.",
      link: "/",
      github: "https://github.com/GCortesGustavo/LiveChatg",
  },
  {
      image: "/work/3.png",
      category: "Next13",
      name: "Rofe Ferretería",
      description: "App for the internal management of a hardware store, contains Google Auth payment gateway, etc.",
      link: "https://pf-ferreteria.vercel.app/login",
      github: "https://github.com/ImanolBraccciale/PF-Ferreteria",
  },
  {
      image: "/work/11.png",
      category: "React js and Typescript",
      name: "Pokedex",
      description: "App that simulates a pokedex from the Pokemon series. You see different types of pokemon and details",
      link: "/",
      github: "/",
  },
  {
      image: "/work/4.png",
      category: "React js",
      name: "Rick And Morty",
      description: "App to learn about the diversity of characters in the Rick And Morty series and their details.",
      link: "/",
      github: "https://github.com/GCortesGustavo/RickAndMorty",
  },
  {
      image: "/work/1.png",
      category: "Next13",
      name: "First Next Project",
      description: "First approaches with Next. App to show different users.",
      link: "/",
      github: "https://github.com/GCortesGustavo/FirstNextProyect",
  },
  {
      image: "/work/4.png",
      category: "React js",
      name: "In progress...",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, facere.",
      link: "/",
      github: "/",
  },
  {
      image: "/work/1.png",
      category: "HTML AND CSS",
      name: "HTML/CSS practice",
      description: "First HTML practices and designs with CSS.",
      link: "/",
      github: "https://github.com/GCortesGustavo/FirstProyects",
  },
]

const uniqueCategories = ["All projects",
  ...new Set(projectData.map((item) => item.category)),
]

const Projects= () => {
  const [categories, setCategories] = useState(uniqueCategories);
  const [category, setCategory] = useState("all projects")

const filteredProjects = projectData.filter((project) => {
//if category is "all projects" return all projects, else filter by category
return category === "All projects" ? project : project.category === category
});



  return (
    <section className='min-h-screen pt-12'>
        <div className="container mx-auto">
          <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">My projects</h2>
          <Tabs defaultValue={category} className="mb-24 xl:mb-48">
            <TabsList className="w-full grid h-full md:grid-cols-4 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none">
              {categories.map((category, index)=>{
                return <TabsTrigger 
                  onClick={() => setCategory(category)} 
                  value={category} 
                  key={index} 
                  className="capitalize w-[162px] md:w-auto">
                    {category}
                  </TabsTrigger>
              })}
            </TabsList>
            {/*Tabs content */}
            <div className="text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
              {filteredProjects.map((project, index) => {
                return <TabsContent value={category} key={index}>
                  <ProjectCard project={project} />
                </TabsContent>
              })}
            </div>
          </Tabs>
        </div>
      </section>
  )
}

export default Projects