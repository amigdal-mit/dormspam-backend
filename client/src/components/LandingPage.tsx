import React from "react";
import { Container, Button } from "reactstrap";
import useLogin from "../hooks/useLogin";

const LandingPage = () => {
  const { redirectToDopeAuth } = useLogin();
  return (
    <Container>
      <h1>to.mit.edu/events</h1>

      <Button onClick={() => redirectToDopeAuth()} color="primary">
        Login with DopeAuth
      </Button>
    </Container>
  );
};

export default LandingPage;
