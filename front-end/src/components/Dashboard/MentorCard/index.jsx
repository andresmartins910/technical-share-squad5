import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useState } from "react";
import "./styles.css";

export const MentorCard = () => {
  const [favorite, setFavorite] = useState(false);

  const addToFavorites = () => {
    setFavorite((prevState) => !prevState);
  };

  return (
    <div className="mentor-box">
      <div className="heart-icon-box">
        <button onClick={addToFavorites} className="heart-button">
          {favorite === false ? (
            <AiOutlineHeart size={30} color="var(--primary-03)" />
          ) : (
            <AiFillHeart size={30} color="var(--primary-03)" />
          )}
        </button>
      </div>
      <div className="image-box">
        <img
          className="mentor-image"
          src="https://brasilnft.art.br/pytsycky/2021/10/CryptoPunk-95-mi-PNG.png"
          alt=""
        />
      </div>
      <h4 className="mentor-name">John Doe</h4>
      <caption className="mentor-area">UX/UI Designer</caption>
      <button className="mentor-button">Ver perfil</button>
    </div>
  );
};
