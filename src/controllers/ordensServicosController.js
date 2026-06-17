const { PRISMACLIENT } = require("../utils");

async function buscar() {
    try {
        return await PRISMACLIENT.ordens_servicos.findMany({
            orderBy: {
                id: "asc"
            },
            include: {
                ordens: true,
                servicos: true,
                funcionarios: true
            }
        });
    } catch (error) {
        return {
            tipo: "error",
            mensagem: `Erro: ${error.message}`
        }
    }
}

async function criar(dados) {
    try {
        const req = await PRISMACLIENT.ordens_servicos.create({
            data: dados
        });

        if (req.id) {
            return {
                tipo: "success",
                mensagem: "Registro criado com sucesso"
            }
        } else {
            return {
                tipo: "warning",
                mensagem: "Ocorreu um problema"
            }
        }

    } catch (error) {
        return {
            tipo: "error",
            mensagem: `Erro: ${error.message}`
        }
    }
}

async function editar(dados, id) {
    try {
        const req = await PRISMACLIENT.ordens_servicos.update({
            data: dados,
            where: {
                id: Number(id)
            }
        });

        if (req.id) {
            return {
                tipo: "success",
                mensagem: "Registro atualizado com sucesso"
            }
        } else {
            return {
                tipo: "warning",
                mensagem: "Ocorreu um problema"
            }
        }

    } catch (error) {
        return {
            tipo: "error",
            mensagem: `Erro: ${error.message}`
        }
    }
}

async function deletar(id) {
    try {
        await PRISMACLIENT.ordens_servicos.delete({
            where: {
                id: Number(id)
            }
        });
        return {
            tipo: "success",
            mensagem: "Registro deletado com sucesso"
        }
    } catch (error) {
        return {
            tipo: "error",
            mensagem: `Erro: ${error.message}`
        }
    }
}

module.exports = {
    buscar,
    criar,
    editar,
    deletar
};
