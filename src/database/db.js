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
        fundacao INTEGER,
        tipo_pessoa TEXT,
        tipo_contribuinte TEXT,
        permite_cediario BOOLEAN,
        permite_cheque BOOLEAN,
        endereco_cep INTEGER,
        endereco_endereco TEXT,
        endereco_numero INTEGER,
        endereco_bairro TEXT,
        endereco_cidade TEXT,
        endereco_codigo_nfe INTEGER,
        endereco_estado TEXT,
        endereco_proxima_revisao INTEGER,
        cobranca_cep INTEGER,
        cobranca_endereco TEXT,
        cobranca_numero INTEGER,
        cobranca_bairro TEXT,
        cobranca_cidade TEXT,
        cobranca_codigo_nfe INTEGER,
        cobranca_estado TEXT,
        cobranca_proxima_revisao INTEGER,
        telefone_um TEXT,
        telefone_dois TEXT,
        fax INTEGER,
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
