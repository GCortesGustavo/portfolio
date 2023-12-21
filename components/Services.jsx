import { GanttChartSquare, Blocks, Gem} from "lucide-react";
import { Card, 
    CardContent, 
    CardDescription, 
    CardHeader,
    CardTitle 
} from "./ui/card";


const servicesData = [
    {
        icon: <GanttChartSquare size={72} strokeWidth={0.8}/>,
        title: "Web Design",
        description: "Crafting adaptable and intuitive web designs to exceed your expectations and deliver the best online experience. Transforming your vision into a stunning and functional website, prioritizing your satisfaction at every step of the process."

    },
    {
      icon: <Blocks size={72} strokeWidth={0.8}/>,
      title: "Web Development",
      description: "Crafting seamless web development solutions tailored to your needs. I bring your ideas to life with expert coding and functionality, ensuring a powerful and user-friendly online presence. Your satisfaction is my priority as I code, optimize, and elevate your digital experience."
      
  },
  {
    icon: <Gem size={72} strokeWidth={0.8}/>,
    title: "Digital Marketing",
    description: "Fueling online success with personalized digital marketing. I optimize campaigns, elevate your brand, and focus on your goals for maximum digital impact and satisfaction."
    
}
]
const Services = () => {
  return (
    <section className="mb-12 xl:mb-36">
      <div className="container mx-auto">
        <h2 className="section-title mb-12 xl:mb-24 text-center mx-auto">My services</h2>
        {/*Grid items */}
        <div className="grid xl:grid-cols-3 justify-center gap-y-12 xl:gap-y-24 xl:gap-x-8">
          {servicesData.map((item,index)=>{
            return <Card className="w-full max-w-[424px] h-[300px] flex flex-col pt-16 pb-10 justify-center items-center relative" key={index}>
              <CardHeader className="text-primary absolute -top-[60px]">
                <div className="w-[140px] h-[80px] bg-white dark:bg-background flex justify-center items-center">{item.icon}</div>
              </CardHeader>
              <CardContent className="text-center ">
                <CardTitle className="mb-4">{item.title}</CardTitle>
                <CardDescription className="text-lg">{item.description}</CardDescription>
              </CardContent>
            </Card>
          })}
        </div>
      </div>
    </section>
  )
}

export default Services