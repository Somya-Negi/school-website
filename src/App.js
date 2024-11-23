import './App.css';
import Navbar from './components/navbar';
import FormPage from './components/applicationform';
import ContentBanner from './components/contentbanner';
import MainSection from './components/mainbanner';
import CarouselSection from './components/carouselsection';
import Footer from './components/footer'

const App = () => {
  return (
    <div> 
      <Navbar />
      <FormPage />
      <ContentBanner />
      <MainSection />
      <CarouselSection />
      <Footer />
    </div>
  );
}

export default App;