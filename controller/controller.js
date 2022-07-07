const controller = {}


controller.list = (req, res) => {
    //esto es un peticion a la base de datos de mysql
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM computers', (err, row) => {
            if (err){
                res.json(err)
            }
            res.render('customer', {data: row})
        })
    })
}

module.exports = controller;