FROM cypress/browsers:node-18.16.0-chrome-113.0.5672.92-1-ff-113.0-edge-113.0.1774.35-1

WORKDIR /e2e

COPY ./cypress.config.js

RUN npm i &&\
    npx cypress info

ENTRYPOINT ["npx","cypress","run"]