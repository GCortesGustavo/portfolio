"use client"
import Link from "next/link";
import { Button } from "./ui/button";

import{ Swiper, SwiperSlide} from "swiper/react"

//swiper styles
import "swiper/css"
import "swiper/css/pagination"

//Import required modules
import {Pagination} from "swiper/modules";

import ProjectCard from "./ProjectCard";

const projectData = [
    {
        image: "/work/portfolio.png",
        category: "Next14",
        name: "Portfolio",
        description: "Personal website to share my work and services, and connect with clients from all countries",
        link: "/",
        github: "https://github.com/GCortesGustavo/portfolio",
    },
    {
        image: "/work/tesla.png",
        category: "Astro",
        name: "TestaClone",
        description: "Clone of the main tesla page to learn about the astro library and improve my knowledge in tailwind css",
        link: "/",
        github: "https://github.com/GCortesGustavo/TestaClone",
    },
    {
        image: "/work/chatOficial.png",
        category: "React js",
        name: "Livechatg",
        description: "Real-time chat where the messages sent and the people who send them are stored. Socket.io is used.",
        link: "/",
        github: "https://github.com/GCortesGustavo/LiveChatg",
    },
    {
        image: "/work/ferretería.png",
        category: "Next13",
        name: "Rofe Ferretería",
        description: "App for the internal management of a hardware store, contains Google Auth payment gateway, etc.",
        link: "https://pf-ferreteria.vercel.app/login",
        github: "https://github.com/ImanolBraccciale/PF-Ferreteria",
    },
    {
        image: "/work/image.png",
        category: "React js and Typescript",
        name: "Pokedex",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, facere.",
        link: "/",
        github: "/",
    },
    {
        image: "/work/rick.png",
        category: "React js",
        name: "Rick And Morty",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, facere.",
        link: "/",
        github: "https://github.com/GCortesGustavo/RickAndMorty",
    },
    {
        image: "/work/1.png",
        category: "Next13",
        name: "First Next Project",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, facere.",
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
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, facere.",
        link: "/",
        github: "https://github.com/GCortesGustavo/FirstProyects",
    },
]

const Work = () => {
  return (
    <section className="relative mb-12 xl:mb-48">
        <div className="container mx-auto">
            {/*Text */}
            <div className="max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12  xl:h-[400px] flex flex-col justify-center items-center xl:items-start">
                <h2 className="section-title mb-4">Latest Projects</h2>
                <p className="subtitle mb-8">Latest projects that I have carried out personally and in groups.</p>
                <Link href="/projects">
                    <Button>All Projects</Button>
                </Link>
            </div>
            {/*Slider*/}
            <div className="xl:max-w-[1000px] xl:absolute right-0 top-0">
                <Swiper className="h-[480px]"  
                    slidesPerView={1} 
                    breakpoints={{640: {
                    slidesPerView: 2,
                }}} 
                    spaceBetween={30} 
                    modules={[Pagination]} 
                    pagination={{clickable: true}}>
                    {/*Shows only the first 4 projects for the slides*/}
                    {projectData.slice(0, 4).map((project, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <ProjectCard project={project} />
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>
        </div>
    </section>
  )
}

export default Work