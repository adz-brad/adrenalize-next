import Link from "next/link"
import { plans } from "../data"
import ProductCard from "./ProductCard"

export default function Plans() {
  return (
    <section className="flex flex-col items-center px-4 py-16 lg:px-0 lg:py-32 max-w-screen-2xl mx-auto">
        <h2 className="gradient-header">
            Kickstart Your Project Today
        </h2>
        <div className="content">
            <h3 className="text-3xl">
                Choose A Plan To Get Started
            </h3>
        </div>
        <ul className="grid grid-cols-1 lg:grid-cols-3 w-full gap-8 my-16">
                {plans.map((plan, i) => {
                    return <ProductCard 
                        key={i}
                        _key={i}
                        title={plan.title}
                        price={plan.price}
                        features={plan.features}
                    />
                })}
            </ul>

        <Link href="/" className="button mt-4">
            Learn More About Our Platform
        </Link>
    </section>
  )
}
