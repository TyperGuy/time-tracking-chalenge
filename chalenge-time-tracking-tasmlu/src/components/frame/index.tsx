import Styles from "./Frame.module.scss";
import { DotsThree } from "phosphor-react";
import { FC } from "react";
import { TimeFrames, Views } from "../../types/types";

const Images = [
  "./work.png",
  "./play.png",
  "./study.png",
  "exercise.png",
  "social.png",
  "./self_care.png",
];
var Messages = {
  daily: "Yesterday - ",
  weekly: "Last Week - ",
  monthly: "Last Month - ",
};

const algo = "Exerci se";
const Frame: FC<{ timeframe: TimeFrames; preferedView: keyof Views }> = ({
  timeframe,
  preferedView,
}) => {
  const text = algo.replace(/\s/g, "");
  return (
    <div
      className={Styles.frameContainer}
      style={{ backgroundImage: `url(${Images[4]})` }}
    >
      <div className={Styles.contentContainer}>
        <div className={Styles.header}>
          <span className={Styles.title}>{timeframe.title}</span>
          <DotsThree className={Styles.icon} size={40} />
        </div>
        <div className={Styles.information}>
          <span className={Styles.time}>
            {timeframe.timeframes[preferedView].current + "hrs"}
          </span>
          <span>
            {Messages[preferedView] +
              timeframe.timeframes[preferedView].previous +
              "hrs"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Frame;
