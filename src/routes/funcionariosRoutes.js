const { criar, buscar, editar, deletar } = require("../controllers/funcionariosController");

const router = require("express").Router();

router.get("/", async (req, res) => {
    // #swagger.tags = ['Funcionários']
    // #swagger.summary = 'Listar todos os funcionários'
    // #swagger.description = 'Retorna uma lista com todos os funcionários cadastrados no sistema'
    // #swagger.responses[200] = {
    //   description: 'Lista de funcionários retornada com sucesso',
    //   schema: {
    //     type: 'array',
    //     items: {
    //       type: 'object',
    //       properties: {
    //         id: { type: 'integer', example: 1 },
    //         nome: { type: 'string', example: 'João Silva' },
    //         telefone: { type: 'string', example: '(11) 99999-0000' }
    //       }
    //     }
    //   },
    //   example: [
    //     { id: 1, nome: 'João Silva', telefone: '(11) 99999-0000' },
    //     { id: 2, nome: 'Maria Santos', telefone: '(11) 98888-0000' },
    //     { id: 3, nome: 'Pedro Oliveira', telefone: '(11) 97777-0000' }
    //   ]
    // }
    // #swagger.responses[500] = { description: 'Erro ao buscar funcionários' }
    res.json(await buscar());
});

router.post("/", async (req, res) => {
    // #swagger.tags = ['Funcionários']
    // #swagger.summary = 'Criar novo funcionário'
    // #swagger.description = 'Cria um novo funcionário no sistema'
    /* #swagger.parameters['body'] = {
        in: 'body',
        description: 'Dados do funcionário a ser criado',
        required: true,
        schema: {
            type: 'object',
            required: ['nome', 'telefone'],
            properties: {
                nome: {
                    type: 'string',
                    maxLength: 100,
                    description: 'Nome do funcionário',
                    example: 'João Silva'
                },
                telefone: {
                    type: 'string',
                    maxLength: 20,
                    description: 'Telefone do funcionário',
                    example: '(11) 99999-0000'
                }
            }
        }
    } */
    // #swagger.responses[200] = {
    //   description: 'Funcionário criado com sucesso',
    //   schema: {
    //     type: 'object',
    //     properties: {
    //       id: { type: 'integer', example: 1 },
    //       nome: { type: 'string', example: 'João Silva' },
    //       telefone: { type: 'string', example: '(11) 99999-0000' }
    //     },
    //     example: { id: 1, nome: 'João Silva', telefone: '(11) 99999-0000' }
    //   }
    // }
    // #swagger.responses[400] = { description: 'Dados inválidos ou incompletos' }
    // #swagger.responses[500] = { description: 'Erro ao criar funcionário' }
    res.json(await criar(req.body));
});

router.put("/:id", async (req, res) => {
    // #swagger.tags = ['Funcionários']
    // #swagger.summary = 'Atualizar funcionário'
    // #swagger.description = 'Atualiza os dados de um funcionário específico pelo ID'
    /* #swagger.parameters['id'] = {
        in: 'path',
        description: 'ID do funcionário a ser atualizado',
        required: true,
        type: 'integer',
        example: 1
    } */
    /* #swagger.parameters['body'] = {
        in: 'body',
        description: 'Dados atualizados do funcionário',
        required: true,
        schema: {
            type: 'object',
            properties: {
                nome: {
                    type: 'string',
                    maxLength: 100,
                    description: 'Nome do funcionário',
                    example: 'João Silva'
                },
                telefone: {
                    type: 'string',
                    maxLength: 20,
                    description: 'Telefone do funcionário',
                    example: '(11) 99999-0000'
                }
            }
        }
    } */
    // #swagger.responses[200] = {
    //   description: 'Funcionário atualizado com sucesso',
    //   schema: {
    //     type: 'object',
    //     properties: {
    //       id: { type: 'integer', example: 1 },
    //       nome: { type: 'string', example: 'João Silva' },
    //       telefone: { type: 'string', example: '(11) 99999-0000' }
    //     },
    //     example: { id: 1, nome: 'João Silva', telefone: '(11) 99999-0000' }
    //   }
    // }
    // #swagger.responses[404] = { description: 'Funcionário não encontrado' }
    // #swagger.responses[500] = { description: 'Erro ao atualizar funcionário' }
    res.json(await editar(req.body, req.params.id));
});

router.delete("/:id", async (req, res) => {
    // #swagger.tags = ['Funcionários']
    // #swagger.summary = 'Deletar funcionário'
    // #swagger.description = 'Remove um funcionário do sistema pelo ID'
    /* #swagger.parameters['id'] = {
        in: 'path',
        description: 'ID do funcionário a ser deletado',
        required: true,
        type: 'integer',
        example: 1
    } */
    // #swagger.responses[200] = {
    //   description: 'Funcionário deletado com sucesso',
    //   schema: {
    //     type: 'object',
    //     properties: {
    //       message: { type: 'string', example: 'Funcionário deletado com sucesso' }
    //     },
    //     example: { message: 'Funcionário deletado com sucesso' }
    //   }
    // }
    // #swagger.responses[404] = { description: 'Funcionário não encontrado' }
    // #swagger.responses[500] = { description: 'Erro ao deletar funcionário' }
    res.json(await deletar(req.params.id));
});

module.exports = router;
