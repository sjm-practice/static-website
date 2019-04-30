const styles = () => ({
  container: {
    width: "100%",
    height: "700px",
    padding: "10px",
    background:
      "url('images/bg-pattern.png'), linear-gradient(to left, #7b4397, #dc2430)",
    fallbacks: [
      {
        background:
          "url('images/bg-pattern.png'), -webkit-linear-gradient(to left, #7b4397, #dc2430)",
      },
      { background: "url('images/bg-pattern.png'), #7b4397" },
    ],
  },
});

export default styles;
