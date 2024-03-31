import { useState, useCallback } from "react";
import Notifications1 from "../SuperviseurNotificationComponents/SuperviseurNotification";
import PortalPopup from "../../Employee/EmployeeNotificationComponents/PortalPopup";
import { useNavigate } from "react-router-dom";
import "./SuperviseurNavBar.css";

const NavBar3 = () => {
  const [isNotificationsOpen, setNotificationsOpen] = useState(false);
  const navigate = useNavigate();

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

  const onAccountIcon1ImageClick = useCallback(() => {
    navigate("/superviseuraccount");
  }, [navigate]);

  return (
    <>
      <header className="navbar7">
        <div className="menubackground7" />
        <div className="accueil-label-wrapper">
          <nav className="accueil-label">
            <div className="accueil-parent1">
              <div className="accueil4">{`Accueil `}</div>
              <img className="present-absence-label" alt="" />
            </div>
            <div className="logout-button">
              <h3 className="demandes-de-cong" onClick={onDemandesDeCongClick}>
                Demandes De Congé
              </h3>
            </div>
            <div className="notification-badge">
              <h3 className="pointage6" onClick={onPointageTextClick}>
                Pointage
              </h3>
            </div>
          </nav>
        </div>
        <div className="sedeconnecter-parent">
          <button className="sedeconnecter1">
            <img
              className="sedeconnecter-item"
              alt=""
              src="/rectangle-123.svg"
            />
            <div className="a10">Se Déconnecter</div>
          </button>
          <div className="save-button">
            <div className="table-container">
              <img
                className="notificationicon-18"
                loading="lazy"
                alt=""
                src="/notificationicon-1@2x.png"
                onClick={openNotifications}
              />
              <img
                className="accounticon-14"
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

export default NavBar3;
