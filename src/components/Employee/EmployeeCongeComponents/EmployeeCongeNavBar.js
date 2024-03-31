import { useState, useCallback } from "react";
import Notifications from "../EmployeeNotificationComponents/EmployeeNotification";
import PortalPopup from "../EmployeeNotificationComponents/PortalPopup";
import { useNavigate } from "react-router-dom";
import "./EmployeeCongeNavBar.css";

const NavBar = () => {
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
      <header className="navbar5">
        <div className="menubackground4" />
        <div className="f-r-a-m-e-a">
          <div className="accueil-pointage">
            <div
              className="accueil2"
              onClick={onAccueilTextClick}
            >{`Accueil `}</div>
            <div className="pointage4" onClick={onPointageTextClick}>
              Pointage
            </div>
            <div className="account-icon">
              <div className="cong2">
                <div className="cong3" onClick={onCongTextClick}>
                  Congé
                </div>
              </div>
              <div className="account-icon-child" />
            </div>
          </div>
        </div>
        <div className="buttonsedeconnecter-container">
          <button className="buttonsedeconnecter5">
            <img
              className="buttonsedeconnecter-child2"
              alt=""
              src="/rectangle-122.svg"
            />
            <div className="a5">Se Déconnecter</div>
          </button>
          <div className="frame-wrapper14">
            <div className="notificationicon-1-parent1">
              <img
                className="notificationicon-15"
                loading="lazy"
                alt=""
                src="/notificationicon-1@2x.png"
                onClick={openNotifications}
              />
              <img
                className="accounticon-12"
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

export default NavBar;
