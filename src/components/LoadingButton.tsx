import { FC } from "react";
import { Button as RButton, ButtonProps, Spinner } from "reactstrap";

interface IProps extends ButtonProps {
  loading: number;
  text: string;
}

const Button: FC<IProps> = (props) => {
  return (
    <>
      <RButton {...props}>
        {props.loading ? <Spinner size="sm" /> : props.text}
      </RButton>
    </>
  );
};

export default Button;
