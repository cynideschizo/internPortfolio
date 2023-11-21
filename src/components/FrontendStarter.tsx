import { Box, Card, Typography } from "@mui/material";
import Tailwind from "../assets/tailwind.png";
import Sass from "../assets/sass.png";
import Html from "../assets/html.png";
import Star from "../assets/star.png";

function FrontendStarter() {
  return (
    <Card
      sx={{
        bgcolor: "#323443",
        color: "white",
        height: "17rem",
        width: "100%",
        borderRadius: "1.25rem",
        px: 4,
        pt: 4,
        pb: 2,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        "&:hover":{
              
          boxShadow:"0 0 50px 4px rgba(0,0,0,0.6)",
          filter:"brightness(1.1)",

      }
      }}
    >
      <Box>
        <Typography variant={"h4"} sx={{ fontWeight: 700, mb: 4 }}>
          Frontend Starter Kit
        </Typography>
        <Typography
          variant="body2"
          sx={{
            fontSize: "1.125rem",
            lineHeight: "2rem" /* 177.778% */,
            letterSpacing: "0.01575rem",
          }}
        >
          A dead simple for html 5 boilerplate project. Included setup for
          minify css, html minify, SEO setting.
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
          <Box>
            <img src={Tailwind} alt="tailwind" className="code-snippet-icon" />
          </Box>
          <Box>
            <img src={Sass} alt="tailwind" className="code-snippet-icon" />
          </Box>
          <Box sx={{ pb: 0.5 }}>
            <img src={Html} alt="tailwind" className="code-snippet-icon" />
          </Box>
        </Box>
        <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
          <img src={Star} alt="star" className="code-snippet-star" />
          <Typography
            variant="body2"
            sx={{
              fontSize: "1.125rem",
              lineHeight: "2rem" /* 177.778% */,
              letterSpacing: "0.01575rem",
            }}
          >
            12 Stars
          </Typography>
        </Box>
      </Box>
    </Card>
  );
}

export default FrontendStarter;
