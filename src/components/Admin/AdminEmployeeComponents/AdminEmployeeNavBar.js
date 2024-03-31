import { useState, useCallback } from "react";
import Notifications1 from "../../Superviseur/SuperviseurNotificationComponents/SuperviseurNotification";
import PortalPopup from "../../Employee/EmployeeNotificationComponents/PortalPopup";
import { useNavigate } from "react-router-dom";
import "./AdminEmployeeNavBar.css";

const FrameComponent9 = () => {
  const [isNotificationsOpen, setNotificationsOpen] = useState(false);
  const navigate = useNavigate();

  const onSuperviseurTextClick = useCallback(() => {
    navigate("/adminsuperviseur");
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
      <header className="menubackground-parent">
        <div className="menubackground5" />
        <div className="supervisor-button-wrapper">
          <div className="supervisor-button">
            <div className="employees-list">
              <div className="single-employee">
                <div className="employe4">Employée</div>
              </div>
              <div className="employees-list-child" />
            </div>
            <div className="superviseur4" onClick={onSuperviseurTextClick}>
              Superviseur
            </div>
            <div className="ajouter4" onClick={onAjouterTextClick}>
              Ajouter
            </div>
          </div>
        </div>
        <div className="frame-parent42">
          <div className="notificationicon-1-frame">
            <img
              className="notificationicon-16"
              loading="lazy"
              alt=""
              src="/notificationicon-1@2x.png"
              onClick={openNotifications}
            />
          </div>
          <button className="sedeconnecter">
            <img
              className="sedeconnecter-child"
              alt=""
              src="/rectangle-122.svg"
            />
            <div className="a8">Se Déconnecter</div>
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

export default FrameComponent9;
