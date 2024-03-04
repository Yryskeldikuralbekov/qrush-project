import Header from "../../widgets/Header";
import IntroductionSection from "../../widgets/mainPage/IntroductionSection";
import AboutUsSection from "../../widgets/mainPage/AboutUsSection";
import DigitalInformationSection from "../../widgets/mainPage/DigitalInformationSection";
import TeamSection from "../../widgets/mainPage/TeamSection";
import RehearsalRoomsSection from "../../widgets/mainPage/RehearsalRoomsSection";

function MainPage() {
  return (
    <>
      <Header />
      <IntroductionSection />
      <AboutUsSection />
      <DigitalInformationSection />
      <TeamSection />
      <RehearsalRoomsSection />
    </>
  );
}

export default MainPage;
