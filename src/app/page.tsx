
import { About } from "./components/about";
import HomePage from "./components/home/home";
import { Menu } from "./components/navbar";

export default function Home() {

  return (
    <>
      <Menu />
      <HomePage />
      <About />
    </>
  )
}