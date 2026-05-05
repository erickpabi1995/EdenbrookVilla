import { useState } from 'react';
import styles from './UnitGallery.module.scss';

const UnitGallery = () => {
  const [selectedIndex, setSelectedIndex] = useState(4);
  
  const galleryData = [
    {
      image: '../architecture.webp',
      title: 'The Bedroom',
      description: '"Your Private Sanctuary." Designed for rest and refined with elegance. Experience the ultimate retreat in a space that balances serene comfort with the signature sophistication of Qluxe Homes.' // Replace with actual description
    },
    {
      image: '../edenBrookContainer.webp',
      title: 'The Building Facade',
      description: '"Architectural Excellence." A bold statement in Accra’s most prime locations. Qluxe Homes combines contemporary geometry with timeless materials to create landmarks you are proud to call home.'
    },
    {
      image: '../gallery3.webp',
      title: 'The Living Room',
      description: '"The Art of Living." Expansive layouts and floor-to-ceiling luxury. Whether entertaining guests or relaxing in style, the Qluxe Homes living experience is unparalleled.'
    },
    {
      image: '../gallery1.webp',
      title: 'The Kitchen',
      description: '"Culinary Perfection." Where function meets high-end design. Outfitted with premium finishes and state-of-the-art details, a Qluxe Homes kitchen is the heart of the modern luxury home.'
    },
    {
      image: '../unitGallery.jpg',
      title: 'The Entrance',
      description: '"A Grand Arrival." Step into a world where first impressions last a lifetime. Exquisite craftsmanship meets modern security at the threshold of your Qluxe Homes residence'
    }
  ];

  const handleImageClick = (index) => {
    setSelectedIndex(index);
  };

  return (
    <div className={styles.unitGallery} style={{ 
      background: `url('${galleryData[selectedIndex].image}') lightgray 50% / cover no-repeat` 
    }}>
      <div className={styles.container}>
        <p className={styles.frame}>GALLERY</p>
          <div className={styles.subFrame}>
            <div className={styles.secondFrame}>
        <svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 6 6" fill="none">
  <path d="M2.625 0.75C3.12228 0.75 3.59954 0.947198 3.95117 1.29883C4.3028 1.65046 4.5 2.12772 4.5 2.625C4.5 2.99584 4.38962 3.35865 4.18359 3.66699C3.97761 3.9751 3.68517 4.21556 3.34277 4.35742C3.00016 4.49934 3.6225 4.53621 2.25879 4.46387C1.89524 4.39147 1.56095 4.21329 1.29883 3.95117C1.03671 3.68905 0.858534 3.35476 0.786133 2.99121C0.713786 2.6275 0.750664 2.24984 0.892578 1.90723C1.03444 1.56483 1.2749 1.27239 1.58301 1.06641C1.89135 0.860379 2.25416 0.75 2.625 0.75Z" fill="white" stroke="white" strokeWidth="1.5"/>
</svg>
              <p className={styles.locationText}>{galleryData[selectedIndex].title}</p>
            </div>
            <p className={styles.nameContainer}>{galleryData[selectedIndex].description}</p>
          </div>
        <div className={styles.sliderContainer}>
          {galleryData.map((item, index) => (
            <div 
              key={index}
              className={styles.imageFrame}
              onClick={() => handleImageClick(index)}
            >
              <img src={item.image} alt='Image' />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UnitGallery;