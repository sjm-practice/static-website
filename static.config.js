import React from "react";
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
  Document: (
    { Html, Head, Body, children }, // eslint-disable-line react/prop-types
  ) => (
    <Html lang="en-US">
      <Head>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
        />
        <link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet" />
        <link
          href="https://fonts.googleapis.com/css?family=Catamaran:100,200,300,400,500,600,700,800,900"
          rel="stylesheet"
        />
        <link href="https://fonts.googleapis.com/css?family=Muli" rel="stylesheet" />
      </Head>
      <Body>{children}</Body>
    </Html>
  ),
};
