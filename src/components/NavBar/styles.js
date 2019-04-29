const styles = theme => ({
  root: {
    width: "100%",
  },
  appBar: {
    background: "transparent",
    boxShadow: "none",
  },
  grow: {
    flexGrow: 1,
  },
  logo: {
    width: "120px",
    height: "auto",
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  desktopLinks: {
    "& a": {
      padding: "0 0.5rem",
      textDecoration: "none",
    },
    "& a:hover": {
      textDecoration: "underline",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
});

export default styles;
