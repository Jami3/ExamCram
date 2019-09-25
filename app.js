const express = require('express');
const app = express();
const port = 3000;
const fs = require("fs");
const JSONToCSV = require("json2csv").parse;
const CSVToJSON = require("csvtojson");

var path = require('path');

const password ="winter2019";

app.use(express.urlencoded());
app.use('/css', express.static('css'))
app.use('/js', express.static('js'))
app.use('/data', express.static('data'))

app.get('/', (req, res) => {

    res.sendFile(path.join(__dirname + '/index.html'));
})
app.post('/select', (req, res) => {

    
    if(req.body.pass === password){
        res.sendFile(path.join(__dirname + '/javaChoice.html'));
        saveAttendance(req);
    }else{
        res.redirect('/?err=wrongpass');
    }

    
})
app.get('/quiz', (req, res) => {

    res.sendFile(path.join(__dirname + '/quiz.html'));
})
app.get('/Attendance', (req, res) => {

    res.sendFile(path.join(__dirname + '/attendance.html'));
})


app.listen(port, () => console.log(`app listening on port ${port}!`))

function saveAttendance(req){
    let currentDate = new Date();
    CSVToJSON().fromFile("./data/attendance.csv").then(source => {
        source.push({
            "firstName": req.body.fname,
            "lastName": req.body.lname,
            "course": req.body.course,
            "date": currentDate.getFullYear() + "-" + (currentDate.getMonth()+1) + "-" + currentDate.getDate()
        });
        const updatedAttendance = JSONToCSV(source,{fields: ["firstName","lastName","course","date"]});
        fs.writeFileSync("./data/attendance.csv",updatedAttendance);
    });
}