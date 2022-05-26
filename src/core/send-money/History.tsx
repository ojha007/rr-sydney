import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Spinner } from "reactstrap";
import { dispatchEvent } from "../../actions";

const History = () => {
  const [transactions, setTransactions] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const fetchAllTransaction = async () => {
    setLoading(true);
    let response = await dispatchEvent("TRANSACTION_HISTORY", {});
    setTransactions(response.data);
    setLoading(false);
  };
  useEffect(() => {
    (async () => await fetchAllTransaction())();
  }, []);

  return (
    <div className="box">
      <div className="box-header">Your Transaction History</div>
      <div className="box-body">
        {isLoading ? (
          <div className="text-center">
            <Spinner />
          </div>
        ) : transactions.length ? (
          ""
        ) : (
          <p className="text-center text-bold">
            No Record Found. <br />
            <Link to="/dashboard/send-money">Start Sending Money</Link>
          </p>
        )}
      </div>
      <div className="box-footer"></div>
    </div>
  );
};
export default History;
