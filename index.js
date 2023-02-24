//import
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

//implementasi
const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//endpoint artikel
const artikel = require('./routes/artikel')
app.use("/artikel", artikel)

//endpoint user
const users = require('./routes/users')
app.use("/users", users)

//endpoint siswa
const siswa = require('./routes/siswa');
app.use("/siswa", siswa)

//endpoint customer
const sertifikat = require('./routes/sertifikat');
app.use("/sertifikat", sertifikat)

const schedule = require('node-schedule')
//import model
const model = require('./models/index');
const scheduler = model.scheduler

const job = schedule.scheduleJob('*/5 * * * *', async function(){
    console.log("every 5 minutes add data to database");

    const sch = new scheduler({
        waktu_sekarang: new Date(Date.now())
    })
    await sch.save();
})

job.invoke()


//conn mongodb
mongoose.set("strictQuery", false);
mongoose.connect('mongodb://localhost:27017/db_artikel',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const db = mongoose.connection;
db.on('error', (error) => console.log(error));
db.once('open', () => console.log('Database Connected...'));

//run server
app.listen(8080, () => {
    console.log('server run on port 8080')
})
