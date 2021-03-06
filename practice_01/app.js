// node_modules 폴더 내의 "express" 관련 함수를 불러와 정의함.
var express = require('express')
// 함수 형태 변수 express를 실행해 실행 결과인 서버 함수를 app 변수로 정의
var app = express()
// 서버 함수 app을 실행.
/* 
    서버 함수 app을 실행.
    해당 서버는 Port 3000번으로 정의.
    즉 서버의 주소는 "http://localhost:3000/" 이 됨.
 */
app.listen(3000, function(){
    // 서버가 싦행되면 Terminal에 확인을 위해 아래의 로그를 출력하도록 함.
    console.log("Start express server on port 3000!");
})

/* 
    app.js 파일이 존재하는 폴더 내의 public 폴더를 정적 폴더로 정의함.
    이를 통해서 public 폴더 내에 존재하는 main.js 자바스크립트 파일, images 폴더를 사용할 수 있음
*/
app.use(express.static('public'))

/*
    서버 함수 app을 통해 클라이언트가 GET 방식으로 서버 파일들에 접근할 수 있도록 함
*/
app.get('/', function(req, res){
    // html 코드 자체를 전송할 수 있음
    // res.send("<h1>Hello friend!</h1>")
    // 또는 이미 구현된 파일들을 전송할 수도 있음
    res.sendFile(__dirname + "/public/main.html")
})

// get 초기 매개변수를 통해 클라이언트가 접근하는 경로를 정의해줄 수 있음
app.get('/main', function(req, res){
    res.sendFile(__dirname + "/public/main.html")
})

console.log("End of Server code . . .")