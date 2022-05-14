import { Box, Button, CircularProgress, TextField } from "@mui/material";
import { useState } from "react";
import styled from "styled-components";
import ResponsiveDrawer from "../components/ResponsiveDrawer";
import { useCustomContext } from "../Hooks/useCustomContext";

export default function Notification() {
  const { setLogin } = useCustomContext();
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [msg, setMsg] = useState({type: "",
  message: ""
});

// const handleSubmit = (e) => {
//             e.preventDefault();
//             setTimeout(() => {
//               setLoading(false);
//               setMsg({type: "error",
//     message: "Error Sending notification"});
//     // setMsg({type: "success",
//     // message: "Notification sent"});
//               setTimeout(() => {
//                 setLogin(true);
//               }, 1000);
//             }, 1000);
//   };

  return (
    <Box
      sx={{
        flex: 1,
        height: "100vh",
        display: "flex",
        paddingTop: "2.5rem",
      }}
    >
      <ResponsiveDrawer type="notifications" />
      <div
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >

        <Intro>Notifications</Intro>
         <Box
        sx={{
          display: "flex",
          minWidth: "40%",
          flexDirection: "column",
          marginTop: "5rem",
          alignItems: "flex-start",
          backgroundColor: "white",
          borderRadius: " 0.8rem",
          padding: "2rem 8rem 2rem 2rem",
          paddingBottom: "5rem",
          boxShadow: "1px 2px .5rem  #bdbdbd",
        }}
      >
        <Heading>Send Notification</Heading>
        <Box>
          <Form onSubmit={(e) => {
            e.preventDefault();
            setTimeout(() => {
              setLoading(false);
              setMsg({type: "error",
    message: "Error Sending notification"});
    // setMsg({type: "success",
    // message: "Notification sent"});
              setTimeout(() => {
                setLogin(true);
              }, 1000);
            }, 1000);
          }}>
            <TextField
              id="standard-basic"
              label="Title"
              variant="standard"
              fullWidth
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <TextField
              id="standard-basic"
              label="Body"
              variant="standard"
              fullWidth
              sx={{
                marginTop: "1.2rem",
                marginBottom: "2rem",
              }}
              value={body}
              onChange={(e) => setBody(e.target.value)}
            />
            <Button
              variant="contained"
              color="success"
              onClick={() => setLoading(!loading)}
              disableTouchRipple
              type="submit"
              fullWidth
            >
              {loading ? (
                <CircularProgress
                  color="inherit"
                  sx={{ marginBlock: ".5rem", textTransform: 'capitalize' }}
                  size={20}
                />
              ) : (
                "Send Notification"
              )}
            </Button>
          </Form>
          {msg.type && <Error style={{color: msg?.type === 'error' ?'red':'green' }}>{msg?.message}</Error>}
        </Box>
        </Box>
      </div>
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
  width: 100%;
`;

const Heading = styled.h2`
  font-weight: 400;
  color: #344767;
  font-size: 1rem;
  line-height: 2rem;
`;


const Error = styled.p`
  color: red;
  font-size: 1rem;
  font-family: "Roboto", sans-serif;
  padding-inline: 1rem;
  margin-block: 1rem;
  font-weight: 700;
`;
