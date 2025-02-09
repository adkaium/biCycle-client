import { Products } from "../Shop/Products"
import { Banner } from "./Banner"
import { Categories } from "./Categories"
import { HeroSection } from "./HeroSection"


export const Home = () => {
  return (
    <>
    <Banner />
    <Categories />
    <HeroSection />
    <Products/>
    </>
  )
}
