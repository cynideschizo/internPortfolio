import { Box, Typography } from "@mui/material";
import NextjsStarter from "./NextjsStarter";
import FrontendStarter from "./FrontendStarter";
import SeeMore from "./SeeMore";

function CodeSnippet() {
  return (
    <Box
      sx={{
        textAlign: "left",
        display: "flex",
        flexDirection: "column",
        gap: 4,
        '&:hover':{
          transform:"translate:-10px",
          boxShadow:""
          

      },
      }}
    >
      <Typography
        variant="h3"
        sx={{ color: "white", fontWeight: 700, letterSpacing: "0.0625rem" }}
      >
        Code Snippet
      </Typography>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          gap: 4,
          justifyContent: "space-between",
        }}
      >
        <NextjsStarter />
        <FrontendStarter />
      </Box>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          gap: 4,
          justifyContent: "space-between",
        }}
      >
        <NextjsStarter />
        <FrontendStarter />
      </Box>
      <SeeMore/>
    </Box>
  );
}

export default CodeSnippet;
