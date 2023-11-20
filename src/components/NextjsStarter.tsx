import { Box, Card, Typography } from "@mui/material";
import Tailwind from "../assets/tailwind.png";
import ReactIcon from "../assets/react.png";
import Star from "../assets/star.png";

function NextjsStarter() {
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
          }}
        >
          <Box>
            <Typography variant={"h4"} sx={{ fontWeight: 700, mb: 4 }}>
              Nextjs Starter
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontSize: "1.125rem",
                lineHeight: "2rem" /* 177.778% */,
                letterSpacing: "0.01575rem",
              }}
            >
              A dead simple for nextjs project.
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
                <img
                  src={Tailwind}
                  alt="tailwind"
                  className="code-snippet-icon"
                />
              </Box>
              <Box sx={{ pb: 0.5 }}>
                <img src={ReactIcon} alt="tailwind" className="code-snippet-icon" />
              </Box>
            </Box>
            <Box sx={{display:"flex",gap:1,alignItems:'center'}}>
              <img src={Star} alt="star" className="code-snippet-star" />
              <Typography
              variant="body2"
              sx={{
                fontSize: "1.125rem",
                lineHeight: "2rem" /* 177.778% */,
                letterSpacing: "0.01575rem",
              }}
            >
              8 Stars
            </Typography>
            </Box>
          </Box>
        </Card>
    );
}

export default NextjsStarter;