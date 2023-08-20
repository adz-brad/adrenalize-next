import ProgressBar from "./ProgressBar"
import Link from "next/link"
import Image from "next/image"

export default function Performance() {
  return (
    <section className="flex flex-col items-center my-16 pb-16 space-y-8 p-4 lg:p-0">

      <h2 className="gradient-header text-center lg:text-left">
          High Performance Websites & Web Apps
      </h2>
 
      <div className="relative flex flex-col lg:flex-row items-center justify-center lg:space-x-24 max-w-screen-2xl lg:mx-auto">

        <Image
          src="/core-web-vitals-monitoring.png"
          alt="High performance websites and apps from Adrenalize Digital"
          className="lg:-scale-x-[1]"
          width={650}
          height={500}
          quality={100}
        />


        <div className="flex flex-col lg:w-3/5">
          <h3 className="text-center my-4 lg:my-0 lg:text-left text-2xl">
            Speed. Accessibility. SEO.{' '} 
            <strong>
              Right Out Of The Box.
            </strong>
          </h3>
          <div className="flex grid grid-cols-2 lg:grid-cols-4 gap-4 not-prose mt-8">
            <div className="flex flex-col items-center space-y-2">
              <ProgressBar 
                strokeWidth={10}
                size={100}
                value={100}
                textSize="text-2xl"
                textColor="fill-green-500 drop-shadow-md"
                strokeColor="stroke-green-500"
              />
              <span className="font-semibold drop-shadow-sm">
                Performance
              </span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <ProgressBar 
                strokeWidth={10}
                size={100}
                value={100}
                textSize="text-2xl"
                textColor="fill-green-500 drop-shadow-md"
                strokeColor="stroke-green-500"
              />
              <span className="font-semibold drop-shadow-sm">
                Accessibility
              </span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <ProgressBar 
                strokeWidth={10}
                size={100}
                value={100}
                textSize="text-2xl"
                textColor="fill-green-500 drop-shadow-md"
                strokeColor="stroke-green-500"
              />
              <span className="font-semibold drop-shadow-sm">
                Best Practices
              </span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <ProgressBar 
                strokeWidth={10}
                size={100}
                value={100}
                textSize="text-2xl"
                textColor="fill-green-500 drop-shadow-md"
                strokeColor="stroke-green-500"
              />
              <span className="font-semibold drop-shadow-sm">
                SEO
              </span>
            </div>
          </div>
          <div className="content">
          <p className="py-4">
            The building blocks for high conversion rates should be native to your project, not a post-launch sales pitch from a marketing team. At Adrenalize, we bake all the ingredients for success into your project from the start, meaning you get more bang for you buck. Stop dipping into your profits and start saving with Adrenalize today! 
          </p>
          </div>
          <div className="not-prose pt-4 text-center">
          <Link title="Supercharge Your Business With Adrenalize" className="button mb-8" href="/contact">
            Supercharge Your Business With Adrenalize
          </Link>
          </div>
        </div>
      </div>

  </section>
  )
}
