# Trabalho Final - Integração Contínua com GitHub Actions

## Objetivo
Implementar uma pipeline de Integração Contínua (CI) utilizando GitHub Actions para execução automatizada de testes em um projeto JavaScript.

## Tecnologias Utilizadas
- Node.js
- Mocha
- C8 (Code Coverage)
- GitHub Actions

## Estrutura do Projeto

```text
src/
 └── servicoDePagamento.js

test/
 └── servicoDePagamento.test.js
```

## Execução Local

Instalar dependências:

```bash
npm install
```

Executar testes:

```bash
npm test
```

Gerar cobertura:

```bash
npm run coverage
```

## Pipeline

A pipeline é executada de três formas:

### Push
Executa automaticamente a cada envio para as branches main ou master.

### Execução Manual
Disponível através do botão "Run Workflow" na aba Actions do GitHub.

### Execução Agendada
Executa automaticamente toda segunda-feira às 12:00 UTC.

## Artefatos

Após cada execução, o relatório de cobertura é armazenado como artefato da pipeline e pode ser baixado pela aba Actions.

## Conceitos Aplicados

- Continuous Integration (CI)
- Automação de Testes
- Cobertura de Código
- Versionamento com Git
- GitHub Actions
- Armazenamento de Artefatos
