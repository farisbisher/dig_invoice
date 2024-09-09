import React, { useState } from "react";
import Modal from "react-modal";
import AnalyticsPopup from "./AnalyticsPopup";
import { useNavigate } from "react-router";

export default function Sidebar({ onApplyAnalytics }) {
  const [showAnalytics, setShowAnalytics] = useState(false);
  const [analyticsData, setAnalyticsData] = useState(null);
  const navigate = useNavigate();

  const handleApplyAnalytics = (data) => {
    setAnalyticsData(data);
    onApplyAnalytics(data);
    setShowAnalytics(false);
  };

  return (
    <div style={styles.sidebar}>
      <div style={styles.logoFrame}>
        <img src="images/logo.svg" alt="Logo" style={styles.logo} />
      </div>
      <div style={styles.separator} />
      <div style={styles.links}>
        <img
          src="images/home.svg"
          alt="Home"
          style={styles.icon}
          onClick={() => navigate("/")}
        />
        <img
          src="images/analytics.svg"
          alt="Analytics"
          style={styles.icon}
          onClick={() => setShowAnalytics(true)}
        />
      </div>
      <div style={styles.supportIconContainer}>
        <img src="images/support.svg" alt="Support" style={styles.icon} />
      </div>

      <Modal
        isOpen={showAnalytics}
        onRequestClose={() => setShowAnalytics(false)}
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
        <AnalyticsPopup onApply={handleApplyAnalytics} />
      </Modal>
    </div>
  );
}

const styles = {
  sidebar: {
    position: "sticky",
    top: "10%",
    left: 0,
    height: "80vh",
    width: "100px",
    padding: "10px",
    backgroundColor: "transparent",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    borderRadius: "12px",
    zIndex: 1000,
  },
  logoFrame: {
    width: "75px",
    height: "75px",
    paddingTop: "30px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: "55px",
    height: "55px",
  },
  separator: {
    width: "26px",
    height: "5px",
    borderRadius: "17px",
    backgroundColor: "grey",
    margin: "20px 0",
  },
  links: {
    flex: 1,
    gap: "40px",
    paddingTop: "30px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  icon: {
    height: "35px",
    width: "35px",
    cursor: "pointer",
  },
  supportIconContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    paddingBottom: "20px",
  },
};
