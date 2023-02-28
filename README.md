# BackEnd-Project-Latihan
### `Front-End`
You can run the front-end by clone and npm install this repository :
https://github.com/faricaav/Project-Latihan 

Install package : <br>

```npm install```

Run : <br>

```npm start```

---------------------------------------------------------
Scheduler berada di file index.js

Screenshot Database : <br>
![Screenshot (357)](https://user-images.githubusercontent.com/100252923/221159251-29a0009d-9c95-473e-b0f6-d154ae76a33d.png)

---------------------------------------------------------
<b>API UNTUK RABBITMQ</b> <br>

GET : http://localhost:8080/rabbit <br>
Screenshot Output RabbitMQ : <br>
![Screenshot (358)](https://user-images.githubusercontent.com/100252923/221159379-b1f02534-29e9-4a6c-b411-d505e2f209e8.png)

---------------------------------------------------------

<b>Dokumentasi API</b>:

<b>API SISWA</b> <br>
GET ALL : http://localhost:8080/siswa <br>
GET FIND BY ID : http://localhost:8080/siswa/{nis} <br>
POST : http://localhost:8080/siswa <br>
PUT : http://localhost:8080/siswa/{nis} <br>
DELETE : http://localhost:8080/siswa/{nis} <br>

---------------------------------------------------------

<b>API SERTIFIKAT</b> <br>
GET ALL : http://localhost:8080/sertifikat <br>
GET FIND BY SISWA : http://localhost:8080/sertifikat/siswa/{nis} <br>
GET FIND BY ID : http://localhost:8080/sertifikat/{id_sertifikat} <br>
POST : http://localhost:8080/sertifikat <br>
PUT : http://localhost:8080/sertifikat/{id_sertifikat} <br>
DELETE : http://localhost:8080/sertifikat/{id_sertifikat} <br>

---------------------------------------------------------

<b>API ARTIKEL</b> <br>
GET ALL : http://localhost:8080/artikel <br>
GET FIND BY ID : http://localhost:8080/artikel/{id} <br>
POST : http://localhost:8080/artikel <br>
PUT : http://localhost:8080/artikel/{id} <br>
DELETE : http://localhost:8080/artikel/{id} <br>

---------------------------------------------------------

<b>API USER</b> <br>
GET ALL : http://localhost:8080/user <br>
GET FIND BY ID : http://localhost:8080/user/{id} <br>
POST : http://localhost:8080/user <br>
PUT : http://localhost:8080/user/{id} <br>
DELETE : http://localhost:8080/user/{id} <br>
