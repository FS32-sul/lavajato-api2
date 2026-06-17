const {  criar, buscar, editar, deletar } = require("../controllers/servicosController");

const router = require("express").Router();

router.get("/", async (req, res) => {
    // #swagger.tags = ['Serviços']
    // #swagger.summary = 'Listar todos os serviços'
    // #swagger.description = 'Retorna uma lista com todos os serviços cadastrados no sistema'
    // #swagger.responses[200] = {
    //   description: 'Lista de serviços retornada com sucesso',
    //   schema: {
    //     type: 'array',
    //     items: {
    //       type: 'object',
    //       properties: {
    //         id: { type: 'integer', example: 1 },
    //         nome: { type: 'string', example: 'Lavagem Completa' },
    //         valor: { type: 'number', format: 'float', example: 150.50 }
    //       }
    //     }
    //   },
    //   example: [
    //     { id: 1, nome: 'Lavagem Completa', valor: 150.50 },
    //     { id: 2, nome: 'Polimento', valor: 80.00 },
    //     { id: 3, nome: 'Hidrolavagem', valor: 120.00 }
    //   ]
    // }
    // #swagger.responses[500] = { description: 'Erro ao buscar serviços' }
    res.json(await buscar());
});

router.post("/", async (req, res) => {
    // #swagger.tags = ['Serviços']
    // #swagger.summary = 'Criar novo serviço'
    // #swagger.description = 'Cria um novo serviço no sistema com nome e valor'
    /* #swagger.parameters['body'] = {
        in: 'body',
        description: 'Dados do serviço a ser criado',
        required: true,
        schema: {
            type: 'object',
            required: ['nome', 'valor'],
            properties: {
                nome: {
                    type: 'string',
                    maxLength: 30,
                    description: 'Nome do serviço',
                    example: 'Lavagem Completa'
                },
                valor: {
                    type: 'number',
                    format: 'float',
                    description: 'Valor do serviço em reais',
                    example: 150.50
                }
            }
        }
    } */
    // #swagger.responses[200] = {
    //   description: 'Serviço criado com sucesso',
    //   schema: {
    //     type: 'object',
    //     properties: {
    //       id: { type: 'integer', example: 1 },
    //       nome: { type: 'string', example: 'Lavagem Completa' },
    //       valor: { type: 'number', format: 'float', example: 150.50 }
    //     },
    //     example: { id: 1, nome: 'Lavagem Completa', valor: 150.50 }
    //   }
    // }
    // #swagger.responses[400] = { description: 'Dados inválidos ou incompletos' }
    // #swagger.responses[500] = { description: 'Erro ao criar serviço' }
    res.json(await criar(req.body));
});

router.put("/:id", async (req, res) => {
    // #swagger.tags = ['Serviços']
    // #swagger.summary = 'Atualizar serviço'
    // #swagger.description = 'Atualiza os dados de um serviço específico pelo ID'
    /* #swagger.parameters['id'] = {
        in: 'path',
        description: 'ID do serviço a ser atualizado',
        required: true,
        type: 'integer',
        example: 1
    } */
    /* #swagger.parameters['body'] = {
        in: 'body',
        description: 'Dados atualizados do serviço',
        required: true,
        schema: {
            type: 'object',
            properties: {
                nome: {
                    type: 'string',
                    maxLength: 30,
                    description: 'Nome do serviço',
                    example: 'Lavagem Completa Plus'
                },
                valor: {
                    type: 'number',
                    format: 'float',
                    description: 'Valor do serviço em reais',
                    example: 180.00
                }
            }
        }
    } */
    // #swagger.responses[200] = {
    //   description: 'Serviço atualizado com sucesso',
    //   schema: {
    //     type: 'object',
    //     properties: {
    //       id: { type: 'integer', example: 1 },
    //       nome: { type: 'string', example: 'Lavagem Completa Plus' },
    //       valor: { type: 'number', format: 'float', example: 180.00 }
    //     },
    //     example: { id: 1, nome: 'Lavagem Completa Plus', valor: 180.00 }
    //   }
    // }
    // #swagger.responses[404] = { description: 'Serviço não encontrado' }
    // #swagger.responses[500] = { description: 'Erro ao atualizar serviço' }
    res.json(await editar(req.body, req.params.id));
});

router.delete("/:id", async (req, res) => {
    // #swagger.tags = ['Serviços']
    // #swagger.summary = 'Deletar serviço'
    // #swagger.description = 'Remove um serviço do sistema pelo ID'
    /* #swagger.parameters['id'] = {
        in: 'path',
        description: 'ID do serviço a ser deletado',
        required: true,
        type: 'integer',
        example: 1
    } */
    // #swagger.responses[200] = {
    //   description: 'Serviço deletado com sucesso',
    //   schema: {
    //     type: 'object',
    //     properties: {
    //       message: { type: 'string', example: 'Serviço deletado com sucesso' }
    //     },
    //     example: { message: 'Serviço deletado com sucesso' }
    //   }
    // }
    // #swagger.responses[404] = { description: 'Serviço não encontrado' }
    // #swagger.responses[500] = { description: 'Erro ao deletar serviço' }
    res.json(await deletar(req.params.id));
});

module.exports = router;
