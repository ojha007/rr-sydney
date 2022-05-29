import React, { useRef } from "react";
import { ArrowRight } from "react-bootstrap-icons";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardTitle,
  Col,
  Container,
  Row,
} from "reactstrap";

export default function Otp() {
  const [otp, setOtp] = React.useState([]);
  const otpRef = useRef<any>(null);
  const submitButton = useRef<any>(null);
  const [selectedInputId, setSelectedInputId] = React.useState(0);

  const handleKeyUp = (e: any) => {
    let otpInput = otpRef.current.children;
    let currentTarget = e.target;
    if (e.keyCode == 8) {
      let prevInputNode = parseInt(currentTarget.id) - 2;
      if (!(prevInputNode === -1)) {
        otpInput[prevInputNode].focus();
      }
    } else {
      let nextInputNode = +parseInt(currentTarget.id);
      if (nextInputNode === 5) {
        submitButton.current.focus();
      } else {
        otpInput[nextInputNode].focus();
      }
    }
  };
  const pasteHandler: React.ClipboardEventHandler<HTMLInputElement> = (e) => {
    let pasteData = e.clipboardData.getData("text").split("");

    let updatedOtp = [...otp];
    let tempSelectedInputId = 0;

    pasteData.forEach((char) => {
      if (+char >= 0 && +char <= 9 && tempSelectedInputId < otp.length) {
        // updatedOtp[tempSelectedInputId] = char;

        if (!(tempSelectedInputId == otp.length - 1)) {
          tempSelectedInputId++;
        }
      }
    });

    setOtp(updatedOtp);
    setSelectedInputId(tempSelectedInputId);
  };

  return (
    <Container fluid className="auth-screen h-100">
      <Row className="justify-content-center align-items-center h-100">
        <Col md="3">
          <Card className="background-snow">
            <CardHeader>
              <CardTitle className="text-center">
                <p className="text-gray-70">OTP</p>
                Code has been sent to your email or mobile no.
              </CardTitle>
            </CardHeader>
            <CardBody>
              <div className="flex-grow-1 py-4">
                <div className="otp-field mb-4" ref={otpRef}>
                  <input
                    id="1"
                    type="number"
                    onPaste={pasteHandler}
                    required
                    onKeyUp={handleKeyUp}
                  />
                  <input
                    id="2"
                    type="number"
                    required
                    onPaste={pasteHandler}
                    onKeyUp={handleKeyUp}
                  />
                  <input
                    id="3"
                    type="number"
                    required
                    onPaste={pasteHandler}
                    onKeyUp={handleKeyUp}
                  />
                  <input
                    id="4"
                    type="number"
                    required
                    onPaste={pasteHandler}
                    onKeyUp={handleKeyUp}
                  />
                  <input
                    id="5"
                    type="number"
                    required
                    onPaste={pasteHandler}
                    onKeyUp={handleKeyUp}
                  />
                </div>
                <div className="mt-3">
                  <small className="text-secondary">
                    Didn’t get the code?{" "}
                    <span
                      onClick={() => {}}
                      className="text-primary"
                      role="button"
                    >
                      Resend OTP
                    </span>
                  </small>
                </div>
              </div>
            </CardBody>
            <CardFooter>
              <div className="footer text-end">
                <button
                  className="btn btn-primary btn-icon rft"
                  ref={submitButton}
                >
                  Continue {""}
                  <ArrowRight />
                </button>
              </div>
            </CardFooter>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
