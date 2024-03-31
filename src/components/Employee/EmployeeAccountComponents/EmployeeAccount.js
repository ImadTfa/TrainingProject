import { useMemo } from "react";
import "./EmployeeAccount.css";

const FrameComponent3 = ({
  nom,
  propPadding,
  propGap,
  propWidth,
  propMinWidth,
  propMixBlendMode,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const nomBackgroundPrenomBackgrouStyle = useMemo(() => {
    return {
      gap: propGap,
    };
  }, [propGap]);

  const nomStyle = useMemo(() => {
    return {
      width: propWidth,
      minWidth: propMinWidth,
      mixBlendMode: propMixBlendMode,
    };
  }, [propWidth, propMinWidth, propMixBlendMode]);

  return (
    <div
      className="nom-background-prenom-backgrou-wrapper"
      style={frameDivStyle}
    >
      <div
        className="nom-background-prenom-backgrou"
        style={nomBackgroundPrenomBackgrouStyle}
      >
        <div className="nom5" style={nomStyle}>
          {nom}
        </div>
        <div className="nom-prnom-wrapper">
          <div className="nom-prnom">
            <img
              className="nombackground-icon2"
              alt=""
              src="/idbackground.svg"
            />
            <i className="none4">None</i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent3;
