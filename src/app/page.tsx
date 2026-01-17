
import { About } from "./components/about";
import { Experience } from "./components/experience";
import { Footer } from "./components/footer/footer-body";
import HomePage from "./components/home/home";
import { Menu } from "./components/navbar";
import Projects from "./components/projects/projects";
import { Skills } from "./components/skills/skill";

export default function Home() {

  return (
    <div>
      <Menu />
      <HomePage />
      <About />
      <Experience/>
      <Skills />
      <Projects />
      <Footer />
    </div>
  )
}