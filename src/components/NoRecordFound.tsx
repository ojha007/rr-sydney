import { Spinner } from "reactstrap";
import { NoRecordFoundRow, OnLoadingRow } from "../interfaces/common";

const NoRecordFoundTR = (props: NoRecordFoundRow) => {
  return (
    <tr>
      <td
        colSpan={props.colSpan ? props.colSpan : 1}
        className="text-center text-bold"
      >
        No Record Found
      </td>
    </tr>
  );
};

const OnLoadingTr = (props: OnLoadingRow) => {
  return (
    <tr>
      <td
        colSpan={props.colSpan}
        className="text-center"
        style={{ padding: "10px" }}
      >
        <Spinner className="text-center" />
      </td>
    </tr>
  );
};

export { NoRecordFoundTR, OnLoadingTr };
