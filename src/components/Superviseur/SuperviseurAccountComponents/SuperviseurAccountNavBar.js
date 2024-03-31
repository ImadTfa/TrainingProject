import { useState, useCallback } from "react";
import Notifications1 from "../SuperviseurNotificationComponents/SuperviseurNotification";
import PortalPopup from "../../Employee/EmployeeNotificationComponents/PortalPopup";
import { useNavigate } from "react-router-dom";
import "./SuperviseurAccountNavBar.css";

const NavBar6 = () => {
  const [isNotificationsOpen, setNotificationsOpen] = useState(false);
  const navigate = useNavigate();

  const onAccueilTextClick = useCallback(() => {
    navigate("/superviseuracceuil");
  }, [navigate]);

  const onDemandesDeCongClick = useCallback(() => {
    navigate("/superviseurdemandesconge");
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

  return (
    <>
      <header className="navbar10">
        <div className="menubackground10" />
        <div className="navbar-inner4">
          <div className="accueil-parent3">
            <div
              className="accueil7"
              onClick={onAccueilTextClick}
            >{`Accueil `}</div>
            <div className="demandes-de-cong-wrapper">
              <div
                className="demandes-de-cong4"
                onClick={onDemandesDeCongClick}
              >
                Demandes De Congé
              </div>
            </div>
            <div className="pointage10" onClick={onPointageTextClick}>
              Pointage
            </div>
          </div>
        </div>
        <div className="notification-dot-parent">
          <div className="notification-dot">
            <button className="sedeconnecter4">
              <img
                className="sedeconnecter-child2"
                alt=""
                src="/rectangle-123.svg"
              />
              <div className="a13">Se Déconnecter</div>
            </button>
          </div>
          <div className="imadmodified-background">
            <img
              className="notificationicon-111"
              loading="lazy"
              alt=""
              src="/notificationicon-1@2x.png"
              onClick={openNotifications}
            />
            <div className="name-and-id-container">
              <div className="name-and-id-container-child" />
              <img
                className="accounticon-17"
                loading="lazy"
                alt=""
                src="/accounticon-1@2x.png"
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

export default NavBar6;
