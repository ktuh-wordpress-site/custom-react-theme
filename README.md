# KTUH Custom React Theme

## Build and Deployment Instructions
The PHP can be deployed directly via FTP. To ensure parity with the master branch, and that the latest changes are available, it might be good to clone the repository on the server side, and pulling from master regularly.

The server does not have NPM installed, thus the Javascript will need to be built off the server prior to deployment. Follow these steps to build and deploy manually:
1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Run `npm run-script build` to build.
4. Deploy this theme however preferred, whether via FTP or the WordPress admin panel.
