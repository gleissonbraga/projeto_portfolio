
import { About } from "./components/about";
import { Footer } from "./components/footer/footer-body";
import HomePage from "./components/home/home";
import { Menu } from "./components/navbar";
import { Skills } from "./components/skills/skill";

export default function Home() {

  return (
    <div>
      <Menu />
      <HomePage />
      <About />
      <Skills />
      <Footer />
    </div>
  )
}