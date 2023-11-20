import { Box, Card, Typography } from "@mui/material";
import Arrow from "../assets/arrow-forward.svg";
import WebDevImage from "../assets/web-dev-image.png";
import WebDevBg from "../assets/web-dev-bg.png";
import UxImage from "../assets/ux-image.png";
import UxBg from "../assets/ux-bg.png";
function WhatIDo() {
  return (
    <Box sx={{ display: "inline-flex",mt:4 }}>
      <Box
        sx={{
          //position: "relative",
          //ml: "4rem",
          display: "flex",
          flexDirection: "column",
          textAlign: "left",
          maxWidth: "24rem",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="h4"
          sx={{ fontWeight: 700, fontSize: "1.75rem", mb: 2 }}
        >
          What I do
        </Typography>
        <Typography sx={{ color: "#EDCECE" }}>
          Build and maintain websites,{" "}
          <span style={{ color: "#80FFA3", fontWeight: 700 }}>
            frontend dev
          </span>{" "}
          also have a mentorship called{" "}
          <span style={{ color: "#62D9FF", fontWeight: 700 }}>MOFON</span>. My
          motto is Beauty and function in equal measure as priority.
        </Typography>
      </Box>
      <Box sx={{ display: "inline-flex", gap: 4 }}>
        <Card
          sx={{
            bgcolor: "#323443",
            p: "1rem",
            maxWidth: "14rem",
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            overflow: "visible",
          }}
        >
          <Box sx={{ position: "absolute", top: "-2.25rem" }}>
            <img src={WebDevBg} alt={"web-dev"} className="what-I-do-card-bg" />
          </Box>
          <Box sx={{ position: "absolute", top: "-1.1rem" }}>
            <img
              src={WebDevImage}
              alt={"web-dev"}
              className="what-I-do-card-image"
            />
          </Box>
          <Typography
            variant="h6"
            sx={{
              mt: 5,
              mb: 2,
              color: "#FAFAF9",
              fontSize: "1rem",
              fontWeight: 600,
              letterSpacing: "0.0625rem",
              //   lineHeight: "4.5rem",
            }}
          >
            Web Development
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: "rgba(239, 237, 232, 0.65)",
              fontSize: "0.875rem",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "1.625rem",
              letterSpacing: "0.0625rem",
            }}
          >
            You will receive a customized plan for your fitness journey, and
            lots of support.
          </Typography>
        </Card>
        <Card
          sx={{
            bgcolor: "#323443",
            p: "1rem",
            maxWidth: "14rem",
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            overflow: "visible",
          }}
        >
          <Box sx={{ position: "absolute", top: "-2.25rem" }}>
            <img src={UxBg} alt={"web-dev"} className="what-I-do-card-bg" />
          </Box>
          <Box sx={{ position: "absolute", top: "-1.1rem" }}>
            <img
              src={UxImage}
              alt={"web-dev"}
              className="what-I-do-card-image"
            />
          </Box>
          <Typography
            variant="h6"
            sx={{
              mt: 5,
              mb: 2,
              color: "#FAFAF9",
              fontSize: "1rem",
              fontWeight: 600,
              letterSpacing: "0.0625rem",
              //   lineHeight: "4.5rem",
            }}
          >
            UX Research
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: "rgba(239, 237, 232, 0.65)",
              fontSize: "0.875rem",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "1.625rem",
              letterSpacing: "0.0625rem",
            }}
          >
            You will receive a customized plan for your fitness journey, and
            lots of support.
          </Typography>
        </Card>
        <img src={Arrow} alt={"arrow"} />
      </Box>
    </Box>
  );
}

export default WhatIDo;
