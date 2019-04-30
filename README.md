[![Netlify Status](https://api.netlify.com/api/v1/badges/bc9fc59f-aac4-447f-8f02-ac001d64ce8b/deploy-status)](https://app.netlify.com/sites/avo-test-static-site/deploys)

AVO test static website can be viewed [here](https://avo-test-static-site.netlify.com/).

# static-website

A test run on creating AVO website using react-static.

## Tech Notes
### Components
* TODO template component
### Styling
* use iconify simple-line-icons for react for icons in Features section
  * https://iconify.design/icon-sets/
  * https://github.com/iconify-design/iconify-react
* If needed, there is also fontawesome for react
### Testing
* moved jest config settings from .jest-config.json to package.json to better support the Jest VS Code plugin (prevented errors showing up in Problem console, didn't pick up test regex and was running stories as tests)
