import { useState, useCallback } from "react";
import Notifications1 from "../SuperviseurNotificationComponents/SuperviseurNotification";
import PortalPopup from "../../Employee/EmployeeNotificationComponents/PortalPopup";
import { useNavigate } from "react-router-dom";
import "./SuperviseurDemandesCongeNavBar.css";

const NavBar4 = () => {
  const [isNotificationsOpen, setNotificationsOpen] = useState(false);
  const navigate = useNavigate();

  const onAccueilTextClick = useCallback(() => {
    navigate("/superviseuracceuil");
  }, [navigate]);

  const onPointageTextClick = useCallback(() => {
    navigate("/superviseurpointage");
  }, [navigate]);

  const openNotifications = useCallback(() => {
    setNotificationsOpen(true);
  }, []);

  const closeNotifications = useCallback(() => {
    setNotificationsOpen(false);
  }, []);

  const onAccountIcon1ImageClick = useCallback(() => {
    navigate("/superviseuraccount");
  }, [navigate]);

  return (
    <>
      <header className="navbar8">
        <div className="menubackground8" />
        <div className="navbar-inner3">
          <div className="accueil-parent2">
            <div
              className="accueil5"
              onClick={onAccueilTextClick}
            >{`Accueil `}</div>
            <div className="demandes-de-cong-parent">
              <div className="demandes-de-cong1">Demandes De Congé</div>
              <div className="se-deconnecter" />
            </div>
            <div className="center-background1">
              <div className="pointage7" onClick={onPointageTextClick}>
                Pointage
              </div>
            </div>
          </div>
        </div>
        <div className="notification-icon-account-icon">
          <button className="sedeconnecter2">
            <img
              className="sedeconnecter-inner"
              alt=""
              src="/rectangle-123.svg"
            />
            <div className="a11">Se Déconnecter</div>
          </button>
          <div className="button-response">
            <div className="notificationicon-1-parent3">
              <img
                className="notificationicon-19"
                loading="lazy"
                alt=""
                src="/notificationicon-1@2x.png"
                onClick={openNotifications}
              />
              <img
                className="accounticon-15"
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
          <Notifications1 onClose={closeNotifications} />
        </PortalPopup>
      )}
    </>
  );
};

export default NavBar4;
