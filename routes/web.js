const basepath = "/v1";

module.exports = app => {
    app.get(basepath + '/', function (req, res) {
        res.write('Deploybot app is working');
        res.end();
    });

    app.get(basepath + '/health-check', function (req, res) {
        res.json({ "data": { "health-check": "OK" } });
        res.end();
    });

    app.get(basepath + '/index', function (req, res) {
        res.sendFile(app.get('views') + '/index.html');
    });
}