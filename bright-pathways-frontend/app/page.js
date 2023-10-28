
import EightSection from "./sections/EightSection";
import FifthSection from "./sections/FifthSection";
import FourthSection from "./sections/FourthSection";
import Home from "./sections/Home";
import NinthSection from "./sections/NinthSection";
import Secondsection from "./sections/Secondsection";
import SeventhSection from "./sections/SeventhSection";
import SixthSection from "./sections/SixthSection";
import ThirdSection from "./sections/ThirdSection";

const page = () => {
  return (
    <div>
      
      <Home/>
      <Secondsection/>
      <ThirdSection/>
      <FourthSection/>
      <FifthSection/>
      {/* <SixthSection/> */}
      {/* <SeventhSection/> */}
      <EightSection/>
      <NinthSection/>
    </div>
  )
}

export default page