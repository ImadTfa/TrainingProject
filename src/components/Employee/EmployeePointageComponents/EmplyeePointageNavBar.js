import { useState, useCallback } from "react";
import Notifications from "../EmployeeNotificationComponents/EmployeeNotification";
import PortalPopup from "../EmployeeNotificationComponents/PortalPopup";
import { useNavigate } from "react-router-dom";
import "./EmplyeePointageNavBar.css";

const NavBar1 = () => {
  const [isNotificationsOpen, setNotificationsOpen] = useState(false);
  const navigate = useNavigate();

  const onAccueilTextClick = useCallback(() => {
    navigate("/employeeacceuil");
  }, [navigate]);

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
      <header className="navbar4">
        <div className="menubackground3" />
        <div className="navbar-inner1">
          <div className="accueil-group">
            <div
              className="accueil1"
              onClick={onAccueilTextClick}
            >{`Accueil `}</div>
            <div className="frame-parent35">
              <div className="pointage-wrapper">
                <div className="pointage3" onClick={onPointageTextClick}>
                  Pointage
                </div>
              </div>
              <div className="frame-child17" />
            </div>
            <div className="cong1" onClick={onCongTextClick}>
              Congé
            </div>
          </div>
        </div>
        <div className="buttonsedeconnecter-group">
          <button className="buttonsedeconnecter4">
            <img
              className="buttonsedeconnecter-child1"
              alt=""
              src="/rectangle-123.svg"
            />
            <div className="a4">Se Déconnecter</div>
          </button>
          <div className="frame-wrapper12">
            <div className="notificationicon-1-group">
              <img
                className="notificationicon-14"
                loading="lazy"
                alt=""
                src="/notificationicon-1@2x.png"
                onClick={openNotifications}
              />
              <img
                className="accounticon-11"
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

export default NavBar1;
