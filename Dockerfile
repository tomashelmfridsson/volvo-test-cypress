FROM cypress/included:10.11.0
#FROM cypress/browsers:node16.17.1-chrome106-ff105-edge
RUN mkdir /volvo-test
WORKDIR /volvo-test
COPY ./cypress ./cypress
COPY ./package.json .
#COPY ./package-lock.json .
COPY ./cypress.config.js .
RUN npm install
#ENTRYPOINT ["npx","cypress","run"]
#CMD [" --headless"]