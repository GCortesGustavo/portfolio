import Link from "next/link";
import { Button } from "./ui/button";
import {Download, Send} from "lucide-react";

import {
    RiBriefcase4Fill,
    RiTeamFill,
    RiTodoFill,
    RiArrowDownSLine,
    RiHammerFill,
    RiToolsFill,
} from "react-icons/ri";

//Components
import DevImg from "./DevImg";
import Socials from "./Socials";
import Badge from "./Badge";

const Hero = () => {
  return (
    <section className="py-12 xl:py-24 h-[84vh] xl:pt-28 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none ">
        <div className="container mx-auto">
            <div className="flex justify-between gap-x-8">
                {/*Text*/}
                <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left ">
                    <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">Web Developer</div>
                    <h1 className="h1 mb-4">Hello, my name is Gustavo Cortés</h1>
                    <p className="subtitle max-w-[490px] mx-auto xl:mx-0">
"Embarking on web development, marketing technician, and UX/UI design; my professional journey is marked by passion, adaptability, and a desire to grow."</p>
                    {/*Buttons*/}
                    <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12">
                        <Link href="/contact"> 
                            <Button className="gap-x-2">Contact Me <Send size={18}/></Button>
                        </Link>
                        <Link href="/CV_GUSTAVO_CORTES.pdf" target="_blank" rel="noopener noreferrer" passHref download="/CV_GUSTAVO_CORTES.pdf">
                                <Button variant="secondary" className="gap-x-2">Download CV<Download size={18}/></Button>
                        </Link>
                    </div>
                    {/*Socials*/}
                    <Socials containerStyles="flex gap-x-6 mx-auto xl:mx-0" iconsStyles="text-foreground text-[22px] hover:text-primary transition-all"/>
                </div>
                {/*Image*/}
                <div className="hidden xl:flex relative">
                    {/*Badge 1*/}
                    <Badge containerStyles="absolute top-[20%] -left-[5rem]" icon={<RiBriefcase4Fill />} endCountNum={1} badgeText="Years Of Experience"/>
                    {/*Badge 2*/}
                    <Badge containerStyles="absolute top-[75%] -left-[1rem]" icon={<RiTodoFill />} endCountNum={10} endCountText="" 
                    badgeText="Finished Proyects"/>
                    {/*Badge 3*/}
                    <Badge containerStyles="absolute top-[50%] -right-8" icon={<RiToolsFill />} endCountNum={10} endCountText=""
                    badgeText="Frameworks And Language"/>
                    <div className="bg-hero_shape2_light dark:bg-hero_shape2_dark w-[500px] h-[500px] bg-no-repeat absolute -top-8 -right-2"></div>
                    <DevImg containerStyles="bg-hero_shape w-[510px] h-[462px] -top-6 bg-no-repeat relative bg-bottom" imgSrc="/hero/developer.png"/>
                </div>
            </div>
            {/*Icon*/}
            <div className="hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce">
                <RiArrowDownSLine className="text-3xl text-primary"/>
            </div>
        </div>

    </section>
  )
}

export default Hero