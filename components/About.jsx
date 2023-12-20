"use client"
import DevImg from "./DevImg"
import Image from "next/image";
import { Tabs, TabsContent, TabsTrigger} from "@/components/ui/tabs"
import { TabsList } from "@/components/ui/tabs";

import { 
    User2, 
    MailIcon, 
    HomeIcon,
    PhoneCall,
    GraduationCap,
    Calendar,
    Briefcase,
} from "lucide-react";




const infoData = [
    {
        icon: <User2 size={20} />,
        text: "Gustavo Cortés",
    },
    {
        icon: <PhoneCall size={20} />,
        text: "+54 261 5166385",
    },
    {
        icon: <MailIcon size={20} />,
        text: "gustavocortes934@gmail.com",
    },
    {
        icon: <Calendar size={20} />,
        text: "Born on 30 Sep, 1999",
    },
    {
        icon: <GraduationCap size={20} />,
        text: "Full Stack Developer",
    },
    {
        icon: <HomeIcon size={20} />,
        text: "Mendoza, Argentina",
    },
]

const quialificationData = [
    {
        title: "education",
        data: [
            {
                university: "Henry",
                quialification: "Full Stack Developer",
                years: "2023"
            },
            {
                university: "University Technological Institute",
                quialification: "University Technician in Marketing",
                years: "2020-2022"
            },
            {
                university: "Platzi",
                quialification: "UX/UI Designer",
                years: "2023"
            }
        ],
    },
    {
        title: "experience",
        data: [
            {
                company: "Grupo Cioffi",
                quialification: "Human Resources Administrator",
                years: "2022-present"
            },
            {
                company: "Henry",
                quialification: "Teachnicall Assitant",
                years: "2023-2023"
            },
        ],
    },
]

const skillData = [
    {
        title: "skills",
        data: [
            {
                name: "HTML,CSS"
            },
            {
                name: "Front-end Development"
            },
            {
                name: "Javascript, Node.js"
            },
            {
                name: "Back-end Development"
            },
        ]
    },
    {
        title: "tools",
        data: [
            {
                imgPath: "/about/vscode.svg"
            },
            {
                imgPath: "/about/figma.svg"
            },
            {
                imgPath: "/about/notion.svg"
            },
            {
                imgPath: "/about/wordpress.svg"
            },
        ]
    },
]


const About = () => {
    const getData = (arr, title) => {
        return arr.find((item) => item.title === title)
    }

    return (
        <section className="xl:h-[860px] pb-12 xl:py-24">
            <div className="container mx-auto">
                <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">About Me</h2>
                <div className="flex flex-col xl:flex-row">
                    {/*Image*/}
                    <div className="hidden xl:flex flex-1 relative">
                        <DevImg containerStyles="bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative" imgSrc="/about/developer1.png" />
                    </div>
                    {/*Tabs*/}
                    <div className="flex-1">
                        <Tabs defaultValue="personal">
                            <TabsList className="w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none">
                                <TabsTrigger className="w-[162px] xl:w-auto"  value="personal">Personal Info</TabsTrigger>
                                <TabsTrigger className="w-[162px] xl:w-auto" value="qualifications">Qualifications</TabsTrigger>
                                <TabsTrigger className="w-[162px] xl:w-auto" value="skills">Skills</TabsTrigger>
                            </TabsList>
                            {/*Tabs content*/}
                            <div className="text-lg mt-12 xl:mt-8">
                                    {/* personal*/}
                                    <TabsContent value="personal">
                                        <div className="text-center xl:text-left">
                                            <h3 className="h3 mb-4">Unmatched Service Qualitity for Over 1 year</h3>
                                            <p className="subtitle max-w-xl mx-auto xl:mx-0">I specialize in crafting intuitive websites with cutting-edge technology, delivering dynamic and engaging user experience.</p>
                                        </div>
                                    </TabsContent>
                                    <TabsContent value="qualifications">Qualifications info</TabsContent>
                                    <TabsContent value="skills">Skills Info</TabsContent>
                                </div>
                        </Tabs>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About