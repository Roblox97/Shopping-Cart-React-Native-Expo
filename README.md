# 🛒 Shopping Cart App

Uma aplicação de carrinho de compras desenvolvida com React Native e Expo, permitindo aos usuários visualizar produtos, adicionar/remover itens do carrinho e ver o total da compra.

## 📱 Funcionalidades

- Lista de produtos com preços
- Adicionar produtos ao carrinho
- Remover produtos do carrinho
- Aumentar/diminuir quantidade de cada item
- Visualização do total da compra
- Contador de itens no carrinho
- Navegação entre telas (Home e Cart)

## 🚀 Tecnologias Utilizadas

- **React Native**: Framework para desenvolvimento mobile
- **Expo**: Plataforma para desenvolvimento React Native
- **React Navigation**: Navegação entre telas
  - Native Stack Navigator
- **Context API**: Gerenciamento de estado global
- **Expo Vector Icons**: Ícones utilizados na aplicação
- **React Native Safe Area Context**: Tratamento de área segura

## 📦 Estrutura do Projeto

```
src/
  ├── components/
  │   ├── CardItem/     # Componente do item no carrinho
  │   ├── Header/       # Cabeçalho com navegação
  │   └── Product/      # Card de produto na listagem
  ├── context/
  │   └── CartContext   # Contexto do carrinho
  ├── pages/
  │   ├── Home/         # Página inicial com lista de produtos
  │   └── Cart/         # Página do carrinho
  └── routes/
      └── index.js      # Configuração de rotas
```

## 💡 Principais Recursos

### Context API
- Gerenciamento do estado do carrinho
- Cálculo de totais
- Controle de quantidade de itens

### Navegação
- Stack Navigation entre as telas
- Header personalizado
- Contador de itens no ícone do carrinho

### Estilização
- StyleSheet para estilização dos componentes
- Design responsivo
- Interface intuitiva

## 🏃 Como Executar

1. Clone o repositório
2. Instale as dependências:
```bash
npm install
```

3. Inicie o projeto:
```bash
npx expo start
```

Desenvolvido com 💙 para estudo e prática de React Native com Expo.