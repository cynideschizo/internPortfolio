import { Box } from "@mui/material";

function NavBar() {
  return (
    <Box
       bgcolor={"#272727"}
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        zIndex: 10,
        position: "fixed",
        top: 0,
        width: "90%",
        maxWidth: "1232px",
        borderBottom:'0.0625rem solid #4D4D4D'
      }}
    >
      <div className="navbar-logo">Naufaldi</div>
      <Box sx={{display:"flex",gap:4}}>
        <div className="navbar-menu-active">Home</div>
        <div className="navbar-menu">Mentorship</div>
        <div className="navbar-menu">Portfolio</div>
        <div className="navbar-menu">Snippet</div>
        <div className="navbar-menu">Blog</div>
      </Box>
    </Box>
  );
}

export default NavBar;
