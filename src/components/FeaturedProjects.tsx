import { Box, Typography } from "@mui/material";
import Featured1 from "../assets/project-1.png";
import Featured2 from "../assets/project-2.png";
import SeeMore from "./SeeMore";

function FeaturedProjects() {
  return (
    <Box
      sx={{
        textAlign: "left",
        display: "flex",
        flexDirection: "column",
        gap: 6,
      }}
    >
      <Typography
        variant="h3"
        sx={{ color: "white", fontWeight: 700, letterSpacing: "0.0625rem" }}
      >
        Featured Project
      </Typography>

      <Box sx={{ display: "flex", gap: 4 }}>
        <Box>
          <img
            src={Featured1}
            alt="featured-01"
            className="featured-project-image"
          />
        </Box>
        <Box
          sx={{
            maxWidth: "32rem",
            display: "flex",
            flexDirection: "column",
            gap: 2,
            justifyContent: "center",
          }}
        >
          <Typography
            variant="body1"
            sx={{
              fontWeight: 700,
              lineHeight: "1.5rem" /* 133.333% */,
              letterSpacing: "0.0625rem",
              color: "#DEDEDE",
            }}
          >
            Web Development
          </Typography>
          <Typography
            variant="h3"
            sx={{
              mb: 1,
              color: "white",
              fontWeight: 700,
              //fontSize: '2.8rem',
              //lineHeight: "3.5rem" /* 116.667% */,
              letterSpacing: "0.0625rem",
            }}
          >
            Bolder Landingpage
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "#D4D4D4",
              letterSpacing: "0.01575rem",
              lineHeight: "1.6rem",
            }}
          >
            Serrow restructured and designed core pages, creating interactive
            elements that put users in control and allowed them to discover the
            information needed to make a decision.
          </Typography>
        </Box>
      </Box>

      <Box sx={{ display: "flex", gap: 4 }}>
        <Box>
          <img
            src={Featured2}
            alt="featured-01"
            className="featured-project-image"
          />
        </Box>
        <Box
          sx={{
            maxWidth: "35rem",
            display: "flex",
            flexDirection: "column",
            gap: 2,
            justifyContent: "center",
          }}
        >
          <Typography
            variant="body1"
            sx={{
              fontWeight: 700,
              lineHeight: "1.5rem" /* 133.333% */,
              letterSpacing: "0.0625rem",
              color: "#DEDEDE",
            }}
          >
            Web Development
          </Typography>
          <Typography
            variant="h3"
            sx={{
              //mb: 1,
              color: "white",
              fontWeight: 700,
              //fontSize: '2.8rem',
              //lineHeight: "3.5rem" /* 116.667% */,
              letterSpacing: "0.0625rem",
            }}
          >
            Kerja Mantul Education Management
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "#D4D4D4",
              letterSpacing: "0.01575rem",
              lineHeight: "1.6rem",
            }}
            //className="featured-body"
          >
            Serrow restructured and designed core pages, creating interactive
            elements that put users in control and allowed them to discover the
            information needed to make a decision.
          </Typography>
        </Box>
      </Box>
      <SeeMore/>
    </Box>
  );
}

export default FeaturedProjects;
