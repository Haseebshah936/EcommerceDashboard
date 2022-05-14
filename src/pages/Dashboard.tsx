import { Box } from "@mui/system";
import styled from "styled-components";
import ResponsiveDrawer from "../components/ResponsiveDrawer";

export default function Dashboard() {
  return (
    <Box
      sx={{
        flex: 1,
        height: "100vh",
        display: "flex",
        paddingTop: "2.5rem",
      }}
    >
      <ResponsiveDrawer type="dashboard" />
      <div
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Intro>Dashboard</Intro>
      </div>
    </Box>
  );
}

const Intro = styled.h1`
  font-size: 1.2rem;
  font-weight: 400;
`;
