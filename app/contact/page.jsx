import Form from "@/components/Form"
import {MailIcon, HomeIcon, PhoneCall } from "lucide-react"

const Contact = () => {
  return (
    <section className="container mx-auto">
      {/*Text Ilustration*/}
      <div className="grid xl:grid-cols-2 pt-12 xl:h-[480px] mb-6 xl:mb-24">
        {/*Text */}
        <div className="flex flex-col justify-center">
          <div className="flex items-center gap-x-4 text-primary text-lg mb-4">
            <span className="w-[30px] h-[2px] bg-primary"></span>
            Say Hello 👋
          </div>
          <h1 className="h1 max-w-md mb-8">Let's Work Together.</h1>
          <p className="subtitle max-w-[400px]">Turning Ideas into Impactful Solutions for Your Success!</p>
        </div>
        {/*Ilustration */}
        <div className="hidden xl:flex w-full bg-contact_illustration_light dark:bg-contact_illustration_dark bg-contain bg-top bg-no-repeat"></div>
      </div>
      {/*Info text & form*/}
      <div className="grid xl:grid-cols-2 mb-24 xl:mb-32">
        {/*Info text */}
        <div className="flex flex-col gap-y-4 xl:gap-y-14 mb-12 xl:mb-24 text-base xl:text-lg">
          {/*Mail */}
          <div className="flex items-center gap-x-8">
            <MailIcon size={18} className="text-primary"/>
            <div>gustavocortes934@gmail.com</div>
          </div>
          {/*Adrress */}
          <div className="flex items-center gap-x-8">
            <HomeIcon size={18} className="text-primary"/>
            <div>Mendoza, Argentina</div>
          </div>
          {/*Phone */}
          <div className="flex items-center gap-x-8">
            <PhoneCall size={18} className="text-primary"/>
            <div>+54 261 5166385</div>
          </div>
        </div>
        <Form />
      </div>
    </section>
  )
}

export default Contact