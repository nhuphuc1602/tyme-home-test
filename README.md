# tyme-home-test
 
Use command :\
    npx cypress run --browser {browserName} (browserName = chrome or firefox) to running this test suite.

If you have any problem in installing node or npm, cypress. You can use dockerfile to run this test suite:
    docker build -t my-cypress-tests .\
    docker run -it --rm my-cypress-tests
