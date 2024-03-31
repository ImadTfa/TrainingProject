import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./ForgotPasswordComponent.css";

const FrameComponent1 = () => {
  const navigate = useNavigate();

  const onBackButtonImageClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="centerbackground-parent4">
      <div className="centerbackground9" />
      <div className="forgot-password-container">
        <h1 className="forgot-password1">Forgot Password?</h1>
      </div>
      <div className="f-r-a-m-e-r-o-o-t">
        <div className="email-wrapper1">
          <h3 className="email3">Email</h3>
        </div>
        <div className="email-input">
          <div className="email-input1">
            <div className="email-icon-1-parent">
              <img className="email-icon-1" alt="" src="/emailicon-1@2x.png" />
              <input
                className="frame-child15"
                name="Email"
                id="Email"
                placeholder="Type your email"
                type="email"
              />
            </div>
          </div>
          <div className="back-button" />
        </div>
      </div>
      <div className="title-forgot-pass-parent">
        <div className="title-forgot-pass">
          <h3 className="message">Message</h3>
        </div>
        <div className="send-button-wrapper">
          <div className="send-button">
            <img
              className="messageicon-1"
              loading="lazy"
              alt=""
              src="/messageicon-1@2x.png"
            />
            <input
              className="write-a-message"
              name="Message"
              id="Message"
              placeholder="Write a message to an admin "
              type="text"
            />
          </div>
        </div>
        <div className="frame-child16" />
      </div>
      <div className="frame-wrapper10">
        <div className="frame-parent34">
          <div className="frame-wrapper11">
            <div className="back-button-parent">
              <div className="back-button1">
                <img
                  className="backbutton-icon"
                  loading="lazy"
                  alt=""
                  src="/backbutton@2x.png"
                  onClick={onBackButtonImageClick}
                />
              </div>
              <button className="buttonsend-parent">
                <div className="buttonsend" />
                <div className="send">SEND</div>
              </button>
            </div>
          </div>
          <i className="wait-for-a">*Wait for a response from the admin*</i>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent1;
