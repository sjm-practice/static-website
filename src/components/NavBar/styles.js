const primaryColor = "rgba(255,255,255,.7)";

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
    "& ul": {
      listStyleType: "none",
    },
    "& li": {
      display: "inline",
    },
    "& a": {
      padding: "0 0.5rem",
      textDecoration: "none",
      textTransform: "uppercase",
      fontSize: "11px",
      fontFamily: "'Lato', 'Helvetica', 'Arial', 'sans-serif'",
      letterSpacing: "2px",
      color: primaryColor,
      WebkitTransition: "all .35s",
      MozTransition: "all .35s",
      transition: "all .35s",
    },
    "& a:hover": {
      color: "white",
    },
    "& a:visited": {
      color: primaryColor,
    },
    "& a:visited:hover": {
      color: "white",
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
