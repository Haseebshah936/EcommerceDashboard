import styled from "styled-components";
import Box from "@mui/material/Box";
import { Button, CircularProgress, TextField } from "@mui/material";
import { useState } from "react";
import { useCustomContext } from "../Hooks/useCustomContext";

export default function Signin() {
  const { setLogin } = useCustomContext();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setTimeout(() => {
  //     setLoading(false);
  //     setError("Username/Email Incorrect");
  //     setTimeout(() => {
  //       //Login Logic
  //       setLogin(true);
  //     }, 1000);
  //   }, 1000);
  // };

  return (
    <Box
      sx={{
        flex: 1,
        height: "100vh",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        paddingTop: "3rem",
      }}
    >
      <Intro>E Commerce Account Portal</Intro>

      <Box
        sx={{
          display: "flex",
          minWidth: "40%",
          flexDirection: "column",
          marginTop: "5rem",
          alignItems: "center",
          backgroundColor: "white",
          borderRadius: " 0.8rem",
          padding: "2rem",
          paddingBottom: "5rem",
          boxShadow: "1px 2px .5rem  #bdbdbd",
        }}
      >
        <Heading>Sign In</Heading>
        <Box>
          <Text>Enter your email and password to Sign In</Text>
          <Form onSubmit={(e) => {
            e.preventDefault();
            setTimeout(() => {
              setLoading(false);
              setError("Username/Email Incorrect");
              setTimeout(() => {
                //Login Logic
                setLogin(true);
              }, 1000);
            }, 1000);
          }}>
            <TextField
              id="standard-basic"
              label="Email"
              variant="standard"
              fullWidth
              value={email}
              type={"email"}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              id="standard-basic"
              label="Password"
              variant="standard"
              fullWidth
              sx={{
                marginTop: "1.2rem",
                marginBottom: "2rem",
              }}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              variant="contained"
              color="success"
              fullWidth
              onClick={() => setLoading(!loading)}
              disableTouchRipple
              type="submit"
            >
              {loading ? (
                <CircularProgress
                  color="inherit"
                  sx={{ marginBlock: ".5rem" }}
                  size={20}
                />
              ) : (
                "SIGN IN"
              )}
            </Button>
          </Form>
          {error && <Error>{error}</Error>}
        </Box>
      </Box>
    </Box>
  );
}

const Intro = styled.h1`
  font-size: 1.2rem;
  font-weight: 400;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-inline: 1rem;
`;

const Heading = styled.h1`
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  color: #344767;
  font-size: 1.2rem;
  line-height: 2rem;
`;

const Text = styled.p`
  font-family: "Roboto", sans-serif;
  font-size: 1rem;
  color: grey;
  font-weight: 400;
  margin-bottom: 1rem;
`;
const Error = styled.p`
  color: red;
  font-size: 1rem;
  font-family: "Roboto", sans-serif;
  padding-inline: 1rem;
  margin-block: 1rem;
  font-weight: 700;
`;
