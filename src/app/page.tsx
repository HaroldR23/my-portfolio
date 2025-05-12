import AboutMe from "./components/AboutMe/AboutMe";
import Blog from "./components/Blog/Blog";
import ContactMe from "./components/ContactMe/ContactMe";
import ProjectsSection from "./components/ProjectsSection/ProjectsSection";

const HomePage = () => {
  return (
    <div>
      <AboutMe />
      <ProjectsSection />
      <div>
        <Blog />
        <ContactMe />
      </div>
    </div>
  );
};

export default HomePage;
