import Image from "next/image"
import ScrollButton from "./ScrollButton"

export default function Hero() {
  return (
    <section
      title="Modern Digital Product Solutions"
      className="flex flex-col-reverse lg:flex-row lg:items-center bg-base-100 lg:h-[calc(100vh-79px)] max-w-screen-2xl mx-auto"
    >
      <div className="px-4 py-16 lg:py-0 lg:px-16 lg:w-2/3">
        <div className="flex flex-col items-center max-w-screen-md mx-auto space-y-8">
          <div className="flex flex-col items-center space-y-8">
        <h1 className="gradient-header">
          Speed. Efficiency. Precision.
        </h1>
        <h2 className="text-center lg:text-left text-2xl">
            We deliver enterprise-grade digital solutions that get results.
          </h2>
          </div>

        <div className="content hidden lg:block">

        <p>
          <strong>Get your products to market faster and better.</strong> Adrenalize executes on the leading edge of technological innovation to deliver high-performance <strong>digital solutions that convert.</strong> Contact us today to find out how our best-in-breed digital solution stacks can improve your bottom line. 
        </p>
        </div>
        <div className="not-prose mx-auto">
        <ScrollButton
                    scrollId="contact" title="Get Your FREE Consultation Today!" className="button pt-4">
          Get Your <strong className="uppercase">Free</strong> Consultation Today!
        </ScrollButton>
        </div>
 
        </div> 
      </div>
      <div className="relative w-full h-[350px] sm:h-[550px] lg:w-2/5 my-8">
        <Image
          title=""
          alt=""
          src="/cloud-serverless.png"
          className="object-cover"
          fill
        />
      </div>
    </section>
  )
}
