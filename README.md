# 💰 My Money Friend - Gestão Financeira Premium

[![Bun](https://img.shields.io/badge/Bun-000000?style=for-the-badge&logo=bun&logoColor=white)](https://bun.sh)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org)
[![Neon](https://img.shields.io/badge/Neon_Serverless-00E599?style=for-the-badge&logo=neon&logoColor=black)](https://neon.tech)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com)

**My Money Friend** é uma plataforma de gestão financeira full-stack de alta performance, projetada com uma estética moderna e suporte nativo a temas (Light/Dark). Construída inteiramente sobre o ecossistema **Bun**, a aplicação oferece um controle patrimonial completo em tempo real utilizando um backend em **Elysia** e um frontend em **React**.

---

## ✨ Funcionalidades Principais

- 📊 **Dashboard Dinâmico**: Visualização instantânea de fluxos de caixa e distribuição de despesas.
- 🌓 **Tematização Híbrida**: Suporte total a modo claro e escuro em todos os componentes e gráficos.
- 🏦 **Multi-Contas**: Gerenciamento unificado de saldos bancários, carteiras e cartões de crédito.
- 🎯 **Engenharia de Sonhos**: Definição e acompanhamento de metas financeiras com barra de progresso premium.
- 🏷️ **Taxonomia Customizada**: Criação de categorias e ícones personalizados para sua rotina.
- 💡 **Estratégia Financeira**: Implementação nativa da regra 50/30/20 para otimização de gastos.
- 🛡️ **Segurança e RBAC**: Autenticação via API e Controle de Acessos com Hierarquia de Perfis.
- 🔌 **Conexão Segura**: Backend integrado ao banco de dados Neon Serverless.

---

## 🚀 Tecnologias

### **Frontend**
- **Bun & React 18**: Runtime e UI de ultra performance.
- **Vite**: Bundle e HMR ultra-rápido.
- **Tailwind CSS**: Estilização baseada em tokens com suporte a `dark:`.
- **Framer Motion**: Micro-animações e transições de página fluidas.
- **Lucide React**: Biblioteca de ícones consistente e minimalista.
- **Recharts**: Gráficos complexos e responsivos adaptáveis ao tema.

### **Backend**
- **Bun (ElysiaJS)**: Framework web performante e tipado para Bun.
- **TypeScript**: Segurança de tipos em todo o fluxo de dados.
- **PostgreSQL (Neon)**: Banco de dados serverless de baixa latência.

---

## 🛠️ Como Iniciar

### **Requisitos**
- **Bun** (v1.1 ou superior)
- Instância no [Neon.tech](https://neon.tech)

### **Configuração do Ambiente**
Crie um arquivo `.env` dentro da pasta `src/server`:
```env
DATABASE_URL="postgresql://usuario:senha@localhost:5432/my_money_friend?schema=public"
PORT=3001
FRONTEND_URL="http://localhost:5173"
JWT_SECRET="super-secret-key-change-me-in-production"
```

### **Passo a Passo**

#### **1. Backend (Bun + Elysia + Prisma)**
```bash
cd src/server
bun install                     # Instala dependências do servidor
bunx prisma db push             # Sincroniza o schema com o banco de dados
bun dev                         # Inicia o servidor na porta 3001
```

#### **2. Frontend (React + Bun/Vite)**
```bash
# Na raiz do projeto (onde está o frontend)
bun install                     # Instala dependências do client
bun dev                         # Inicia o frontend em http://localhost:5173
```

---

## 🏗️ Estrutura do Projeto

```text
├── src/
│   ├── client/            # Frontend React (Gerenciado pelo Bun)
│   │   ├── components/    # Componentes UI (Reutilizáveis)
│   │   ├── hooks/         # Custom Hooks (Lógica de estado)
│   │   ├── pages/         # Páginas da aplicação (Roteamento)
│   │   ├── lib/           # Utilitários, API client e Auth
│   │   ├── App.tsx        # Definição de rotas principais
│   │   └── main.tsx       # Entry point do React
│   └── server/            # Backend Bun (Elysia)
│       ├── src/           # Código fonte do servidor (TypeScript)
│       ├── test/          # Testes do backend
│       └── package.json   # Configuração do servidor
├── index.html             # Entry point HTML do Vite
├── package.json           # Configuração de dependências do root
└── bun.lock               # Lockfile do Bun
```

---

> Desenvolvido com ❤️ por [CashFlow Premium Finance] · 2026
