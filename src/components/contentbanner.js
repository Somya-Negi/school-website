import contentImage from '../assets/images/school-classroom.png';
import { Slide } from 'react-awesome-reveal';
const ContentBanner = () =>{
return (
  
  <div className="content-section">

  <div className="center-section">
    <h1>Why Vishal Bharti School ?</h1>
    <p>Discover Vishal Bharti Senior Secondary School's Unique Approach to Learning</p>
  </div>

  <div className="content-banner-container">
  <Slide left duration={1500} triggerOnce>
  <div className="content-left-section">
     <img src={contentImage} alt="content-banner-image" />
  </div>
  </Slide>
  
  <div className="content-right-section">
  <Slide direction="up" duration={1500} triggerOnce>
    <h3>Discover Vishal Bharti Senior Secondary School's Unique Approach to Learning</h3>
    <p>At Vishal Bharti Senior Secondary School, we believe that every student has the potential to excel academically and personally. 
    That’s why we’ve developed a unique approach to learning that focuses on each student’s individual needs and learning style.
     Our teachers are dedicated to fostering a supportive and inclusive learning environment, where students are encouraged to explore 
     new ideas and take risks. We offer a wide range of academic and extracurricular programmes that enable our students to build a 
     strong foundation for success.</p>
     </Slide>
  </div>
  
  </div>
  
</div>

)
}

export default ContentBanner;