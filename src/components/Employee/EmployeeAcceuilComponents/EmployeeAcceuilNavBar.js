import { useState, useCallback } from "react";
import Notifications from "../EmployeeNotificationComponents/EmployeeNotification";
import PortalPopup from "../EmployeeNotificationComponents/PortalPopup";
import { useNavigate } from "react-router-dom";
import "./EmployeeAcceuilNavBar.css";

const NavBar2 = () => {
  const [isNotificationsOpen, setNotificationsOpen] = useState(false);
  const navigate = useNavigate();

  const onPointageTextClick = useCallback(() => {
    navigate("/employeepointage");
  }, [navigate]);

  const onCongTextClick = useCallback(() => {
    navigate("/employeeconge");
  }, [navigate]);

  const openNotifications = useCallback(() => {
    setNotificationsOpen(true);
  }, []);

  const closeNotifications = useCallback(() => {
    setNotificationsOpen(false);
  }, []);

  const onAccountIcon1ImageClick = useCallback(() => {
    navigate("/employeeaccount");
  }, [navigate]);

  return (
    <>
      <header className="navbar3">
        <div className="menubackground2" />
        <div className="navbar-child">
          <div className="frame-parent30">
            <div className="accueil-parent">
              <div className="accueil">{`Accueil `}</div>
              <div className="exit-label" />
            </div>
            <div className="pointage2" onClick={onPointageTextClick}>
              Pointage
            </div>
            <div className="cong" onClick={onCongTextClick}>
              Congé
            </div>
          </div>
        </div>
        <div className="buttonsedeconnecter-parent">
          <button className="buttonsedeconnecter3">
            <img className="rectangle-icon" alt="" src="/rectangle-121.svg" />
            <div className="a3">Se Déconnecter</div>
          </button>
          <div className="frame-wrapper9">
            <div className="notificationicon-1-parent">
              <img
                className="notificationicon-13"
                loading="lazy"
                alt=""
                src="/notificationicon-1@2x.png"
                onClick={openNotifications}
              />
              <img
                className="accounticon-1"
                loading="lazy"
                alt=""
                src="/accounticon-1@2x.png"
                onClick={onAccountIcon1ImageClick}
              />
            </div>
          </div>
        </div>
      </header>
      {isNotificationsOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeNotifications}
        >
          <Notifications onClose={closeNotifications} />
        </PortalPopup>
      )}
    </>
  );
};

export default NavBar2;
