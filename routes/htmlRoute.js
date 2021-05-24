const path = require('path');

module.exports = function() {
    // homepage route
    app/router.get('/', function(req, res) {
        res.sendFile(path.join(__dirname, '../index.html'))
    })
}

module.exports = function() {
    // homepage route
    app/router.get('/exercise', function(req, res) {
        res.sendFile(path.join(__dirname, '../exercise.html'))
    })
}

module.exports = function() {
    // homepage route
    app/router.get('/exercise', function(req, res) {
        res.sendFile(path.join(__dirname, '../stats.html'))
    })
}