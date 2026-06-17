const {  criar, buscar, editar, deletar } = require("../controllers/carrosController");

const router = require("express").Router();

router.get("/", async (req, res) => {
    // #swagger.tags = ['Carros']
    // #swagger.summary = 'Listar todos os carros'
    // #swagger.description = 'Retorna uma lista com todos os carros cadastrados no sistema'
    // #swagger.responses[200] = {
    //   description: 'Lista de carros retornada com sucesso',
    //   schema: {
    //     type: 'array',
    //     items: {
    //       type: 'object',
    //       properties: {
    //         id: { type: 'integer', example: 1 },
    //         modelo: { type: 'string', example: 'Fiat Uno' },
    //         placa: { type: 'string', example: 'ABC-1234' },
    //         cor: { type: 'string', example: 'Prata' },
    //         telefone: { type: 'string', example: '(11) 99999-0000' }
    //       }
    //     }
    //   },
    //   example: [
    //     { id: 1, modelo: 'Fiat Uno', placa: 'ABC-1234', cor: 'Prata', telefone: '(11) 99999-0000' },
    //     { id: 2, modelo: 'Honda Civic', placa: 'XYZ-5678', cor: 'Preto', telefone: '(11) 98888-0000' },
    //     { id: 3, modelo: 'Toyota Corolla', placa: 'DEF-9012', cor: 'Branco', telefone: '(11) 97777-0000' }
    //   ]
    // }
    // #swagger.responses[500] = { description: 'Erro ao buscar carros' }
    res.json(await buscar());
});

router.post("/", async (req, res) => {
    // #swagger.tags = ['Carros']
    // #swagger.summary = 'Criar novo carro'
    // #swagger.description = 'Cria um novo carro no sistema'
    /* #swagger.parameters['body'] = {
        in: 'body',
        description: 'Dados do carro a ser criado',
        required: true,
        schema: {
            type: 'object',
            required: ['modelo', 'placa', 'cor', 'telefone'],
            properties: {
                modelo: {
                    type: 'string',
                    maxLength: 20,
                    description: 'Modelo do carro',
                    example: 'Fiat Uno'
                },
                placa: {
                    type: 'string',
                    maxLength: 10,
                    description: 'Placa do veículo',
                    example: 'ABC-1234'
                },
                cor: {
                    type: 'string',
                    maxLength: 10,
                    description: 'Cor do carro',
                    example: 'Prata'
                },
                telefone: {
                    type: 'string',
                    maxLength: 20,
                    description: 'Telefone do proprietário',
                    example: '(11) 99999-0000'
                }
            }
        }
    } */
    // #swagger.responses[200] = {
    //   description: 'Carro criado com sucesso',
    //   schema: {
    //     type: 'object',
    //     properties: {
    //       id: { type: 'integer', example: 1 },
    //       modelo: { type: 'string', example: 'Fiat Uno' },
    //       placa: { type: 'string', example: 'ABC-1234' },
    //       cor: { type: 'string', example: 'Prata' },
    //       telefone: { type: 'string', example: '(11) 99999-0000' }
    //     },
    //     example: { id: 1, modelo: 'Fiat Uno', placa: 'ABC-1234', cor: 'Prata', telefone: '(11) 99999-0000' }
    //   }
    // }
    // #swagger.responses[400] = { description: 'Dados inválidos ou incompletos' }
    // #swagger.responses[500] = { description: 'Erro ao criar carro' }
    res.json(await criar(req.body));
});

router.put("/:id", async (req, res) => {
    // #swagger.tags = ['Carros']
    // #swagger.summary = 'Atualizar carro'
    // #swagger.description = 'Atualiza os dados de um carro específico pelo ID'
    /* #swagger.parameters['id'] = {
        in: 'path',
        description: 'ID do carro a ser atualizado',
        required: true,
        type: 'integer',
        example: 1
    } */
    /* #swagger.parameters['body'] = {
        in: 'body',
        description: 'Dados atualizados do carro',
        required: true,
        schema: {
            type: 'object',
            properties: {
                modelo: {
                    type: 'string',
                    maxLength: 20,
                    description: 'Modelo do carro',
                    example: 'Fiat Uno'
                },
                placa: {
                    type: 'string',
                    maxLength: 10,
                    description: 'Placa do veículo',
                    example: 'ABC-1234'
                },
                cor: {
                    type: 'string',
                    maxLength: 10,
                    description: 'Cor do carro',
                    example: 'Prata'
                },
                telefone: {
                    type: 'string',
                    maxLength: 20,
                    description: 'Telefone do proprietário',
                    example: '(11) 99999-0000'
                }
            }
        }
    } */
    // #swagger.responses[200] = {
    //   description: 'Carro atualizado com sucesso',
    //   schema: {
    //     type: 'object',
    //     properties: {
    //       id: { type: 'integer', example: 1 },
    //       modelo: { type: 'string', example: 'Fiat Uno' },
    //       placa: { type: 'string', example: 'ABC-1234' },
    //       cor: { type: 'string', example: 'Prata' },
    //       telefone: { type: 'string', example: '(11) 99999-0000' }
    //     },
    //     example: { id: 1, modelo: 'Fiat Uno', placa: 'ABC-1234', cor: 'Prata', telefone: '(11) 99999-0000' }
    //   }
    // }
    // #swagger.responses[404] = { description: 'Carro não encontrado' }
    // #swagger.responses[500] = { description: 'Erro ao atualizar carro' }
    res.json(await editar(req.body, req.params.id));
});

router.delete("/:id", async (req, res) => {
    // #swagger.tags = ['Carros']
    // #swagger.summary = 'Deletar carro'
    // #swagger.description = 'Remove um carro do sistema pelo ID'
    /* #swagger.parameters['id'] = {
        in: 'path',
        description: 'ID do carro a ser deletado',
        required: true,
        type: 'integer',
        example: 1
    } */
    // #swagger.responses[200] = {
    //   description: 'Carro deletado com sucesso',
    //   schema: {
    //     type: 'object',
    //     properties: {
    //       message: { type: 'string', example: 'Carro deletado com sucesso' }
    //     },
    //     example: { message: 'Carro deletado com sucesso' }
    //   }
    // }
    // #swagger.responses[404] = { description: 'Carro não encontrado' }
    // #swagger.responses[500] = { description: 'Erro ao deletar carro' }
    res.json(await deletar(req.params.id));
});

module.exports = router;
