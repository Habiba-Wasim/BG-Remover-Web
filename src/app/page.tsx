import { Header } from "./components/header"
import { Hero } from "./components/hero"
import { Footer } from "./components/footer"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Hero />
      <Footer />
    </div>
  )
}

