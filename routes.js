

exports.attachRoutes = function (app) {
    app.get('/', function (req, res) {
        res.render('index', { title: 'the index page' })
    });

    app.get('/Customer', function (req, res) {
        res.render('customer', { title: 'add customer' });
    });
    

    app.get('/dailybottledelveryentry', function (req, res) {
        res.render('generatnewsheet', { title: 'daily bottle delvery entry' });
    });
    app.get('/printsheet', function (req, res) {
        res.render('printsheet', { title: 'print sheet' });
    });
   


aap.post("/")


};
