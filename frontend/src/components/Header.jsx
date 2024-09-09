import React, { useState } from "react";
import AccountEdit from "./AccountEdit";
import { useNavigate } from "react-router";
import Modal from "react-modal";

const Header = ({ customerId }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHoveredManage, setIsHoveredManage] = useState(false);
  const [isHoveredLogout, setIsHoveredLogout] = useState(false);
  const [showAccountEdit, setShowAccountEdit] = useState(false);
  const navigate = useNavigate();

  const handleManageClick = () => {
    setShowAccountEdit(true);
    setIsOpen(false);
  };

  const handleLogoutClick = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div style={styles.frame}>
      <div style={styles.header}>
        <div style={styles.search}>
          <img src="images/search.svg" alt="Search" style={styles.searchIcon} />
          <input
            type="text"
            placeholder="Search anything..."
            style={styles.searchArea}
          />
        </div>
        <div style={styles.profile}>
          <img
            src="images/notifications.svg"
            alt="Notifications"
            style={styles.notificationIcon}
          />
          <img
            src="images/profile.png"
            alt="Profile"
            style={styles.profileIcon}
            onClick={() => setIsOpen(!isOpen)}
          />
          {isOpen && (
            <div style={styles.dropdown}>
              <button
                style={isHoveredManage ? styles.menuItemHover : styles.menuItem}
                onMouseEnter={() => setIsHoveredManage(true)}
                onMouseLeave={() => setIsHoveredManage(false)}
                onClick={handleManageClick}
              >
                Manage
              </button>
              <button
                style={
                  isHoveredLogout
                    ? styles.menuItemLogoutHover
                    : styles.menuItemLogout
                }
                onMouseEnter={() => setIsHoveredLogout(true)}
                onMouseLeave={() => setIsHoveredLogout(false)}
                onClick={handleLogoutClick}
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
      <Modal
        isOpen={showAccountEdit}
        onRequestClose={() => setShowAccountEdit(false)}
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          },
          content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "#F4F4F4",
            borderRadius: "11px",
            width: "475px",
            padding: "32px",
          },
        }}
      >
        <AccountEdit customerId={customerId} />
      </Modal>
    </div>
  );
};

export default Header;

// Styles
const styles = {
  frame: {
    width: "100%",
    height: "fill",
    gap: "36px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "15px 0",
  },
  header: {
    width: "100%",
    height: "95px",
    padding: "15px 0",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    "@media (max-width: 768px)": {
      flexDirection: "column",
    },
  },
  search: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    padding: "15px 0",
  },
  searchIcon: {
    width: "25px",
    height: "25px",
  },
  searchArea: {
    backgroundColor: "transparent",
    color: "#131515",
    width: "100%",
  },
  profile: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    gap: "25px",
    justifyContent: "flex-end",
  },
  notificationIcon: {
    width: "25px",
    height: "25px",
  },
  profileIcon: {
    width: "55px",
    height: "55px",
  },
  dropdown: {
    position: "absolute",
    top: "110%",
    width: "12rem",
    right: "0",
    borderRadius: "0.375rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: "8px",
    backgroundColor: "#FBFBFB",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    boxShadow: "0 0 0 1px #34846F",
  },
  menuItem: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    gap: "12px",
    padding: "0.5rem 1rem",
    fontSize: "0.875rem",
    color: "#131515",
    borderRadius: "5px",
  },
  menuItemHover: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    gap: "12px",
    padding: "0.5rem 1rem",
    fontSize: "0.875rem",
    color: "rgba(19, 21, 21, 0.75)",
    backgroundColor: "#F5F5F5",
    borderRadius: "5px",
  },
  menuItemLogout: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    gap: "12px",
    padding: "0.5rem 1rem",
    fontSize: "0.875rem",
    color: "#DC2626",
    borderRadius: "5px",
  },
  menuItemLogoutHover: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    gap: "12px",
    padding: "0.5rem 1rem",
    fontSize: "0.875rem",
    color: "#FFFFFF",
    backgroundColor: "#DC2626",
    borderRadius: "5px",
  },
};
