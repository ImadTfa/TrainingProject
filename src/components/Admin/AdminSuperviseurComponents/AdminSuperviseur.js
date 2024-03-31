import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./AdminSuperviseur.css";

const FrameComponent11 = () => {
  const navigate = useNavigate();

  const onRectangleClick = useCallback(() => {
    navigate("/adminmodsuperviseur");
  }, [navigate]);
  
  const onModifierTextClick = useCallback(() => {
    navigate("/adminmodsuperviseur");
  }, [navigate]);

  return (
    <div className="alami-mohammed-full-name-wrapper">
      <div className="alami-mohammed-full-name">
        <div className="frame-parent52">
          <div className="homme-soigne-modified-1-parent">
            <img
              className="homme-soigne-modified-1-icon"
              loading="lazy"
              alt=""
              src="/hommesoignemodified-1@2x.png"
            />
            <input
              className="ab588461"
              name="Id"
              id="Id"
              value="None"
              placeholder="AB58846"
              type="text"
              disabled
            />
          </div>
          <div className="alami-wrapper">
            <input
              className="alami1"
              name="Nom"
              id="Nom"
              value="None"
              placeholder="Alami"
              type="text"
              disabled
            />
          </div>
          <div className="mohammed-wrapper">
            <input
              className="mohammed"
              name="Prenom"
              id="Prenom"
              value="None"
              placeholder="Mohammed"
              type="text"
              disabled
            />
          </div>
        </div>
        <div className="wrapper2">
          <input
            className="input18"
            name="NombreEmployee"
            id="NombreEmployee"
            value="None"
            placeholder="1"
            type="text"
            disabled
          />
        </div>
        <div className="buttonmodifier-container">
          <button className="buttonmodifier2">
          <div
                  className="buttonmodifier-child"
                  onClick={onRectangleClick}
                />
                <b
                  className="modifier4"
                  onClick={onModifierTextClick}
                >{`Modifier `}</b>
              </button>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent11;
