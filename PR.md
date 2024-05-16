# Teste Engenharia WEB 2024

## Tratamento de dados

Foi feito um tratamento de dados do ficheiro _csv_ que consistiu em:

1. Remover os campos vazios;
2. Alterar o campo "idcontrato" para "\_id";
3. Passar de ficheiro _csv_ para um JSON Array para facilitar na importação da base de dados;

Estas alterações foram processadas através do script "script.py".

## Queries (warm-up)

### Quantos registos estão na base de dados;

```
db.contratos.countDocuments();
```

### Quantos registos de contratos têm o tipo de procedimento com valor "Ajuste Direto Regime Geral"?

```
db.contratos.find({tipoprocedimento: "Ajuste Direto Regime Geral"}).count();
```

### Qual a lista de entidades comunicantes (ordenada alfabeticamente e sem repetições)?

```
db.contratos.distinct("entidade_comunicante").sort();
```

### Qual a distribuição de contratos por tipo de procedimento (quantos contratos tem cada tipo de procedimento)?

```
db.contratos.aggregate([
    {
        $group: {
            _id: "$tipoprocedimento",
            count: { $sum: 1 }
        }
    },
    {
        $project: {
            _id: 0,
            tipoprocedimento: "$_id",
            count: 1
        }
    },
    {
        $sort: {
            count: -1
        }
    }
]);
```

### Qual o montante global por entidade comunicante (somatório dos contratos associados a uma entidade)?

```
db.contratos.aggregate([
    {
        $group: {
            _id: "$entidade_comunicante",
            count: { $sum: 1 }
        }
    },
    {
        $project: {
            _id: 0,
            entidade_comunicante: "$_id",
            total: "$count"
        }
    },
    {
        $sort: {
            total: -1
        }
    }
]);
```

## Presistência de Dados

A presistência de dados foi feita através de MongoDB

## Backend

Foi desenvolvido em Express node.js.

## Frontend

Framework React.

## Execução da aplicação

### Método 1

Através do docker. (Mas a BD não é povoada nem os dados sao tratados)

```
docker-compose up --build -d
```

### Método 2

#### Tratar primeiro os dados através da diretoria principal.

```
python3 ex1/script.py ex1/contratos2024.csv
```

#### Importar base de dados

Importar o ficheiro com os dados tratados "contratos.json" para o mongodb.

#### Executar API.

```
cd ex1/api/
```

```
npm i
```

```
npm start
```

#### Voltar a diretoria principal

```
cd ../..
```

#### Executar frontend

```
cd ex2/
```

```
npm i
```

```
npm start
```
