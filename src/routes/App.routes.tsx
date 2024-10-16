import Navbar from "@/components/Navbar/Index";
import SubNavbar from "@/components/SubNavbar/Index";
import Landing from "@/sections/Landing";
import Services from "@/sections/Services";
import Price from "@/sections/Price";
import Partners from "@/sections/Partners";
import Reviews from "@/sections/Reviews";
import MobileApp from "@/sections/MobileApp";

import FlickeringGrid from "@/components/ui/flickering-grid";
import Footer from "@/components/Footer/Index";

function AppRoutes() {
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;

  return (
    <main className="relative">
      <FlickeringGrid
        className="fixed left-0 top-0 -z-50"
        squareSize={10}
        gridGap={15}
        color="#12823B"
        maxOpacity={0.3}
        flickerChance={0.01}
        width={screenWidth + 50}
        height={screenHeight + 50}
      />

      <SubNavbar />
      <Navbar />

      <Landing />
      <Services />
      <Price />
      <Partners />
      <Reviews />
      <MobileApp />
      <Footer/>

    </main>
  );
}

export default AppRoutes;
