import "./LoginComponent.css";

const FrameComponent = () => {
  return (
    <div className="centerbackgroudn-parent">
      <div className="centerbackgroudn" />
      <div className="sign-in-wrapper">
        <h1 className="sign-in">Sign In</h1>
      </div>
      <div className="badge-number-label-parent">
        <div className="badge-number-label">
          <div className="badge-number-wrapper">
            <h3 className="badge-number">{`Badge Number `}</h3>
          </div>
          <div className="username-icon-parent">
            <div className="username-icon">
              <div className="username-input-field">
                <div className="usernameicon-1-wrapper">
                  <img
                    className="usernameicon-1"
                    alt=""
                    src="/usernameicon-1@2x.png"
                  />
                </div>
                <input
                  className="type-your-badge"
                  name="Id"
                  id="Id"
                  placeholder="Type your Id"
                  type="text"
                />
              </div>
            </div>
            <div className="frame-child13" />
          </div>
        </div>
        <div className="password-parent">
          <h3 className="password">{`Password `}</h3>
          <div className="forgot-password-link">
            <div className="forgot-password-link-inner">
              <div className="passwordicon-1-parent">
                <img
                  className="passwordicon-11"
                  alt=""
                  src="/passwordicon-1@2x.png"
                />
                <input
                  className="frame-child14"
                  name="Password"
                  id="Password"
                  placeholder="Type your  password "
                  type="text"
                />
              </div>
            </div>
            <div className="forgot-password-link-child" />
          </div>
        </div>
      </div>
      <div className="frame-wrapper8">
        <button className="buttonlogin-parent">
          <div className="buttonlogin" />
          <div className="login">LOGIN</div>
        </button>
      </div>
    </div>
  );
};

export default FrameComponent;
