import Styles from "./Profile.module.scss";

const ProfileCard = () => {
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
            <span>Reporter for</span>
            <span>Jeremy Tobson</span>
          </div>
        </div>
      </header>
      <div className={Styles.optionsContainer}>
        <span>Daily</span>
        <span>Weekly</span>
        <span>Monthly</span>
      </div>
    </div>
  );
};

export default ProfileCard;
