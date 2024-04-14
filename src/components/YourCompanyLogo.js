import FormFAQ from "./FormFAQ";
import styles from "./YourCompanyLogo.module.css";

const YourCompanyLogo = () => {
  return (
    <section className={styles.yourCompanyLogo}>
      <div className={styles.yourCompanyLogoChild} />
      <div className={styles.navBarDesktop}>
        <div className={styles.logoDefaultWrapper}>
          <div className={styles.logoDefault}>
            <h1 className={styles.h2}>Intuitive interface</h1>
            <h3 className={styles.body}>
              Celebrate the joy of accomplishment with an app designed to track
              your progress, motivate your efforts, and celebrate your
              successes, one task at a time.
            </h3>
          </div>
        </div>
        <div className={styles.wrapperAppNight}>
          <img
            className={styles.appNightIcon}
            loading="lazy"
            alt=""
            src="/app-night@2x.png"
          />
        </div>
      </div>
      <div className={styles.helixShape}>
        <div className={styles.footerS}>
          <div className={styles.h2Wrapper}>
            <h1 className={styles.h21}>Frequently asked questions</h1>
          </div>
          <div className={styles.faqs}>
            <FormFAQ />
            <div className={styles.formFAQ}>
              <FormFAQ
                propMarginTop="unset"
                propWidth="unset"
                propHeight="unset"
              />
              <FormFAQ
                propMarginTop="-0.1px"
                propWidth="unset"
                propHeight="unset"
              />
            </div>
            <FormFAQ
              propMarginTop="unset"
              propWidth="unset"
              propHeight="unset"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default YourCompanyLogo;
