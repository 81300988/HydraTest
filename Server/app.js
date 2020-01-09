    var express = require('express');
    const router = express.Router();
    const cors = require('cors');
    var app = express();
    
    var PORT = 5000;
    
    router.post('/', function(req, res) {
        res.status(200).send('Hello world');
    });
    app.use(cors());
app.options('*', cors());
    app.use(router)
    app.listen(PORT, function() {
        console.log('Server is running on PORT:',PORT);
    });
 