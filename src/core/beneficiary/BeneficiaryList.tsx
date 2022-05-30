import { useEffect, useState } from "react";
import { PencilSquare, Plus, Trash3 } from "react-bootstrap-icons";
import { Button, Col, Table } from "reactstrap";
import { dispatchEvent } from "../../actions";
import { NoRecordFoundTR, OnLoadingTr } from "../../components/NoRecordFound";
import {
  BeneficiaryPayload,
  initialValues,
} from "../../schema/beneficiary.schema";
import BeneficiaryForm from "./BeneficiaryForm";

const BeneficiaryList = () => {
  const [showModal, setShowModal] = useState(false);
  const [beneficiaries, setBeneficiaries] = useState([]);
  const [beneficiary, setBeneficiary] =
    useState<BeneficiaryPayload>(initialValues);
  const [loading, setLoading] = useState(true);
  const handleModalClose = () => setShowModal(false);
  const handleModalShow = () => setShowModal(true);

  useEffect(() => {
    (async () => await fetchAllBeneficiaries())();
  }, []);

  const fetchAllBeneficiaries = async () => {
    setLoading(true);
    let response = await dispatchEvent("BENEFICIARY_LIST");
    setBeneficiaries(response.data);
    setLoading(false);
  };

  const handleOnEdit = async (id: string) => {
    handleModalShow();
    let response = await dispatchEvent("BENEFICIARY_VIEW", {}, { id });
    let data = response.data as BeneficiaryPayload;
    setBeneficiary(data);
  };

  const handleOnDelete = async (id: string) => {
    alert("Are you sure You want to delete this record?");
    if (true) {
      await dispatchEvent("BENEFICIARY_DELETE", {}, { id });
      await fetchAllBeneficiaries();
    }
  };

  // 9845816966;
  return (
    <div className="beneficiary-screen box">
      <BeneficiaryForm
        isOpen={showModal}
        handleClose={handleModalClose}
        beneficiary={beneficiary}
        saveText={beneficiary.id ? "Update" : "Create"}
        fetchAllBeneficiaries={fetchAllBeneficiaries}
      />
      <Col className="my-3 d-flex justify-content-end">
        <Button
          title="Add Beneficiary"
          className="btn-sm btn-primary pull-right"
          onClick={() => {
            handleModalShow();
            setBeneficiary(initialValues);
          }}
        >
          <Plus className="bi me-1" />
          Add Beneficiary
        </Button>
      </Col>
      <Table hover responsive borderless striped>
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Relation</th>
            <th>#</th>
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <OnLoadingTr colSpan={5} />
          ) : beneficiaries.length ? (
            beneficiaries.map((item: any, index: number) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>
                  {item.state}, {item.district}
                </td>
                <td>{item.phone}</td>
                <td>{item.relationship}</td>
                <td>
                  <PencilSquare
                    onClick={() => handleOnEdit(item.id)}
                    className="bi me-2 cursor-pointer"
                    width={"1.3em"}
                    height={"1.2em"}
                  />
                  <Trash3
                    onClick={() => handleOnDelete(item.id)}
                    className="bi bi-2 me-2 cursor-pointer"
                    width={"1.3em"}
                    height={"1.2em"}
                  />
                </td>
              </tr>
            ))
          ) : (
            <NoRecordFoundTR colSpan={5} />
          )}
        </tbody>
      </Table>
    </div>
  );
};
export default BeneficiaryList;
