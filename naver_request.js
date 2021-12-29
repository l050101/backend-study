
const request = require('request')
const express = require('express')
const app = express()

app.set('port',process.env.PORT || 8081)
app.use(express.json())
app.use(express.urlencoded({extended:true}))
    let client_id = 'rV0kAXJbxIIO7Arj9I6i';
    let client_secret = 'wLo2NX9IMe';

app.get('/naver/papago',(req,res)=>{
    console.log('function 1 work!');
    
    var query = req.query.aa;
    var api_url = 'https://openapi.naver.com/v1/papago/n2mt';
    var options = {
        url: api_url,
        form: {'source':'ko', 'target':'en', 'text':query},
        headers: {'X-Naver-Client-Id':client_id, 'X-Naver-Client-Secret': client_secret}
    };
    request.post(options, function (error, response, body) {
        if (!error && response.statusCode == 200) {
        res.writeHead(200, {'Content-Type': 'text/json;charset=utf-8'});
        res.end(body);
        } else {
        res.status(response.statusCode).end();
        console.log('error = ' + response.statusCode);
        }
    });
})
app.get('/naver/detectlangs',(req,res)=>{
    console.log('function 2 work!');
    
    var query = req.query.aa;
    var api_url = 'https://openapi.naver.com/v1/papago/detectLangs';
    var options = {
        url: api_url,
        form: {'query': query},
        headers: {'X-Naver-Client-Id':client_id, 'X-Naver-Client-Secret': client_secret}
    };
    request.post(options, function (error, response, body) {
        if (!error && response.statusCode == 200) {
        res.writeHead(200, {'Content-Type': 'text/json;charset=utf-8'});
        res.end(body);
        } else {
        res.status(response.statusCode).end();
        console.log('error = ' + response.statusCode);
        }
    });
    
    
})
app.post('/naver/trend',(req,res)=>{
    console.log('function 3 work!');
    
    var api_url = 'https://openapi.naver.com/v1/datalab/search';
    var request_body = {
        "startDate": "2019-01-01",
        "endDate": "2021-04-30",
        "timeUnit": "month",
        "keywordGroups": [
            {
                "groupName": "유튜브",
                "keywords": [
                    "유튜브",
                    "youtube"
                ]
            },
            {
                "groupName": "구글",
                "keywords": [
                    "구글",
                    "google"
                ]
            }
        ],
        "ages": [
            "1",
            "2"
        ],
        
    };
    request.post({
            url: api_url,
            body: JSON.stringify(request_body),
            headers: {
                'X-Naver-Client-Id': client_id,
                'X-Naver-Client-Secret': client_secret,
                'Content-Type': 'application/json'
            }
        },
        function (error, response, body) {
            console.log(response.statusCode);
            res.send(body)
            res.end()
        });
})

app.post('/naver/shopping',(req,res)=>{
    console.log('function 4 work!');
    
    var api_url = 'https://openapi.naver.com/v1/datalab/shopping/categories';
    var request_body = {
        "startDate": "2017-08-01",
        "endDate": "2019-09-30",
        "timeUnit": "month",
        "category": [
            {"name": "패션의류", "param": ["50000000"]},
            {"name": "화장품/미용", "param": ["50000002"]}
        ],
        "device": "",
        "gender": "",
        "ages": ["20", "30"],
    };
    request.post({
            url: api_url,
            body: JSON.stringify(request_body),
            headers: {
                'X-Naver-Client-Id': client_id,
                'X-Naver-Client-Secret': client_secret,
                'Content-Type': 'application/json'
            }
        },
        function (error, response, body) {
            console.log(response.statusCode);
            res.send(body)
            res.end()
        });
})
app.listen(app.get('port'),()=>{
    console.log('서버 on')
})
