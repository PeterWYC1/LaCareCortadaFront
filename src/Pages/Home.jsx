import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import styles from '../Styles/Home.module.css';
import ProductosDestacados from "../Components/ProductosDestacados";
import img1 from '../Photos/Ppl/Img1.jpg';
import img2 from '../Photos/Ppl/img2.jpg';
import Slider from "react-slick";
import model1 from '../Photos/Modelos/model1.jpg';
import model2 from '../Photos/Modelos/model2.jpg';
import model3 from '../Photos/Modelos/model3.jpg';
// Sample data
const models = [
  { name: 'Jenn Lewandofss', photo: model1 , portfolioLink: '#' },
  { name: 'Karolina Hemps', photo: model2, portfolioLink: '#' }, 
];

const featuredModels = ['Model 1', 'Model 2'];
const featuredProducts = ['Product 1', 'Product 2'];
const upcomingEvents = ['Event 1', 'Event 2'];

const images = [img1,img2];



function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    
  
    <div className={styles.container}>
       
      <Slider {...settings} className={styles.carousel}>
        {images.map((image, index) => (
             <div key={index}>
             <img src={image} alt={`Carousel Image ${index + 1}`} className={styles.carouselImage} />
           </div>
        ))}
      </Slider>

      <h1 className={styles.welcomeMessage}>Welcome to La Care Cortada's Empire</h1>
      
      <p className={styles.welcomeParagraph}>
        Step into the bold and glamorous world of Andrea Mesa, better known as La Care Cortada. As a dominant figure in the makeup and fashion industry, she invites you to explore her empire, where beauty meets ambition. From managing top-tier models to hosting exclusive fashion events. Andrea’s brand offers more than just makeup—it’s a lifestyle, one that transcends the ordinary.
      </p>

      <p className={styles.welcomeParagraph}>
        Discover our premium makeup line, browse the latest fashion events, and meet the talented models who bring our brand to life. Whether you’re here for beauty tips, exclusive products, or just to admire the artistry of fashion, La Care Cortada has something for everyone.
      </p>
      <ProductosDestacados></ProductosDestacados>
      <h1 className={styles.welcomeMessage}>Featured Models</h1>
      
      
      <div className={styles.modelList}>
        {models.map((model, index) => (
          <div key={index} className={styles.modelCard}>
            <img className={styles.modelPhoto} src={model.photo} alt={model.name} />
            <h2 className={styles.modelName}>{model.name}</h2>
            <a className={styles.portfolioButton} href={model.portfolioLink}>View Portfolio</a>
          </div>
        ))}
      </div>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>About the Brand</h2>
        <p className={styles.welcomeParagraph}>
          Founded by the infamous Andrea Mesa, La Care Cortada is not your average makeup brand. It represents the fierce, the rebellious, and those unafraid to make a statement. Andrea’s journey from the streets to stardom has shaped the brand’s unique identity, blending luxury makeup with an edgy, underground vibe.
        </p>
      </section>
    </div>
    
  );
}

export default Home;
