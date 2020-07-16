const db = require('./database/db')

module.exports.editClient = (req, res) => {
    db.all(`SELECT * FROM clientes WHERE id = ${req.params.id};`, function(err, rows) {
        if (err) {
            return console.log(err)
        } else {
            res.render('pages/edit-client', { client: rows[0] })
        }
    })
}

module.exports.deleteClient = (req, res) => {
    db.all(`
    DELETE FROM clientes WHERE id = ${req.params.id};
    `, function(err, rows) {
        if (err) {
            return console.log(err)
        } else {
            return res.redirect('/clients')
        }
    })
}

module.exports.showClients = (req, res) => {
    db.all(`
    SELECT * FROM clientes;
    `, function(err, rows) {
        if (err) {
            return console.log(err)
        } else {
            res.render('pages/table-clients', { clients: rows })
        }
    })
}

module.exports.showClient = (req, res) => {
    db.all(`
        SELECT * FROM clientes WHERE id = ${req.params.id};
        `, function(err, rows) {
        if (err) {
            return console.log(err)
        } else {
            res.render('pages/client', { client: rows[0] })
        }
    })
}

module.exports.registerClient = (req, res) => {
    const values = [
        'Sim',
        req.body.usar_venda,
        req.body.nome_empresa,
        req.body.nome_fantasia,
        req.body.regime_tributario,
        req.body.cnpj,
        req.body.inscricao_estadual,
        req.body.fundacao,
        req.body.tipo_pessoa,
        req.body.tipo_contribuinte,
        req.body.permite_cediario == undefined ? 'Não' : 'Sim',
        req.body.permite_cheque == undefined ? 'Não' : 'Sim',
        req.body.endereco_cep,
        req.body.endereco_endereco,
        req.body.endereco_numero,
        req.body.endereco_bairro,
        typeof req.body.uf[0] != Number ? req.body.city[0] : '',
        req.body.endereco_codigo_nfe,
        req.body.state[0],
        typeof req.body.uf[0] == Number ? req.body.uf[0] : '',
        req.body.endereco_proxima_revisao,
        req.body.cobranca_cep,
        req.body.cobranca_endereco,
        req.body.cobranca_numero,
        req.body.cobranca_bairro,
        typeof req.body.uf[1] != Number ? req.body.city[1] : '',
        req.body.cobranca_codigo_nfe,
        req.body.state[1],
        typeof req.body.uf[1] == Number ? req.body.uf[1] : '',
        req.body.cobranca_proxima_revisao,
        req.body.telefone_um,
        req.body.telefone_dois,
        req.body.fax,
        req.body.email,
        req.body.inscricao_municipal,
        req.body.renda,
        req.body.limite_original,
        req.body.tipo_cliente,
        req.body.lista_tipo_cliente,
        req.body.ramo,
        req.body.check_Check,
        req.body.vendedor,
        req.body.vendedor,
        req.body.representante,
        req.body.representante,
        req.body.observacao_um,
        req.body.observacao_dois,
        req.body.observacao_cobranca
    ]
    console.log(values)
    const query = `
        INSERT INTO clientes(
            ativo,
            usar_venda,
            nome_empresa,
            nome_fantasia,
            regime_tributario,
            cnpj,
            inscricao_estadual,
            fundacao,
            tipo_pessoa,
            tipo_contribuinte,
            permite_cediario,
            permite_cheque,
            endereco_cep,
            endereco_endereco,
            endereco_numero,
            endereco_bairro,
            endereco_cidade,
            endereco_codigo_nfe,
            endereco_estado,
            endereco_estado_id,
            endereco_proxima_revisao,
            cobranca_cep,
            cobranca_endereco,
            cobranca_numero,
            cobranca_bairro,
            cobranca_cidade,
            cobranca_codigo_nfe,
            cobranca_estado,
            cobranca_estado_id,
            cobranca_proxima_revisao,
            telefone_um,
            telefone_dois,
            fax,
            email,
            inscricao_municipal,
            renda,
            limite_original,
            tipo_cliente,
            lista_tipo_cliente,
            ramo,
            check_Check,
            vendedor,
            lista_vendedor,
            representante,
            lista_representante,
            observacao_um,
            observacao_dois,
            observacao_cobranca
        )
        VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ? );
        `

    function afterInsertData(err) {
        if (err) {
            return console.log(err)
        }
        return res.redirect("/")
    }
    db.run(query, values, afterInsertData)
}
module.exports.updateClient = (req, res) => {
    const values = [
        req.body.ativo,
        req.body.usar_venda,
        req.body.nome_empresa,
        req.body.nome_fantasia,
        req.body.regime_tributario,
        req.body.cnpj,
        req.body.inscricao_estadual,
        req.body.fundacao,
        req.body.tipo_pessoa,
        req.body.tipo_contribuinte,
        req.body.permite_cediario == undefined ? 'Não' : 'Sim',
        req.body.permite_cheque == undefined ? 'Não' : 'Sim',
        req.body.endereco_cep,
        req.body.endereco_endereco,
        req.body.endereco_numero,
        req.body.endereco_bairro,
        typeof req.body.uf[0] != Number ? req.body.city[0] : '',
        req.body.endereco_codigo_nfe,
        req.body.state[0],
        typeof req.body.uf[0] == Number ? req.body.uf[0] : '',
        req.body.endereco_proxima_revisao,
        req.body.cobranca_cep,
        req.body.cobranca_endereco,
        req.body.cobranca_numero,
        req.body.cobranca_bairro,
        typeof req.body.uf[1] != Number ? req.body.city[1] : '',
        req.body.cobranca_codigo_nfe,
        req.body.state[1],
        typeof req.body.uf[1] == Number ? req.body.uf[1] : '',
        req.body.cobranca_proxima_revisao,
        req.body.telefone_um,
        req.body.telefone_dois,
        req.body.fax,
        req.body.email,
        req.body.inscricao_municipal,
        req.body.renda,
        req.body.limite_original,
        req.body.tipo_cliente,
        req.body.lista_tipo_cliente,
        req.body.ramo,
        req.body.check_Check,
        req.body.vendedor,
        req.body.vendedor,
        req.body.representante,
        req.body.representante,
        req.body.observacao_um,
        req.body.observacao_dois,
        req.body.observacao_cobranca
    ]
    const query = `
            UPDATE clientes SET 
            ativo = ?,
            usar_venda = ?,
            nome_empresa = ?,
            nome_fantasia = ?,
            regime_tributario = ?,
            cnpj = ?,
            inscricao_estadual = ?,
            fundacao = ?,
            tipo_pessoa = ?,
            tipo_contribuinte = ?,
            permite_cediario = ?,
            permite_cheque = ?,
            endereco_cep = ?,
            endereco_endereco = ?,
            endereco_numero = ?,
            endereco_bairro = ?,
            endereco_cidade = ?,
            endereco_codigo_nfe = ?,
            endereco_estado = ?,
            endereco_estado_id = ?,
            endereco_proxima_revisao = ?,
            cobranca_cep = ?,
            cobranca_endereco = ?,
            cobranca_numero = ?,
            cobranca_bairro = ?,
            cobranca_cidade = ?,
            cobranca_codigo_nfe = ?,
            cobranca_estado = ?,
            cobranca_estado_id = ?,
            cobranca_proxima_revisao = ?,
            telefone_um = ?,
            telefone_dois = ?,
            fax = ?,
            email = ?,
            inscricao_municipal = ?,
            renda = ?,
            limite_original = ?,
            tipo_cliente = ?,
            lista_tipo_cliente = ?,
            ramo = ?,
            check_Check = ?,
            vendedor = ?,
            lista_vendedor = ?,
            representante = ?,
            lista_representante = ?,
            observacao_um = ?,
            observacao_dois = ?,
            observacao_cobranca = ?
            WHERE id == ${req.params.id};`

    function afterInsertData(err) {
        if (err) {
            return console.log(err)
        }
        return res.redirect("/clients")
    }
    db.run(query, values, afterInsertData)
}