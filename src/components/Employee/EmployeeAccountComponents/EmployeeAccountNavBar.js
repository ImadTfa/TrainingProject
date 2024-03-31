import { useState, useCallback } from "react";
import Notifications from "../EmployeeNotificationComponents/EmployeeNotification";
import PortalPopup from "../EmployeeNotificationComponents/PortalPopup";
import { useNavigate } from "react-router-dom";
import "./EmployeeAccountNavBar.css";

const NavBar11 = () => {
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
      <header className="navbar6">
        <div className="menubackground6" />
        <nav className="navbar-inner2">
          <nav className="accueil-container">
            <div
              className="accueil3"
              onClick={onAccueilTextClick}
            >{`Accueil `}</div>
            <div className="pointage5" onClick={onPointageTextClick}>
              Pointage
            </div>
            <div className="cong4" onClick={onCongTextClick}>
              Congé
            </div>
          </nav>
        </nav>
        <div className="buttonsedeconnecter-parent1">
          <button className="buttonsedeconnecter6">
            <img
              className="buttonsedeconnecter-child3"
              alt=""
              src="/rectangle-12.svg"
            />
            <div className="a9">Se Déconnecter</div>
          </button>
          <div className="frame-wrapper19">
            <div className="notificationicon-1-parent2">
              <img
                className="notificationicon-17"
                loading="lazy"
                alt=""
                src="/notificationicon-1@2x.png"
                onClick={openNotifications}
              />
              <div className="accounticon-1-parent">
                <img
                  className="accounticon-13"
                  loading="lazy"
                  alt=""
                  src="/accounticon-1@2x.png"
                  onClick={onAccountIcon1ImageClick}
                />
                <div className="frame-child18" />
              </div>
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

export default NavBar11;
