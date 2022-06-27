import React, { RefObject, useRef } from "react";
import { ArrowRight } from "react-bootstrap-icons";
import { useNavigate, useLocation } from "react-router";
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
import { dispatchEvent } from "../../actions";
import AuthHeaderLogo from "../../components/AuthHeaderLogo";
import { LoggedInUser } from "../../interfaces/User";
import { ForgetPasswordOtpPayload } from "../../schema/auth.schema";
import TokenService from "../../services/TokenService";

export default function Otp() {
  let location = useLocation();
  let navigate = useNavigate();
  const [refs, setRefs] = React.useState<RefObject<HTMLInputElement>[]>([]);
  const [otp, setOtp] = React.useState<any>([]);
  const submitButton = useRef<any>(null);
  const [selectedInputId, setSelectedInputId] = React.useState(0);

  const onKeydown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (
      e.key === "Backspace" &&
      selectedInputId > 0 &&
      otp[selectedInputId] === ""
    ) {
      let updatedOtp = [...otp];
      updatedOtp[selectedInputId - 1] = "";
      setSelectedInputId(selectedInputId - 1);
      setOtp(updatedOtp);
    }
  };

  React.useEffect(() => {
    let inputRefs: RefObject<HTMLInputElement>[] = [...new Array(5)].map(() =>
      React.createRef()
    );
    setRefs(inputRefs);
  }, []);

  React.useEffect(() => {
    if (refs.length > 0 && selectedInputId < refs.length) {
      refs[selectedInputId].current?.focus();
    }
  }, [selectedInputId, refs]);

  // for any input
  const changeHandler: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    if (+e.target.value >= 0 && +e.target.value <= 9) {
      let updatedOtp = [...otp];
      updatedOtp[selectedInputId] = e?.target?.value;
      setOtp(updatedOtp);
      if (selectedInputId < refs.length - 1 && e.target.value) {
        setSelectedInputId(selectedInputId + 1);
      }
    }
  };

  const resendOtp = async () => {
    if (location.state)
      await dispatchEvent("F_P_RESEND_OTP", {
        email: location.state as string,
      });
    else await dispatchEvent("RESEND_EMAIL_OTP", {});
  };

  const onFocus: React.FocusEventHandler<HTMLInputElement> = (e) => {
    setSelectedInputId(Number(e.target.id));
  };

  const handleOnSubmit: React.MouseEventHandler<
    HTMLButtonElement
  > = async () => {
    if (otp.length < 5) {
      alert("Invalid otp");
    }
    let OTP = otp.join("");
    if (location.state) {
      let email = location.state as string;
      let payload: ForgetPasswordOtpPayload = {
        otp: OTP,
        email,
      };
      let r = await dispatchEvent("F_P_OTP_VERIFY", payload);
      if (r.success) {
        navigate("/auth/change-password", {
          state: email,
        });
      }
      return;
    }

    let r = await dispatchEvent("EMAIL_OTP_VERIFY", { otp: OTP });
    if (r.success) {
      let user: LoggedInUser = TokenService.getAuthUser();
      user.isEmailVerified = true;
      await TokenService.setAuthUser(user);
      if (user.isKycVerified !== "VERIFIED") navigate("/dashboard/user/kyc");
      if (!user.address) navigate("/dashboard/user/address");
      navigate("/dashboard");
    }
  };

  const pasteHandler: React.ClipboardEventHandler<HTMLInputElement> = (e) => {
    let pasteData = e.clipboardData.getData("text").split("");
    // debugger;

    let updatedOtp = [...otp];
    let tempSelectedInputId = 0;

    pasteData.forEach((char) => {
      if (+char >= 0 && +char <= 9 && tempSelectedInputId < refs.length) {
        updatedOtp[tempSelectedInputId] = char;

        if (!(Number(tempSelectedInputId) === refs.length - 1)) {
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
          <AuthHeaderLogo />
          <Card className="background-snow">
            <CardHeader>
              <CardTitle className="text-center">
                <p className="text-gray-70">OTP</p>
                Code has been sent to your email or mobile no.
              </CardTitle>
            </CardHeader>
            <CardBody>
              <div className="flex-grow-1 py-4">
                <div className="otp-field mb-4">
                  {refs.map((ref: any, index: number) => {
                    return (
                      <input
                        type="number"
                        autoComplete="off"
                        key={index}
                        onPaste={pasteHandler}
                        id={String(index)}
                        onChange={changeHandler}
                        onFocus={onFocus}
                        ref={refs[index]}
                        onKeyDown={onKeydown}
                        value={otp[index]}
                      />
                    );
                  })}
                </div>
                <div className="mt-3">
                  <small className="text-secondary">
                    Didn’t get the code?{" "}
                    <span
                      onClick={resendOtp}
                      className="text-primary"
                      role="button"
                      style={{ cursor: "pointer" }}
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
                  disabled={
                    otp.join("").length !== refs.length && refs.length > 0
                  }
                  className="btn btn-primary btn-icon rft"
                  ref={submitButton}
                  onClick={handleOnSubmit}
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
