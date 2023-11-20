import { Box } from "@mui/material";
import bioImage from "../assets/bio-img.png";
import ellipseImage from "../assets/ellipse-1.png";

function BioImage() {
  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        // bgcolor: "blue",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box sx={{ position: "absolute" }}>
        <img src={ellipseImage} className="ellipse-1" alt="ellipse" />
      </Box>
      <Box sx={{ position: "relative" }}>
        <img src={bioImage} className="bio-img" alt="bio" />
      </Box>
    </Box>
  );
}

export default BioImage;
