
// import GroupCards from "./home/GroupCards";

import { NavbarDemo } from "./home/NavbarDemo";
// import { FloatingDockDemo } from "./home/FloatingDockDemo";
// import { InfiniteMovingCardsDemo } from "./home/InfiniteMovingCardsDemo";
import { TypewriterEffectSmoothDemo } from "./home/TypewriterEffectSmoothDemo";
import { TimelineDemo } from "./home/TimelineDemo";
// import AnimatedPinDemo from "./home/AnimatedPinDemo";
// import { PlaceholdersAndVanishInputDemo } from "./home/PlaceholdersAndVanishInputDemo";
// import Bouns from "./home/Bouns";
// import { CarouselDemo } from "./home/CarouselDemo";
import HomeDown from "./home/HomeDown";

const App = () => {
  return (
    <div>
      <NavbarDemo/>
    <TypewriterEffectSmoothDemo/>
    <HomeDown/>
    {/* <AnimatedPinDemo/> */}
    {/* <PlaceholdersAndVanishInputDemo/> */}
    {/* <GroupCards/> */}
    {/* <Bouns/> */}
    {/* <FloatingDockDemo/> */}
    <TimelineDemo/>
    {/* <CarouselDemo/> */}

    </div>
  

  )
}

export default App