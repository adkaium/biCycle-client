import { Products } from "../Shop/Products"
import { Banner } from "./Banner"
import { Categories } from "./Categories"
import DealsSection from "./DealsSection"
import { HeroSection } from "./HeroSection"


export const Home = () => {
  return (
    <>
    <Banner />
    <Categories />
    <HeroSection />
    <Products/>
    <DealsSection/>
    </>
  )
}
