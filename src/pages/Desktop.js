import NavBarDesktop from "../components/NavBarDesktop";
import ReadMoreButton from "../components/ReadMoreButton";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent1 from "../components/FrameComponent1";
import YourCompanyLogo from "../components/YourCompanyLogo";
import FrameComponent from "../components/FrameComponent";
import FooterS from "../components/FooterS";
import styles from "./Desktop.module.css";

const Desktop = () => {
  return (
    <div className={styles.desktop}>
      <div className={styles.bar}>
        <div className={styles.thisPageIsIncludedInAFreParent}>
          <div className={styles.thisPageIs}>
            This page is included in a free SaaS Website Kit.
          </div>
          <div className={styles.viewTheCompleteKitParent}>
            <div className={styles.viewTheComplete}>View the complete Kit</div>
            <img className={styles.icons} alt="" src="/icons.svg" />
          </div>
        </div>
      </div>
      <NavBarDesktop />
      <ReadMoreButton />
      <FrameComponent2 />
      <FrameComponent1 />
      <YourCompanyLogo />
      <FrameComponent />
      <FooterS />
    </div>
  );
};

export default Desktop;
