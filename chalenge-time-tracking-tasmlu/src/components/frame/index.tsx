import Styles from "./Frame.module.scss";
import { DotsThree } from "phosphor-react";

const Images = [
  "./work.png",
  "./play.png",
  "./study.png",
  "exercise.png",
  "social.png",
  "./self_care.png",
];

const algo = "Exerci se";
const Frame = () => {
  const text = algo.replace(/\s/g, "");
  return (
    <div
      className={Styles.frameContainer}
      style={{ backgroundImage: `url(${Images[5]})` }}
    >
      <div className={Styles.contentContainer}>
        <div className={Styles.header}>
          <span className={Styles.title}>Categoria</span>
          <DotsThree size={40} />
        </div>
        <div className={Styles.information}>
          <span className={Styles.time}>4hrs</span>
          <span>Last Week - 8hrs</span>
        </div>
      </div>
    </div>
  );
};

export default Frame;
