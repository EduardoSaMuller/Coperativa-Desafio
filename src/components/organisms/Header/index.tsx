import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import PersonIcon from "@mui/icons-material/Person";
import HomeIcon from "@mui/icons-material/Home";
import Logo from "../../../assets/gobrax.png";
interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const drawerWidth = 360;

export default function Header(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center", p: "2rem" }}>
      <img src={Logo} height={60} width={150} alt="Logo" />
      <Divider />

      <Box
        sx={{
          display: { display: "flex", flexDirection: "column" },
          mt: "1rem",
        }}
      >
        <Button
          href="/"
          variant="text"
          style={{
            color: "black",
            textTransform: "none",
            fontWeight: "bold",
            letterSpacing: "normal",
          }}
        >
          <HomeIcon sx={{ mr: "1rem", ml: "1.5rem", fontSize: "30px" }} />{" "}
          <span style={{ fontSize: "20px", width: "120px", textAlign: "left" }}>
            Inicial
          </span>
        </Button>
        <Button
          href="/motoristas"
          variant="text"
          style={{
            color: "black",
            textTransform: "none",
            fontWeight: "bold",
            letterSpacing: "normal",
          }}
        >
          <PersonIcon sx={{ mr: "1rem", ml: "1.5rem", fontSize: "30px" }} />{" "}
          <span style={{ fontSize: "20px", width: "120px", textAlign: "left" }}>
            Motoristas
          </span>
        </Button>
        <Button
          href="/veiculos"
          variant="text"
          style={{
            color: "black",
            textTransform: "none",
            fontWeight: "bold",
            letterSpacing: "normal",
          }}
        >
          <LocalShippingIcon
            sx={{ mr: "1rem", ml: "1.5rem", fontSize: "30px" }}
          />{" "}
          <span style={{ fontSize: "20px", width: "120px", textAlign: "left" }}>
            Veículos
          </span>
        </Button>
      </Box>

      <Box>
        <Grid
          item
          xs
          sx={{
            display: {
              md: "none",
              sm: "block",
              xs: "block",
              position: "absolute",
              bottom: "48px",
              left: "130px",
            },
          }}
        >
          <Button
            href="https://www.linkedin.com/company/gobrax/"
            target="_blank"
            variant="contained"
            style={{
              backgroundColor: "#1323B0",
              color: "white",
              letterSpacing: "normal",
              textTransform: "none",
              fontWeight: "bold",
            }}
          >
            LinkedIn
          </Button>
        </Grid>
      </Box>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" , position:'relative'}}>
      <CssBaseline />
      <AppBar component="nav" sx={{position: 'relative'}}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ ml: 2, display: { sm: "none", md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Grid
            item
            xs
            sx={{
              display: { md: "block", sm: "none", xs: "none" },
              width: "200px",
            }}
          >
            <Button
              href="/motoristas"
              variant="text"
              style={{
                color: "black",
                textTransform: "none",
                fontWeight: "bold",
                letterSpacing: "normal",
              }}
            >
              Motoristas
            </Button>
            <Button
              href="/veiculos"
              variant="text"
              style={{
                color: "black",
                textTransform: "none",
                fontWeight: "bold",
                letterSpacing: "normal",
              }}
            >
              Veículos
            </Button>
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              display: { display: "flex", justifyContent: "center" },
              width: "100%",
            }}
          >
            <img src={Logo} height={90} width={270} alt="Logo" />
          </Grid>
          <Grid
            item
            xs
            sx={{ display: { md: "block", sm: "none", xs: "none" } }}
          >
            <Button
              href="https://www.linkedin.com/company/gobrax/"
              target="_blank"
              variant="contained"
              style={{
                backgroundColor: "#1323B0",
                color: "white",
                letterSpacing: "normal",
                textTransform: "none",
                fontWeight: "bold",
              }}
            >
              LinkedIn
            </Button>
          </Grid>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, 
          }}
          sx={{
            display: { xs: "block", sm: "none", position: "relative" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}
