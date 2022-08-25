import { FC } from "react";
import { TimeFrames } from "../../types/types";
import Styles from "./Home.module.scss";
import ProfileCard from "../../components/profile";

export const Home: FC<{ timeframes: TimeFrames[] }> = ({ timeframes }) => {
  return (
    <div className={Styles.container}>
      <ProfileCard />;
    </div>
  );
};
