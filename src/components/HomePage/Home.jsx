//components
import { Header } from "../HeroSection/Header";
import { Work } from "../Work/Work";
import { Contact } from "../Contact/Contact";
import { TopBtn } from "../../Modules/Top/TopBtn";

//css imports
import "./home.scss";

export const Home = () => {
  return (
    <div id="home" className="ui-homepage">
      <Header />
      <Work />
      {/* For time being commenting will work later on */}
      {/* <OtherProjects /> */}
      <Contact />
      <TopBtn />
    </div>
  );
};
