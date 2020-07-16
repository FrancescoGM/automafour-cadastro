const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('src/database/database.db')

db.serialize(() => {
    db.run(`
    CREATE TABLE IF NOT EXISTS clientes (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        ativo TEXT,
        usar_venda TEXT,
        nome_empresa TEXT,
        nome_fantasia TEXT,
        regime_tributario TEXT,
        cnpj TEXT,
        inscricao_estadual TEXT,
        fundacao TEXT,
        tipo_pessoa TEXT,
        tipo_contribuinte TEXT,
        permite_cediario TEXT,
        permite_cheque TEXT,
        endereco_cep TEXT,
        endereco_endereco TEXT,
        endereco_numero TEXT,
        endereco_bairro TEXT,
        endereco_cidade TEXT,
        endereco_codigo_nfe TEXT,
        endereco_estado TEXT,
        endereco_estado_id TEXT,
        endereco_proxima_revisao TEXT,
        cobranca_cep TEXT,
        cobranca_endereco TEXT,
        cobranca_numero TEXT,
        cobranca_bairro TEXT,
        cobranca_cidade TEXT,
        cobranca_codigo_nfe TEXT,
        cobranca_estado TEXT,
        cobranca_estado_id TEXT,
        cobranca_proxima_revisao TEXT,
        telefone_um TEXT,
        telefone_dois TEXT,
        fax TEXT,
        email TEXT,
        inscricao_municipal TEXT,
        renda TEXT,
        limite_original TEXT,
        tipo_cliente TEXT,
        lista_tipo_cliente TEXT,
        ramo TEXT,
        check_Check TEXT,
        vendedor TEXT,
        lista_vendedor TEXT,
        representante TEXT,
        lista_representante TEXT,
        observacao_um TEXT,
        observacao_dois TEXT,
        observacao_cobranca TEXT
        );
        `)
})

module.exports = db