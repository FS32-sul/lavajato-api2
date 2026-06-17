const { criar, buscar, editar, deletar } = require("../controllers/ordensServicosController");

const router = require("express").Router();

router.get("/", async (req, res) => {
    // #swagger.tags = ['Ordens Serviços']
    // #swagger.summary = 'Listar todas as relações ordem-serviço'
    // #swagger.description = 'Retorna uma lista com todas as relações entre ordens e serviços cadastradas no sistema'
    // #swagger.responses[200] = {
    //   description: 'Lista de ordens-serviços retornada com sucesso',
    //   schema: {
    //     type: 'array',
    //     items: {
    //       type: 'object',
    //       properties: {
    //         id: { type: 'integer', example: 1 },
    //         ordem_id: { type: 'integer', example: 1 },
    //         servico_id: { type: 'integer', example: 1 },
    //         funcionario_id: { type: 'integer', example: 1 }
    //       }
    //     }
    //   },
    //   example: [
    //     { id: 1, ordem_id: 1, servico_id: 1, funcionario_id: 1 },
    //     { id: 2, ordem_id: 1, servico_id: 2, funcionario_id: 2 },
    //     { id: 3, ordem_id: 2, servico_id: 1, funcionario_id: 1 }
    //   ]
    // }
    // #swagger.responses[500] = { description: 'Erro ao buscar ordens-serviços' }
    res.json(await buscar());
});

router.post("/", async (req, res) => {
    // #swagger.tags = ['Ordens Serviços']
    // #swagger.summary = 'Criar nova relação ordem-serviço'
    // #swagger.description = 'Associa um serviço a uma ordem de serviço com um funcionário responsável'
    /* #swagger.parameters['body'] = {
        in: 'body',
        description: 'Dados da relação ordem-serviço a ser criada',
        required: true,
        schema: {
            type: 'object',
            required: ['ordem_id', 'servico_id', 'funcionario_id'],
            properties: {
                ordem_id: {
                    type: 'integer',
                    description: 'ID da ordem',
                    example: 1
                },
                servico_id: {
                    type: 'integer',
                    description: 'ID do serviço',
                    example: 1
                },
                funcionario_id: {
                    type: 'integer',
                    description: 'ID do funcionário responsável',
                    example: 1
                }
            }
        }
    } */
    // #swagger.responses[200] = {
    //   description: 'Relação ordem-serviço criada com sucesso',
    //   schema: {
    //     type: 'object',
    //     properties: {
    //       id: { type: 'integer', example: 1 },
    //       ordem_id: { type: 'integer', example: 1 },
    //       servico_id: { type: 'integer', example: 1 },
    //       funcionario_id: { type: 'integer', example: 1 }
    //     },
    //     example: { id: 1, ordem_id: 1, servico_id: 1, funcionario_id: 1 }
    //   }
    // }
    // #swagger.responses[400] = { description: 'Dados inválidos ou incompletos' }
    // #swagger.responses[500] = { description: 'Erro ao criar relação ordem-serviço' }
    res.json(await criar(req.body));
});

router.put("/:id", async (req, res) => {
    // #swagger.tags = ['Ordens Serviços']
    // #swagger.summary = 'Atualizar relação ordem-serviço'
    // #swagger.description = 'Atualiza os dados de uma relação ordem-serviço específica pelo ID'
    /* #swagger.parameters['id'] = {
        in: 'path',
        description: 'ID da relação ordem-serviço a ser atualizada',
        required: true,
        type: 'integer',
        example: 1
    } */
    /* #swagger.parameters['body'] = {
        in: 'body',
        description: 'Dados atualizados da relação ordem-serviço',
        required: true,
        schema: {
            type: 'object',
            properties: {
                ordem_id: {
                    type: 'integer',
                    description: 'ID da ordem',
                    example: 1
                },
                servico_id: {
                    type: 'integer',
                    description: 'ID do serviço',
                    example: 1
                },
                funcionario_id: {
                    type: 'integer',
                    description: 'ID do funcionário responsável',
                    example: 1
                }
            }
        }
    } */
    // #swagger.responses[200] = {
    //   description: 'Relação ordem-serviço atualizada com sucesso',
    //   schema: {
    //     type: 'object',
    //     properties: {
    //       id: { type: 'integer', example: 1 },
    //       ordem_id: { type: 'integer', example: 1 },
    //       servico_id: { type: 'integer', example: 1 },
    //       funcionario_id: { type: 'integer', example: 1 }
    //     },
    //     example: { id: 1, ordem_id: 1, servico_id: 1, funcionario_id: 1 }
    //   }
    // }
    // #swagger.responses[404] = { description: 'Relação ordem-serviço não encontrada' }
    // #swagger.responses[500] = { description: 'Erro ao atualizar relação ordem-serviço' }
    res.json(await editar(req.body, req.params.id));
});

router.delete("/:id", async (req, res) => {
    // #swagger.tags = ['Ordens Serviços']
    // #swagger.summary = 'Deletar relação ordem-serviço'
    // #swagger.description = 'Remove uma relação ordem-serviço do sistema pelo ID'
    /* #swagger.parameters['id'] = {
        in: 'path',
        description: 'ID da relação ordem-serviço a ser deletada',
        required: true,
        type: 'integer',
        example: 1
    } */
    // #swagger.responses[200] = {
    //   description: 'Relação ordem-serviço deletada com sucesso',
    //   schema: {
    //     type: 'object',
    //     properties: {
    //       message: { type: 'string', example: 'Relação ordem-serviço deletada com sucesso' }
    //     },
    //     example: { message: 'Relação ordem-serviço deletada com sucesso' }
    //   }
    // }
    // #swagger.responses[404] = { description: 'Relação ordem-serviço não encontrada' }
    // #swagger.responses[500] = { description: 'Erro ao deletar relação ordem-serviço' }
    res.json(await deletar(req.params.id));
});

module.exports = router;
