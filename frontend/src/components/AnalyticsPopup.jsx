import React, { useState } from "react";
import axios from "axios";

function AnalyticsPopup({ onApply }) {
  const [organization, setOrganization] = useState("");
  const [afterDate, setAfterDate] = useState("");
  const [beforeDate, setBeforeDate] = useState("");
  const [minAmount, setMinAmount] = useState("");
  const [maxAmount, setMaxAmount] = useState("");
  const [fetchedInvoices, setFetchedInvoices] = useState([]);


  const handleApply = () => {
    const baseUrl = "http://localhost:8383/invoices/filters";
    let endpoint = "";

    const params = {};
    if (
      organization &&
      !(beforeDate && afterDate && minAmount && maxAmount)
    ) {
      endpoint = "/companies";
      params.company = organization;
    } else if (minAmount && maxAmount) {
      endpoint = "/price_range";
      params.min = minAmount;
      params.max = maxAmount;
    } else if (beforeDate && afterDate) {
      endpoint = "/date";
      params.before_date = beforeDate + " 00:00:00.000 ";
      params.after_date = afterDate + " 00:00:00.000 ";
    } else {
      endpoint = "/all";
      params.before_date = beforeDate + " 00:00:00.000 ";
      params.after_date = afterDate + " 00:00:00.000 ";
      params.min = minAmount;
      params.max = maxAmount;
      params.company = organization;
    }

    axios
      .get(baseUrl + endpoint, {
        params: params,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          EcoBillKey: "EcoBillValue"
        },
      })
      .then((response) => {
        console.log(response.data);
        setFetchedInvoices(response.data);
        onApply(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  return (
    <div style={styles.popup}>
      <div style={styles.header}>
        <h2 style={styles.title}>Analytics</h2>
        <p style={styles.subtitle}>
          Please enter some values about what to be shown.
        </p>
      </div>
      <div style={styles.inputs}>
        <div style={styles.inputFrame}>
          <label style={styles.label}>Organization</label>
          <input
            style={styles.input}
            value={organization}
            onChange={(e) => setOrganization(e.target.value)}
            placeholder="Type an organization name"
          />
        </div>
        <div style={styles.inputFrame}>
          <label style={styles.label}>Date</label>
          <div style={styles.dateInputs}>
            <input
              style={styles.input}
              value={beforeDate}
              onChange={(e) => setBeforeDate(e.target.value)}
              placeholder="Before"
            />
            <input
              style={styles.input}
              value={afterDate}
              onChange={(e) => setAfterDate(e.target.value)}
              placeholder="After"
            />
          </div>
        </div>
        <div style={styles.inputFrame}>
          <label style={styles.label}>Amount</label>
          <div style={styles.dateInputs}>
            <input
              style={styles.input}
              value={minAmount}
              onChange={(e) => setMinAmount(e.target.value)}
              placeholder="Min"
            />
            <input
              style={styles.input}
              value={maxAmount}
              onChange={(e) => setMaxAmount(e.target.value)}
              placeholder="Max"
            />
          </div>
        </div>
        <button style={styles.button} onClick={handleApply}>
          Apply
        </button>
      </div>
    </div>
  );
}

export default AnalyticsPopup;

const styles = {
  popup: {
    width: "auto",
    height: "auto",
    borderRadius: "11px",
    backgroundColor: "#F4F4F4",
    display: "flex",
    flexDirection: "column",
    alignItems: "left",
  },
  header: {
    width: "auto",
    height: "auto",
    display: "flex",
    flexDirection: "column",
  },
  title: {
    fontSize: "28px",
    fontFamily: "PoppinsSemiBold",
    color: "#131515",
  },
  subtitle: {
    fontSize: "16px",
    color: "rgba(19, 21, 21, 0.5)",
  },
  inputs: {
    width: "100%",
    height: "auto",
    display: "flex",
    flexDirection: "column",
    gap: "36px",
  },
  inputFrame: {
    width: "100%",
    height: "auto",
    display: "flex",
    flexDirection: "column",
    gap: "5px",
  },
  label: {
    fontSize: "20px",
  },
  input: {
    width: "100%",
    height: "45px",
    padding: "12px",
    borderRadius: "6px",
    border: "1px solid rgba(19, 21, 21, 0.25)",
  },
  dateInputs: {
    display: "flex",
    gap: "36px",
  },
  button: {
    width: "100%",
    height: "45px",
    borderRadius: "9px",
    backgroundColor: "#34846F",
    color: "white",
    fontSize: "16px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};
