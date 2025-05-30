
import AboutAuthor from "./_components/aboutAuthorComponent";
import LifeStyle from "./_components/LifeStyle";
import Favorite from "./_components/Favorite";
const AboutGallery = () => {
  return (
    <div className="flex gap-10 flex-col">
      <AboutAuthor/>
      <LifeStyle />
      <Favorite />
    </div>
  );
};
export default AboutGallery;
