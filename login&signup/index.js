const express = require('express');
const app = express();
const port = 3000;

app.listen(port, () => console.log(`server is running ${port}`));

app.get('/', function(req, res){
    res.send("여기는 홈");
});
app.get("/login", function(req, res){
    res.send("여기는 로그인");
});