import { FC, useState } from "react";
import { Views } from "../../types/types";
import Styles from "./Profile.module.scss";

const options = ["Daily", "Weekly", "Monthly"];

const ProfileCard: FC<{ setPreferedView: (value: keyof Views) => void }> = ({
  setPreferedView,
}) => {
  const [selected, setSelected] = useState("Daily");
  return (
    <div className={Styles.card}>
      <header className={Styles.header}>
        <div className={Styles.insideContainer}>
          <img
            className={Styles.profileImage}
            src="./profile.png"
            alt="profile image"
          />
          <div className={Styles.sideContainer}>
            <span className={Styles.tag}>Reporter for</span>
            <span className={Styles.profileName}>Jeremy Robson</span>
          </div>
        </div>
      </header>
      <div className={Styles.optionsContainer}>
        {options.map((option) => {
          return (
            <span
              key={option}
              style={{
                color: selected === option ? "#fff" : "hsl(235, 45%, 61%)",
              }}
              onClick={() => {
                setSelected(option);
                setPreferedView(option.toLocaleLowerCase() as keyof Views);
              }}
            >
              {option}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default ProfileCard;
