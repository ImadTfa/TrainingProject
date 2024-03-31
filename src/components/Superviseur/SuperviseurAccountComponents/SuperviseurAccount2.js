import FrameComponent10 from "./SuperviseurAccount";
import "./SuperviseurAccount2.css";

const NomPrnomBackground = () => {
  return (
    <div className="nom-prnom-background">
      <div className="frame-parent51">
        <div className="i-d-field-parent">
          <div className="i-d-field">
            <div className="name-container">
              <div className="wrapper1">
                <img
                  className="icon1"
                  loading="lazy"
                  alt=""
                  src="/1077114-1@2x.png"
                />
              </div>
              <div className="compte1">Compte</div>
            </div>
            <label className="id3" htmlFor="Id">
              Id
            </label>
          </div>
          <div className="frame-wrapper29">
            <div className="idbackground-parent">
              <img
                className="idbackground-icon1"
                alt=""
                src="/idbackground.svg"
              />
              <input
                className="ay"
                name="Id"
                id="Id"
                value="None"
                placeholder="AY*****"
                type="text"
                disabled
              />
            </div>
          </div>
        </div>
        <FrameComponent10 nom="Nom" imad="Imad" />
        <FrameComponent10
          nom="Prénom"
          imad="Taki"
          propGap="21px"
          propWidth="127px"
          propMinWidth="127px"
          propMixBlendMode="normal"
        />
        <div className="new-password-field">
          <div className="nouveau-mot-de1">Nouveau mot de passe</div>
        </div>
        <div className="m-p-background-color">
          <div className="test-test-container">
            <img
              className="mpbackground-icon1"
              loading="lazy"
              alt=""
              src="/idbackground.svg"
            />
            <div className="testtest">TESTTEST</div>
          </div>
        </div>
      </div>
      <div className="submit-button">
        <div className="cancel-button">
          <div className="passwordicon-1-wrapper">
            <img
              className="passwordicon-12"
              loading="lazy"
              alt=""
              src="/passwordicon-11@2x.png"
            />
          </div>
          <div className="password-icon-container">
            <img
              className="passwordicon-31"
              loading="lazy"
              alt=""
              src="/passwordicon-11@2x.png"
            />
          </div>
          <img
            className="passwordicon-21"
            loading="lazy"
            alt=""
            src="/passwordicon-11@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

export default NomPrnomBackground;
