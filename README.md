# WebdriverIOWithScreenplay
![WebdriverIO](https://img.shields.io/badge/WebdriverIO-EA5906?style=for-the-badge&logo=webdriverio&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)

## 📝 Projeto

Projeto de automação de testes end-to-end desenvolvido com:
- **Framework**: WebdriverIO com TypeScript
- **Site Testado**: [Serverest Front](https://front.serverest.dev/)
- **Padrão de Projeto**: Screenplay Pattern
  - Atores (Actors): Representam usuários do sistema
  - Interações(Interactions): Representam ações realizadas pelos atores no sistema
  - Tarefas (Tasks): Ações que os atores executam
  - Questões (Questions): Validações dos resultados

## ✨ Características

- 🌐 Testes E2E com WebdriverIO
- 📝 TypeScript para melhor tipagem e manutenção
- 🎬 Padrão Screenplay para melhor organização
- 🤖 Geração de dados fake com @faker-js/faker

## 🧪 Cenários de Testes

### Login
- ✅ Login com credenciais válidas
  - Validar acesso à home após login bem-sucedido
- ❌ Login com credenciais inválidas
  - Validar mensagem de erro para credenciais incorretas

### Produtos
- ✅ Criação de produto
  - Validar criação bem-sucedida de novo produto
- ❌ Produto duplicado
  - Validar mensagem de erro ao tentar criar produto existente

  ### Usuarios
- ✅ Criação de usuario
  - Validar criação bem-sucedida de novo usuario
- ❌ Usuario duplicado
  - Validar mensagem de erro ao tentar criar usuario existente

## 📁 Estrutura do Projeto

```
test/
│
├── actors/                     # Atores que interagem com o sistema
│   └── AdminUser.ts            # Representa um usuário administrador
│
├── interactions                #Interações que os atores podem realizar no sistema
│   ├── ClickButton.ts
│   │
│   └── FillInput.ts
│
├── tasks/                      # Ações que os atores podem executar
│   ├── CreateProduct.ts        # Criação de produtos
│   ├── CreateUsers.ts          # Criação de usuarios
│   └── LoginAsAdmin.ts         # Login como administrador         
│
├── questions/                  # Validações e verificações
│   └── IsPageVisible.ts
│
├── report                      # Local onde é salvo o relatório html gerado após execução dos testes
│   └── index.html
│
├── tests/                      # Testes organizados por funcionalidade
│   ├── Login
│   │   └── login.spec.ts
│   ├── Product
│   │   └── product.spec.ts
│   └── Users
│       └── users.spec.ts
│
```

## ⚙️ Pré-requisitos

| Ferramenta | Versão  |
|------------|---------|
| Node.js    | ≥ 18.x  |
| npm        | ≥ 9.x   |
| TypeScript | ≥ 5.x   |

### Dependências Principais
```json
{
  "@wdio/cli": "^8.x",
  "@wdio/local-runner": "^8.x",
  "@wdio/mocha-framework": "^8.x",
  "@wdio/spec-reporter": "^8.x",
  "typescript": "^5.x"
}
```

## 🚀 Começando

1. **Clone o repositório**
```bash
git clone <url-do-repositorio>
cd WebdriverIOWithScreenplay
```

2. **Instale as dependências**
```bash
npm install
```

## ▶️ Executando os Testes

### Todos os testes
```bash
npx wdio run ./wdio.conf.ts
```

### Testes específicos
```bash
npx wdio run ./wdio.conf.ts --spec ./test/specs/login.spec.ts
```

### Modo Debug
```bash
npx wdio run ./wdio.conf.ts --debug
```

## 📋 Scripts NPM Disponíveis

```json
{
  "scripts": {
    "test:all": "wdio run ./wdio.conf.ts",
    "test:login": "wdio run ./wdio.conf.ts --spec ./test/specs/Login/login.e2e.ts",
    "test:product": "wdio run ./wdio.conf.ts --spec ./test/specs/Product/product.e2e.ts",
    "test:users": "wdio run ./wdio.conf.ts --spec ./test/specs/Users/users.e2e.ts"
  }
}
```
---
## 🔧 Configuração
O arquivo wdio.conf.ts contém todas as configurações do WebdriverIO, incluindo:

- Configurações do browser
- Timeouts
- Reporters
- Hooks
- Capabilities

---

Desenvolvido com 💜 usando WebdriveIO, TypeScript e Screenplay Pattern