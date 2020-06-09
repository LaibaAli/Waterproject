const mongoose = require('mongoose');
const Customer = mongoose.model('Addcustomer');

module.exports.attachRoutes = function (app) {
    app.get('/', function (req, res) {
        res.render('index', {title: 'the index page'})
    });

    app.get('/Customer', async function (req, res) {
        const customers = await Customer.find();
        res.render('customer', { title: 'add customer', customers });
    });


    app.get('/dailybottledelveryentry', function (req, res) {
        res.render('generatnewsheet', {title: 'daily bottle delvery entry'});
    });
    app.get('/printsheet', function (req, res) {
        res.render('printsheet', {title: 'print sheet'});
    });
    app.post('/addCustomer', async function (req, res) {
        const { name, address, contact, bottle_deposit, bottle_qty, bottle_rate } = req.body;
        const customer = new Customer({
            name, address, contact, bottle_deposit, bottle_qty, bottle_rate
        });
        await customer.save();
        res.redirect('/Customer')
    });
}
