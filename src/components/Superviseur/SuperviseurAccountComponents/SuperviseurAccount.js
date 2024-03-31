import { useMemo } from "react";
import "./SuperviseurAccount.css";

const FrameComponent10 = ({
  nom,
  imad,
  propGap,
  propWidth,
  propMinWidth,
  propMixBlendMode,
}) => {
  const frameDiv1Style = useMemo(() => {
    return {
      gap: propGap,
    };
  }, [propGap]);

  const nom1Style = useMemo(() => {
    return {
      width: propWidth,
      minWidth: propMinWidth,
      mixBlendMode: propMixBlendMode,
    };
  }, [propWidth, propMinWidth, propMixBlendMode]);

  return (
    <div className="frame-wrapper28">
      <div className="nom-parent1" style={frameDiv1Style}>
        <div className="nom8" style={nom1Style}>
          {nom}
        </div>
        <div className="nom-background-nickname-wrapper">
          <div className="nom-background-nickname">
            <img
              className="nombackground-icon3"
              alt=""
              src="/idbackground.svg"
            />
            <i className="imad1">{imad}</i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent10;
