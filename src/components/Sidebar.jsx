import Biking from "../images/sidebar/biking.svg";
import Bodybuilding from "../images/sidebar/bodybuilding.svg";
import Meditation from "../images/sidebar/meditation.svg";
import Swimming from "../images/sidebar/swimming.svg";

export default function Sidebar() {
  return (
    <>
      <aside>
        <div className="sidebar-icon">
          <a href="#">
            <img src={Meditation} alt="meditation" />
          </a>
          <a href="#">
            <img src={Swimming} alt="natation" />
          </a>
          <a href="#">
            <img src={Biking} alt="velo" />
          </a>
          <a href="#">
            <img src={Bodybuilding} alt="Musculation" />
          </a>
        </div>
        <p className="copyright">Copiryght, SportSee 2020</p>
      </aside>
    </>
  );
}
