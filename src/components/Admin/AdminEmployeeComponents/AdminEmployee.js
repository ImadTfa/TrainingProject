import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./AdminEmployee.css";

const Table1 = () => {
  const navigate = useNavigate();

  const onRectangleClick = useCallback(() => {
    navigate("/adminmodemployee");
  }, [navigate]);

  const onModifierTextClick = useCallback(() => {
    navigate("/adminmodemployee");
  }, [navigate]);

  return (
    <section className="table1">
      <div className="tablebackground1" />
      <div className="surname-input-parent">
        <div className="surname-input">
          <b className="id2">ID</b>
        </div>
        <div className="name-field">
          <div className="add-btn">
            <b className="nom4">Nom</b>
          </div>
          <b className="prenom4">Prenom</b>
          <b className="snom">S.Nom</b>
        </div>
        <b className="sid">S.Id</b>
        <b className="modifier-informations1">Modifier Informations</b>
      </div>
      <div className="profile-picture-edit-button">
        <div className="profile-picture-edit-button-child" />
        <div className="profile-picture-edit-button-inner">
          <div className="imad-field-parent">
            <div className="imad-field">
              <div className="imad-field-child" />
              <div className="account-name-input-parent">
                <div className="account-name-input">
                  <img
                    className="imad-modified-1-icon4"
                    loading="lazy"
                    alt=""
                    src="/imadmodified-12@2x.png"
                  />
                  <div className="ay19030-wrapper">
                    <input
                      className="ay19030"
                      name="Id"
                      id="Id"
                      value="None"
                      placeholder="AY19030"
                      type="text"
                      disabled
                    />
                  </div>
                </div>
                <div className="imad-wrapper">
                  <input
                    className="imad"
                    name="Nom"
                    id="Nom"
                    value="None"
                    placeholder="Imad"
                    type="text"
                    disabled
                  />
                </div>
              </div>
            </div>
            <div className="button-modifier1">
              <div className="frame-parent43">
                <div className="taki-wrapper">
                  <input
                    className="taki"
                    name="Prenom"
                    id="Prenom"
                    value="None"
                    placeholder="Taki"
                    type="text"
                    disabled
                  />
                </div>
                <input
                  className="alami"
                  name="SupNom"
                  id="SupNom"
                  value="None"
                  placeholder="ALAMI"
                  type="text"
                  disabled
                />
                <input
                  className="ab58846"
                  name="SupId"
                  id="SupId"
                  value="None"
                  placeholder="AB58846"
                  type="text"
                  disabled
                />
              </div>
            </div>
            <div className="setting-modifier-button">
              <button className="buttonmodifier">
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
      </div>
    </section>
  );
};

export default Table1;
