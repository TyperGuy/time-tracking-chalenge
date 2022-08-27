import Styles from "./Frame.module.scss";
import { DotsThree } from "phosphor-react";
import { FC } from "react";
import { TimeFrames, Views, ColorsType } from "../../types/types";
import { getImage } from "../../services/getIcon";

const Colors = {
  Work: "hsl(15, 100%, 70%)",
  Play: "hsl(195, 74%, 62%)",
  Study: "hsl(348, 100%, 68%)",
  Exercise: "hsl(145, 58%, 55%)",
  Social: "hsl(264, 64%, 52%)",
  Other: "hsl(43, 84%, 65%)",
};
const Messages = {
  daily: "Yesterday - ",
  weekly: "Last Week - ",
  monthly: "Last Month - ",
};

function setColor(title: string): keyof ColorsType {
  if (title === "Self Care") return "Other";
  return title as keyof ColorsType;
}

const algo = "Exerci se";
const Frame: FC<{ timeframe: TimeFrames; preferedView: keyof Views }> = ({
  timeframe,
  preferedView,
}) => {
  return (
    <div
      className={Styles.frameContainer}
      style={{
        backgroundColor: Colors[setColor(timeframe.title)],
      }}
    >
      <img className={Styles.img} src={getImage(timeframe.title)} alt="" />
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
