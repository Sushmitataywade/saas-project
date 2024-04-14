import { useMemo } from "react";
import styles from "./FormFAQ.module.css";

const FormFAQ = ({ propMarginTop, propWidth, propHeight }) => {
  const formFAQStyle = useMemo(() => {
    return {
      marginTop: propMarginTop,
    };
  }, [propMarginTop]);

  const getForFreeButtonStyle = useMemo(() => {
    return {
      width: propWidth,
      height: propHeight,
    };
  }, [propWidth, propHeight]);

  return (
    <div className={styles.formfaq} style={formFAQStyle}>
      <b className={styles.howDoesThe}>How does the pricing work for teams</b>
      <div className={styles.getForFreeButton} style={getForFreeButtonStyle}>
        <img
          className={styles.appSocialMediaIcons}
          loading="lazy"
          alt=""
          src="/vector.svg"
        />
      </div>
    </div>
  );
};

export default FormFAQ;
