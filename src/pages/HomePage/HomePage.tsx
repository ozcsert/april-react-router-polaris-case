import Navbar from "@components/Navbar/Navbar";
import style from "./HomePage.module.scss";

const HomePage: React.FC = () => {
  return (
    <div className={style.homePage}>
      HomePage
      <Navbar />
    </div>
  );
};

export default HomePage;
