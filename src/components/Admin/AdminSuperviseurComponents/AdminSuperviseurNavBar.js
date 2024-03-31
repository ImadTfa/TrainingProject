import { useState, useCallback } from "react";
import Notifications1 from "../../Superviseur/SuperviseurNotificationComponents/SuperviseurNotification";
import PortalPopup from "../../Employee/EmployeeNotificationComponents/PortalPopup";
import { useNavigate } from "react-router-dom";
import "./AdminSuperviseurNavBar.css";

const NavBar7 = () => {
  const [isNotificationsOpen, setNotificationsOpen] = useState(false);
  const navigate = useNavigate();

  const onEmployeTextClick = useCallback(() => {
    navigate("/adminemployee");
  }, [navigate]);

  const onAjouterTextClick = useCallback(() => {
    navigate("/adminajouter");
  }, [navigate]);

  const openNotifications = useCallback(() => {
    setNotificationsOpen(true);
  }, []);

  const closeNotifications = useCallback(() => {
    setNotificationsOpen(false);
  }, []);

  return (
    <>
      <header className="navbar11">
        <div className="menubackground11" />
        <div className="menu-background">
          <div className="employe-parent">
            <div className="employe5" onClick={onEmployeTextClick}>
              Employée
            </div>
            <div className="superviseur-group">
              <div className="superviseur5">Superviseur</div>
              <div className="frame-child21" />
            </div>
            <div className="ajouter5" onClick={onAjouterTextClick}>
              Ajouter
            </div>
          </div>
        </div>
        <div className="logout-button1">
          <div className="notification-area">
            <img
              className="notificationicon-112"
              loading="lazy"
              alt=""
              src="/notificationicon-1@2x.png"
              onClick={openNotifications}
            />
          </div>
          <button className="buttonsedeconnecter7">
            <img
              className="buttonsedeconnecter-child4"
              alt=""
              src="/rectangle-19.svg"
            />
            <div className="a14">Se Déconnecter</div>
          </button>
        </div>
      </header>
      {isNotificationsOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeNotifications}
        >
          <Notifications1 onClose={closeNotifications} />
        </PortalPopup>
      )}
    </>
  );
};

export default NavBar7;
