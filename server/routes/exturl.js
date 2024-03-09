import express from 'express';
import path from 'path';


import axios from 'axios';

import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let router = express.Router();


/* GET exturl. */
router.get('/', function(req, res, next) {
    console.log("in exturl")
    let url = req.query.url
    let params = {}
    axios.get(url, {
        params: params
    }).then(response => {
        res.header("Access-Control-Allow-Origin", "*");
        res.send(response.data)
        
    }).catch(error => {
        res.json(error)
    })

})

export default router;
