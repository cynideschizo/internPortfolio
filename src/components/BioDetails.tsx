import { Box, Typography } from "@mui/material";
import BioImage from "./BioImage";
import LetsConnectImage from "./LetsConnectImage";

function BioDetails() {
  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 6,
      }}
    >
      <BioImage />
      <Box
        sx={{
          position: "relative",
          //ml: "4rem",
          display: "flex",
          flexDirection: "column",
          textAlign: "left",
          maxWidth: "26rem",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="h4"
          sx={{ fontWeight: 700, fontSize: "1.75rem", mb: 2 }}
        >
          Biography
        </Typography>
        <Typography sx={{ color: "#D6D6D6" }}>
          Getting Buff +1 for learning, Buff +2 for documentation and more buff
          on managing team. Exicited on{" "}
          <span style={{ color: "#4CA9FF", fontWeight: 700 }}>React</span>,{" "}
          <span style={{ color: "#62D9FF", fontWeight: 700 }}>UX Research</span>{" "}
          and <span style={{ color: "#80FFA3", fontWeight: 700 }}>Agile</span>.
        </Typography>
      </Box>
      <Box sx={{}}>
        <Typography
          variant="h4"
          sx={{ fontWeight: 700, fontSize: "1.75rem", mb: 3 }}
        >
          Lets connect
        </Typography>
        <LetsConnectImage />
      </Box>
    </Box>
  );
}

export default BioDetails;
