import Image from "next/image"
import Link from "next/link"

export default function Architecture() {
  return (
    <section className="flex flex-col lg:flex-row justify-center items-center content-invert lg:pt-16 lg:pb-32 bg-base-900 lg:space-x-16 max-w-screen-2xl mx-auto">
    <div className="p-4 lg:px-8 lg:py-0 shadow-lg rounded-sm max-w-screen-1/2 lg:w-1/2">
      <h2 className="pb-4 border-b border-base-400/30">
        Composable MACH Architecture 
      </h2>
      <h3 className="text-xl md:text-2xl">
            Scalable, Future-Proof Solutions For Your Business
        </h3>
        <p>
            Embracing the concept of composability means that your business immediately benefits from the multiple advantages inherent with a headless, cloud-native, API-first architecture. These key advantages include:
        </p>
        <ul>
          <li>Future-Proof Scalability</li>
          <li>Flexibe, Agile Delivery</li>
          <li>Decoupled, Headless Data Strcuture</li>
          <li>Improved Performance & Security</li>
        </ul>
        <p>
          That's just to name a few. MACH architectures provide a modern and scalable approach to building web applications, offering flexibility, performance and maintainability while enabling seamless integration with external systems and services.
        </p>
      <div className="not-prose pt-4">
        <Link
            href="/"
            className="button"
            title="The Benefits of Microservice Architecture"
        >
            More Benefits of MACH Architecture
        </Link>
      </div>
    </div>
    <Image
        src="/api-architecture.png"
        alt="MACH Archicture: Microservices, API-First, Cloud-Native, Headless"
        className="my-auto p-2 lg:p-0"
        width={600}
        height={600}
        quality={100}
    />
  </section>
  )
}
