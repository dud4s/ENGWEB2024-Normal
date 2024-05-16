var express = require("express");
var router = express.Router();

const contratoController = require("../controllers/contratoController");

// GET /contratos: devolve uma lista com todos os registos;
// GET /contratos?entidade=EEEE: devolve a lista dos contratos correspondentes à entidade
// GET /contratos?tipo=AAA: devolve a lista dos contratos com tipo de procedimento igual a AAA;
router.get("/", async function (req, res, next) {
  try {
    if (req.query.entidade) {
      console.log(req.query.entidade);
      const contratos = await contratoController.findByEntidade(
        req.query.entidade
      );
      res.jsonp(contratos);
    } else if (req.query.tipo) {
      console.log(req.query.tipo);
      const contratos = await contratoController.findByTipo(req.query.tipo);
      res.jsonp(contratos);
    } else {
      const contratos = await contratoController.list();
      res.jsonp(contratos);
    }
  } catch (error) {
    res.jsonp({ error: error });
  }
});

// GET /contratos/entidades: devolve a lista de entidades comunicantes ordenada
// alfabeticamente e sem repetições;
router.get("/entidades", async function (req, res, next) {
  try {
    const entidades = await contratoController.listEntidades();
    res.jsonp(entidades);
  } catch (error) {
    res.jsonp({ error: error });
  }
});

// GET /contratos/tipos: devolve a lista dos tipos de procedimento ordenada alfabeticamente e
// sem repetições;
router.get("/tipos", async function (req, res, next) {
  try {
    const tipos = await contratoController.listTipos();
    res.jsonp(tipos);
  } catch (error) {
    res.jsonp({ error: error });
  }
});

// GET /contratos/:id: devolve o registo com identificador id (corresponde ao idcontrato); EEEE;
router.get("/:id", async function (req, res, next) {
  try {
    const contrato = await contratoController.findById(req.params.id);
    res.jsonp(contrato);
  } catch (error) {
    res.jsonp({ error: error });
  }
});

// POST /contratos: acrescenta um registo novo à BD;
router.post("/", async function (req, res, next) {
  try {
    const contrato = await contratoController.insert(req.body);
    res.jsonp(contrato);
  } catch (error) {
    res.status(400).jsonp({ error: error });
  }
});

// DELETE /contratos/:id: elimina da BD o registo com o identificador id;
router.delete("/:id", async function (req, res, next) {
  try {
    const contrato = await contratoController.remove(req.params.id);
    res.jsonp(contrato);
  } catch (error) {
    res.jsonp({ error: error });
  }
});

// PUT /contratos/:id: altera o registo com o identificador id.
router.put("/:id", async function (req, res, next) {
  try {
    const contrato = await contratoController.update(req.params.id, req.body);
    res.jsonp(contrato);
  } catch (error) {
    res.jsonp({ error: error });
  }
});

module.exports = router;
