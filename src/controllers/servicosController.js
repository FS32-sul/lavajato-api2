const { PRISMACLIENT } = require("../utils");

async function buscar() {
    try {
        return await PRISMACLIENT.servicos.findMany({ //SELECT * FROM servicos ORDER BY id DESC;
            orderBy: {
                id: "asc"
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
        const req = await PRISMACLIENT.servicos.create({ // INSERT INTO servicos .....
            data: dados
        });

        if(req.id){
            return {
                tipo: "success",
                mensagem: "Registro criado com sucesso"
            }
        }else{
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
        const req = await PRISMACLIENT.servicos.update({ // UPDATE servicos .... WHERE id = ..;
            data: dados,
            where: {
                id: Number(id)
            }
        });

        if(req.id){
            return {
                tipo: "success",
                mensagem: "Registro atualizado com sucesso"
            }
        }else{
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
        const req = await PRISMACLIENT.servicos.delete({ // DELETE from servicos WHERE id = ..;
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
}