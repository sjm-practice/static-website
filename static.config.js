import path from "path";
import { createGenerateClassName } from "@material-ui/core/styles";

const generateClassName = createGenerateClassName();

export default {
  plugins: [
    [
      require.resolve("react-static-plugin-source-filesystem"),
      {
        location: path.resolve("./src/pages"),
      },
    ],
    [
      "react-static-plugin-jss",
      {
        providerProps: {
          generateClassName,
        },
      },
    ],
    require.resolve("react-static-plugin-reach-router"),
  ],
};
