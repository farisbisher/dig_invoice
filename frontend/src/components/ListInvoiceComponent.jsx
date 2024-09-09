import React, { useEffect, useState } from "react";
import { listInvoices } from "../services/InvoiceService";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ListInvoiceComponent = ({ invoices: propInvoices }) => {
  const [invoices, setInvoices] = useState([]);
  const navigator = useNavigate();

  useEffect(() => {
    if (propInvoices && propInvoices.length > 0) {
      setInvoices(propInvoices);
    } else {
      axios
        .get(
          "http://localhost:8383/invoices/filters/price_range",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
              EcoBillKey: "EcoBillValue"

            },
          }
        )
        .then((response) => {
          setInvoices(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [propInvoices]);


  function seeInvoiceDetails(qrCode) {
    navigator(`/invoice-details/${qrCode}`);
  }

  return (
    <div>
      <h2 className="text-xl mb-4">Transactions</h2>
      <div className="table-container rounded-lg bg-FEFEFA">
        <div className="px-4 py-3">
          <div style={styles.searchIcon} className="flex">
            <img src="images/search.svg" alt="Search" />
            <input type="text" placeholder="Search" />
          </div>
        </div>
        <table className="table-auto w-full border-t border-gray-100">
          <thead>
            <tr>
              <th className="px-4 py-2 tHeadFont" style={{ width: "40%" }}>
                Organization
              </th>
              <th className="px-4 py-2 tHeadFont" style={{ width: "20%" }}>
                Amount
              </th>
              <th className="px-4 py-2 tHeadFont" style={{ width: "20%" }}>
                Date
              </th>
              <th className="px-4 py-2 tHeadFont" style={{ width: "20%" }}>
                Category
              </th>
              <th className="px-4 py-2 tHeadFont" style={{ width: "10%" }}>
                More
              </th>
            </tr>
          </thead>
          <tbody>
            {invoices.map((invoice) => (
              <tr key={invoice.qrCode}>
                <td className="px-4 py-2 flex items-center gap-3 jcc">
                  <div>
                    <img
                      src={invoice.epr.logo}
                      alt="EPR Logo"
                      style={styles.tableLogoImg}
                    />
                  </div>
                  <div className="tablaCNames">
                    <p className="tableSName">{invoice.epr.name}</p>
                    <p className="tableCName">{invoice.epr.fullName}</p>
                  </div>
                </td>
                <td className="px-4 py-2 tableText">
                  {invoice.totalAmountWithVat} SAR
                </td>
                <td className="px-4 py-2 tableText">{invoice.creationDate}</td>
                <td className="px-4 py-2 tableText">{invoice.epr.category}</td>
                <td className="px-4 py-2 tableText">
                  <button
                    onClick={() => seeInvoiceDetails(invoice.qrCode)}
                    className="detailsB"
                  >
                    Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListInvoiceComponent;

const styles = {
  searchIcon: {
    alignItems: "center",
    gap: "12px",
  },

  tableLogoImg: {
    width: "75px",
    height: "75px",
    borderRadius: "10px",
  },
};
