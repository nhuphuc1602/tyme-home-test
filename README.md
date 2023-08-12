# tyme-home-test
 
Go to project directory and run command :\
    npm install ./cypress\
    npx cypress run --browser {browserName} (browserName = chrome or firefox) to running this test suite.

If you have any problem in installing node or npm, cypress. You can use dockerfile to run this test suite:\
    docker build -t my-cypress-tests .\
    docker run -dit my-cypress-tests\
    
    
