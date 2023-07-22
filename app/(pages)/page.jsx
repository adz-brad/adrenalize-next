import Hero from "../components/Hero"
import dynamic from "next/dynamic"

const Performance = dynamic(() => import ('../components/Performance'))
const Architecture = dynamic(() => import ('../components/Architecture'))
const Plans = dynamic(() => import ('../components/Plans'))

export default function Home() {
  return (
    <>
      <Hero />
      <Performance />
      <Architecture />
      <Plans />
    </>
  )
}
