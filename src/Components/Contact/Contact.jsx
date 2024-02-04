import css from "./Contact.module.css";
import { FaUser, FaPhoneSquare } from "react-icons/fa";

export const Contact = ({ item }) => {
  return (
    <li className={css.card}>
      <div>
        <div className={css.userWrap}>
          <FaUser className={css.icon} />
          <p>{item.name}</p>
        </div>
        <div className={css.userWrap}>
          <FaPhoneSquare className={css.icon} />
          <p>{item.number}</p>
        </div>
      </div>
      <button className={css.dltBtn}>Delete</button>
    </li>
  );
};
