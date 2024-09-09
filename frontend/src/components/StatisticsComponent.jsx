import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";


const StatisticsComponent = () => {
  const [statistics, setStatistics] = useState([]);
  const numberOfMonths = 3;

  useEffect(() => {
    axios
      .get(
        `http://localhost:8383/invoices/statistics?months=${numberOfMonths}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            EcoBillKey: "EcoBillValue",
          },
        }
      )
      .then((response) => {
        setStatistics(response.data);
      })
      .catch((error) => {
        console.error("Error fetching statistics:", error);
      });
  }, []);

  console.log(statistics);

  return (
    <div className="Stat">
      {statistics ? (
        <div style={styles.frame}>
          <p style={styles.text}>Total Spent This Month</p>
          <p style={styles.bigText} className="bigText familyText">
            {statistics.thisMonthSpendings} <span style={styles.SAR}>SAR</span>
          </p>
          <p style={styles.smallText}>
            <span><b style={styles.red}>▲{statistics.monthlySpendingsDifference}%</b></span> Compared to what you have spent last month.

          </p>
        </div>
      ) : (
        <p>Loading statistics...</p>
      )}
      {statistics ? (
        <div style={styles.frame}>
          <p style={styles.text}>Average Spent For Last 3 Months</p>
          <p style={styles.bigText} className="bigText familyText">
            {statistics.averageSpent} <span style={styles.SAR}>SAR</span>
          </p>
          <p style={styles.smallText}>Use this information to understand your spending patterns and plan your finances better.</p>
        </div>
      ) : (
        <p>Loading statistics...</p>
      )}
      <div style={styles.thirdFrame}>
        {statistics ? (
          <div style={styles.smallFrame}>
            <p style={styles.text}>Last Month Spendings</p>
            <p style={styles.smallNum} className="smallNum familyText">
              {statistics.lastMonthSpendings}{" "}
              <span style={styles.SARsmall}>SAR</span>
            </p>

            <p style={styles.smallText}>Analyze this data to make informed financial decisions.</p>
          </div>
        ) : (
          <p>Loading statistics...</p>
        )}
        {statistics ? (
          <div style={styles.smallFrame}>
            <p style={styles.text}>Your Favorite Organization</p>
            <div style={styles.imgFrame}>
              <img
                src={statistics.mostVisitedCompanyLogo}
                alt="EPR Logo"
                style={styles.image}
              />
              <p style={styles.text}>{statistics.mostVisitedCompany}</p>
            </div>
            <p style={styles.smallText}>Did you know that you're spending the most on a <b>{statistics.mostVisitedCompanyCategory}</b> ?</p>
          </div>
        ) : (
          <p>Loading statistics...</p>
        )}
      </div>
    </div>
  );
};

export default StatisticsComponent;

const styles = {
  frame: {
    width: "100%",
    borderRadius: "12px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "25px",
    backgroundColor: "#FBFBFB",
    padding: "24px",
    marginBottom: "1rem",
  },
  p: {
    margin: "0",
    backgroundColor: "#FBFBFB",
  },
  smallFrame: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FBFBFB",
    borderRadius: "12px",
    padding: "1.5rem",
    gap: "1rem",
  },
  text: {
    width: "100%",
    fontSize: "20px",
    color: "#131515",
  },
  bigText: {
    width: "100%",
    fontSize: "64px",
    fontFamily: "PoppinsSemiBold",
    color: "#131515",
  },
  smallText: {
    width: "100%",
    fontSize: "18px",
    color: "rgba(19, 21, 21, 0.5)",
  },
  thirdFrame: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    gap: "16px",
    marginBottom: "1rem",
  },
  imgFrame: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: "8px",
  },
  image: {
    width: "54px",
    height: "54px",
    borderRadius: "6px",
  },
  smallNum: {
    width: "100%",
    color: "#131515",
    fontFamily: "PoppinsSemiBold",
    fontSize: "30px",
  },
  SAR: {
    fontSize: "32px",
  },
  SARsmall: {
    fontSize: "20px",
  }, red: {
    color: "red",
  },

};
