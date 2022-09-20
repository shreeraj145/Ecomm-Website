import React from "react";
import { Alert } from "react-bootstrap";

const Message = ({ variant, err }) => {
  return <Alert variant={variant}>{err}</Alert>;
};

Message.defaultProps = {
  variant: "info",
};

export default Message;
