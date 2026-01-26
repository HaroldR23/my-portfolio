import AboutMe from "./components/Hero/Hero";
import Blog from "./components/Blog/Blog";
import ContactMe from "./components/ContactMe/ContactMe";
import ProjectsSection from "./components/ProjectsSection/ProjectsSection";
import Technologies from "./components/Technologies/Technologies";

const HomePage = () => {
  return (
    <div>
      <AboutMe />
      <Technologies />
      <ProjectsSection />
      <div>
        <Blog />
        <ContactMe />
      </div>
    </div>
  );
};

export default HomePage;
