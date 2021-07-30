const express = require('express'),

router = express.Router();

// get user lists
router.get('/categoria/:id', function(req, res) {

  let sql = `SELECT * FROM CATEGORIA WHERE CPF = (?)`;

  let { id } = req.params;

  db.query(sql, id, function(err, data, fields) {

    if (err) throw err;

    res.json(data);

  })

});

router.get('/produto/:id', function(req, res) {

  let sql = `SELECT * FROM PRODUTO WHERE CPF = (?) ORDER BY CAT`;

  let { id } = req.params;

  db.query(sql, id, function(err, data, fields) {

    if (err) throw err;

    res.json(data);

  })

});

router.get('/produtos/:id', function(req, res) {

  let sql = `SELECT * FROM PRODUTO WHERE CAT = (?)`;

  let { id } = req.params;

  db.query(sql, id, function(err, data, fields) {

    if (err) throw err;

    res.json({
      "id": id,
      "produtos": data      
    });

  })

});

router.get('/ac', function(req, res) {

  let sql = `SELECT * FROM AC`;

  db.query(sql, function(err, data, fields) {

    if (err) throw err;

    res.json(data);

  })

});  

router.get('/ac/:id', function(req, res) {

  let sql = `SELECT * FROM AC WHERE CAT = (?)`;

  let { id } = req.params;

  db.query(sql, id, function(err, data, fields) {

    if (err) throw err;

    res.json(data);

  })

});

router.get('/user/:nome', function(req, res) {

  let sql = `SELECT * FROM PACKAGE WHERE NOME = (?)`;

  let { nome } = req.params;

  db.query(sql, nome, function(err, data, fields) {

    if (err) throw err;

    res.json(data);

  })

});


router.post('/pedido', function(req, res) {
  let sql = `INSERT INTO USUARIO(ID, NOME, ENDERECO, NUMERO, COMPLEMENTO, BAIRRO, CEP, CIDADE, UF, REFERENCIA, TEL_FIXO, TEL_WHATSAPP, EMAIL, SENHA, OBSERVACAO, LATITUDE, LONGITUDE, FOTO, STATUS, PACKAGE, DATAATUALIZACAO, GCM, APARELHO, EMAILREAL, PREMIO, DATAPREMIO, VERSAO) VALUES (?)`;
  
  let values = [
    req.body.ID,
    req.body.NOME,
    req.body.ENDERECO,
    req.body.NUMERO,
    req.body.COMPLEMENTO,
    req.body.BAIRRO,
    req.body.CEP,
    req.body.CIDADE,
    req.body.UF,
    req.body.REFERENCIA,
    req.body.TEL_FIXO,
    req.body.TEL_WHATSAPP,
    req.body.EMAIL,
    req.body.SENHA,
    req.body.OBSERVACAO,
    req.body.LATITUDE,
    req.body.LONGITUDE,
    req.body.FOTO,
    req.body.STATUS,
    req.body.PACKAGE,
    req.body.DATAATUALIZACAO,
    req.body.GCM,
    req.body.APARELHO,
    req.body.EMAILREAL,
    req.body.PREMIO,
    req.body.DATAPREMIO,
    req.body.VERSAO
  ];


  db.query(sql, [values], function(err, data, fields) {

    if (err) throw err;

    res.json(values);

  })

});


// create new user
router.post('/new', function(req, res) {
  let sql = `INSERT INTO tabela(nome) VALUES (?)`;
  
  let values = [
    req.body.nome,
  ];

  db.query(sql, [values], function(err, data, fields) {

    if (err) throw err;

    res.json({
        message: "New user added successfully"
    });

  })

});

module.exports = router;
