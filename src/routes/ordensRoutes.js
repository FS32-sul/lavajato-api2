const { criar, buscar, editar, deletar } = require("../controllers/ordensController");

const router = require("express").Router();

router.get("/", async (req, res) => {
    // #swagger.tags = ['Ordens']
    // #swagger.summary = 'Listar todas as ordens'
    // #swagger.description = 'Retorna uma lista com todas as ordens de serviço cadastradas no sistema'
    // #swagger.responses[200] = {
    //   description: 'Lista de ordens retornada com sucesso',
    //   schema: {
    //     type: 'array',
    //     items: {
    //       type: 'object',
    //       properties: {
    //         id: { type: 'integer', example: 1 },
    //         cliente: { type: 'string', example: 'João Silva' },
    //         status: { type: 'string', example: 'pendente' },
    //         data: { type: 'string', format: 'date-time', example: '2026-06-17T10:30:00Z' },
    //         carro_id: { type: 'integer', example: 1 }
    //       }
    //     }
    //   },
    //   example: [
    //     { id: 1, cliente: 'João Silva', status: 'pendente', data: '2026-06-17T10:30:00Z', carro_id: 1 },
    //     { id: 2, cliente: 'Maria Santos', status: 'concluída', data: '2026-06-16T14:15:00Z', carro_id: 2 },
    //     { id: 3, cliente: 'Pedro Oliveira', status: 'em progresso', data: '2026-06-17T08:00:00Z', carro_id: 3 }
    //   ]
    // }
    // #swagger.responses[500] = { description: 'Erro ao buscar ordens' }
    res.json(await buscar());
});

router.post("/", async (req, res) => {
    // #swagger.tags = ['Ordens']
    // #swagger.summary = 'Criar nova ordem'
    // #swagger.description = 'Cria uma nova ordem de serviço no sistema'
    /* #swagger.parameters['body'] = {
        in: 'body',
        description: 'Dados da ordem a ser criada',
        required: true,
        schema: {
            type: 'object',
            required: ['cliente', 'carro_id'],
            properties: {
                cliente: {
                    type: 'string',
                    maxLength: 20,
                    description: 'Nome do cliente',
                    example: 'João Silva'
                },
                carro_id: {
                    type: 'integer',
                    description: 'ID do carro associado à ordem',
                    example: 1
                },
                status: {
                    type: 'string',
                    maxLength: 20,
                    description: 'Status da ordem (padrão: pendente)',
                    example: 'pendente'
                }
            }
        }
    } */
    // #swagger.responses[200] = {
    //   description: 'Ordem criada com sucesso',
    //   schema: {
    //     type: 'object',
    //     properties: {
    //       id: { type: 'integer', example: 1 },
    //       cliente: { type: 'string', example: 'João Silva' },
    //       status: { type: 'string', example: 'pendente' },
    //       data: { type: 'string', format: 'date-time', example: '2026-06-17T10:30:00Z' },
    //       carro_id: { type: 'integer', example: 1 }
    //     },
    //     example: { id: 1, cliente: 'João Silva', status: 'pendente', data: '2026-06-17T10:30:00Z', carro_id: 1 }
    //   }
    // }
    // #swagger.responses[400] = { description: 'Dados inválidos ou incompletos' }
    // #swagger.responses[500] = { description: 'Erro ao criar ordem' }
    res.json(await criar(req.body));
});

router.put("/:id", async (req, res) => {
    // #swagger.tags = ['Ordens']
    // #swagger.summary = 'Atualizar ordem'
    // #swagger.description = 'Atualiza os dados de uma ordem específica pelo ID'
    /* #swagger.parameters['id'] = {
        in: 'path',
        description: 'ID da ordem a ser atualizada',
        required: true,
        type: 'integer',
        example: 1
    } */
    /* #swagger.parameters['body'] = {
        in: 'body',
        description: 'Dados atualizados da ordem',
        required: true,
        schema: {
            type: 'object',
            properties: {
                cliente: {
                    type: 'string',
                    maxLength: 20,
                    description: 'Nome do cliente',
                    example: 'João Silva'
                },
                status: {
                    type: 'string',
                    maxLength: 20,
                    description: 'Status da ordem',
                    example: 'em progresso'
                },
                carro_id: {
                    type: 'integer',
                    description: 'ID do carro associado à ordem',
                    example: 1
                }
            }
        }
    } */
    // #swagger.responses[200] = {
    //   description: 'Ordem atualizada com sucesso',
    //   schema: {
    //     type: 'object',
    //     properties: {
    //       id: { type: 'integer', example: 1 },
    //       cliente: { type: 'string', example: 'João Silva' },
    //       status: { type: 'string', example: 'em progresso' },
    //       data: { type: 'string', format: 'date-time', example: '2026-06-17T10:30:00Z' },
    //       carro_id: { type: 'integer', example: 1 }
    //     },
    //     example: { id: 1, cliente: 'João Silva', status: 'em progresso', data: '2026-06-17T10:30:00Z', carro_id: 1 }
    //   }
    // }
    // #swagger.responses[404] = { description: 'Ordem não encontrada' }
    // #swagger.responses[500] = { description: 'Erro ao atualizar ordem' }
    res.json(await editar(req.body, req.params.id));
});

router.delete("/:id", async (req, res) => {
    // #swagger.tags = ['Ordens']
    // #swagger.summary = 'Deletar ordem'
    // #swagger.description = 'Remove uma ordem do sistema pelo ID'
    /* #swagger.parameters['id'] = {
        in: 'path',
        description: 'ID da ordem a ser deletada',
        required: true,
        type: 'integer',
        example: 1
    } */
    // #swagger.responses[200] = {
    //   description: 'Ordem deletada com sucesso',
    //   schema: {
    //     type: 'object',
    //     properties: {
    //       message: { type: 'string', example: 'Ordem deletada com sucesso' }
    //     },
    //     example: { message: 'Ordem deletada com sucesso' }
    //   }
    // }
    // #swagger.responses[404] = { description: 'Ordem não encontrada' }
    // #swagger.responses[500] = { description: 'Erro ao deletar ordem' }
    res.json(await deletar(req.params.id));
});

module.exports = router;
