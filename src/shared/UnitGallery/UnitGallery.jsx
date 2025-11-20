import styles from './UnitGallery.module.scss';

const UnitGallery = () => {
  return (
    <div className={styles.unitGallery}>
      <div className={styles.container}>
        <p className={styles.frame}>UNIT GALLERY</p>
          <div className={styles.subFrame}>
            <div className={styles.secondFrame}>
        <svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 6 6" fill="none">
  <path d="M2.625 0.75C3.12228 0.75 3.59954 0.947198 3.95117 1.29883C4.3028 1.65046 4.5 2.12772 4.5 2.625C4.5 2.99584 4.38962 3.35865 4.18359 3.66699C3.97761 3.9751 3.68517 4.21556 3.34277 4.35742C3.00016 4.49934 2.6225 4.53621 2.25879 4.46387C1.89524 4.39147 1.56095 4.21329 1.29883 3.95117C1.03671 3.68905 0.858534 3.35476 0.786133 2.99121C0.713786 2.6275 0.750664 2.24984 0.892578 1.90723C1.03444 1.56483 1.2749 1.27239 1.58301 1.06641C1.89135 0.860379 2.25416 0.75 2.625 0.75Z" fill="white" stroke="white" stroke-width="1.5"/>
</svg>
              <p className={styles.locationText}>Entrance</p>
            </div>
            <p className={styles.nameContainer}>The warm embrace of every home is the entrance — a cozy welcoming space meant for ushering a sense of peace and serenity</p>
          </div>
        {/* <div className={styles.sliderContainer}>
                <img src='../ImageFrame.png' alt='Image' />
                <img src='../ImageFrame.png' alt='Image' />
                <img src='../ImageFrame.png' alt='Image' />
                <img src='../ImageFrame.png' alt='Image' />
                <img src='../ImageFrame.png' alt='Image' />
                <img src='../ImageFrame.png' alt='Image' />
              </div> */}
            </div>
            </div>
  );
};

export default UnitGallery;
