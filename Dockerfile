FROM cypress/browsers:node-18.16.0-chrome-113.0.5672.92-1-ff-113.0-edge-113.0.1774.35-1

COPY . ./tyme-home-test

WORKDIR /tyme-home-test

RUN npm install cypress --save-dev
RUN npm install cypress-real-events

ENTRYPOINT ["npx", "cypress", "run", "--browser", "chrome"]
