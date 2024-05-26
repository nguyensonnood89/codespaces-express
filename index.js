const exp = require('constants');
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const app = express();
const port = 3000;


app.use(express.json()); // Để xử lý dữ liệu JSON từ client

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
