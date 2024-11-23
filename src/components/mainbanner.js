import schoolImage from '../assets/images/school-classroom.png';
import schoolImage2 from '../assets/images/school-classroom-1.png';
import schoolImage3 from '../assets/images/admission-image.png';
import schoolImage4 from '../assets/images/school-main-banner.webp';
import schoolImage5 from '../assets/images/leadership-n-faculty-image.png'
import schoolImage6 from '../assets/images/infrastructure-image.png';
import { JackInTheBox } from 'react-awesome-reveal';

const MainSection = () => {
    const items = [
      { id: 1, title: "School", image: schoolImage, info: "Explore our vibrant school environment." },
      { id: 2, title: "Curriculum", image: schoolImage2, info: "Discover our comprehensive curriculum." },
      { id: 3, title: "Admission", image: schoolImage3, info: "Learn about our admission process." },
      { id: 4, title: "Management", image: schoolImage4, info: "Meet our excellent management team." },
      { id: 5, title: "Leadership", image: schoolImage5, info: "Experience our strong leadership." },
      { id: 6, title: "Faculty & Infrastructure", image: schoolImage6, info: "Get to know our faculty and infrastructure." },
    ];
  
    return (
      <JackInTheBox duration={1500} triggerOnce>
      <div className="main-content">
        <div className="grid-container">
          {items.map((item) => (
            <div className="grid-item" key={item.id}>
              <div className="main-image-container">
                <img src={item.image} alt={item.title} className="grid-image" />
                <div className="info-box">
                  <h3>{item.title}</h3>
                  <p>{item.info}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      </JackInTheBox>
    );
  };
  
  export default MainSection;
  