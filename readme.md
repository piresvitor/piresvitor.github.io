[HTML__BADGE]: https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white
[CSS__BADGE]: https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white
[JAVASCRIPT__BADGE]: https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black
[FONTAWESOME__BADGE]: https://img.shields.io/badge/Font_Awesome-528DD7?style=for-the-badge&logo=font-awesome&logoColor=white

<h1 align="center" style="font-weight: bold;">💻 Portfólio Pessoal - Vitor Pires </h1>

<div align="center">

![HTML5][HTML__BADGE]
![CSS3][CSS__BADGE]
![JavaScript][JAVASCRIPT__BADGE]
![Font Awesome][FONTAWESOME__BADGE]

</div>

<br>

## 📋 Sobre o Projeto

Este é o repositório oficial do meu **Portfólio Pessoal**, desenvolvido para apresentar minha trajetória como Desenvolvedor de Software. O projeto foi construído com foco em performance, semântica e uma experiência de usuário (UX) fluida e moderna.

A interface segue um design minimalista e técnico, destacando minhas habilidades em **Backend** e **Full Stack**, projetos recentes e experiência profissional.

### 🎯 Objetivos
- **Apresentação Profissional**: Demonstrar minhas competências técnicas e experiências.
- **Showcase de Projetos**: Exibir projetos práticos com links diretos para repositórios.
- **Contato Centralizado**: Facilitar o contato através de links diretos e interativos.
- **Performance**: Um site estático leve, rápido e responsivo.

### ✨ Funcionalidades Principais
- ⚡ **One-Page Layout**: Navegação fluida em uma única página com rolagem suave.
- 🎭 **Animações com ScrollReveal**: Elementos aparecem suavemente conforme o usuário rola a página.
- 📱 **Design Responsivo**: Layout adaptável para Desktops, Tablets e Smartphones.
- 🔝 **Botão "Voltar ao Topo"**: Funcionalidade inteligente que aparece após a rolagem, com tooltip interativo.
- 👁️ **Reveal Contact**: Proteção visual de dados sensíveis (E-mail e Telefone), revelados apenas ao clique.
- 🌓 **UI Moderna**: Uso de variáveis CSS (`:root`) para consistência de cores e fácil manutenção.

## 🏗️ Tecnologias Utilizadas

O projeto foi desenvolvido utilizando tecnologias web fundamentais, sem dependência de frameworks, garantindo máxima performance.

- **HTML5**: Estrutura semântica e acessível.
- **CSS3**: Estilização moderna com Flexbox, Grid Layout, Variáveis CSS e Media Queries.
- **JavaScript (ES6+)**: Lógica de interação, manipulação do DOM e efeitos visuais.
- **ScrollReveal.js**: Biblioteca leve para animações de entrada (scroll animations).
- **Font Awesome 6.5**: Ícones vetoriais modernos (incluindo suporte ao ícone X/Twitter).
- **Google Fonts**: Tipografia com a fonte 'Inter' para legibilidade.

## 🎨 Design e UI/UX
O design foi pensado para transmitir profissionalismo e tecnologia.

- **Paleta de Cores**:
  - `Accent Color`: **#524EC4** (Roxo vibrante) para ações principais e destaques.
  - `Background`: **#F8F9FA** (Off-white) para leitura confortável.
  - `Text`: **#212529** (Cinza escuro) para alto contraste.
- **Tipografia**: Uso da fonte **Inter**, padrão moderno para interfaces de usuário.
- **Interatividade**:
  - Hover effects em cartões de projeto (elevação e sombra).
  - Feedback visual em botões e links.
  - Tooltips via CSS puro.

## 📱 Responsividade
O site utiliza **Media Queries** para se adaptar a diferentes resoluções:

- **Desktop (> 1200px)**: Layout em colunas (Grid 4 colunas para skills, 2 para projetos).
- **Tablet (< 900px)**: Ajuste de grids para coluna única ou dupla, redimensionamento de fontes.
- **Mobile (< 768px)**: Menu de navegação ajustado, empilhamento vertical de elementos, botões full-width para melhor toque.

## ⚡ Otimização de Performance & Refatoração

Visando garantir a melhor experiência de usuário (UX) e tempos de carregamento mínimos, realizei uma refatoração estratégica do código JavaScript e otimizações estruturais.

### 🛠️ Principais Melhorias

- **📜 Otimização de Eventos de Scroll**: Substituição de eventos de rolagem custosos por *event listeners* eficientes (passive listeners), evitando o bloqueio da renderização (Main Thread blocking).
- **✨ Refatoração do ScrollReveal**: Reescrita da integração da biblioteca de animações para garantir uma execução mais leve, reduzindo o impacto no DOM e focando em uma estratégia de animação mais inteligente e performática.
- **👆 Interatividade Otimizada**: Melhoria na lógica do botão "Voltar ao Topo", garantindo animações suaves (60fps) sem comprometer a performance da rolagem.

### 🚀 Resultados no Lighthouse (Mobile)

As otimizações resultaram em um ganho significativo nas métricas Core Web Vitals, especialmente em dispositivos móveis:

| Métrica | Antes 🔴 | Depois 🟢 | Melhoria |
| :--- | :---: | :---: | :---: |
| **Largest Contentful Paint (LCP)** | 5.0s | **2.5s** | ⚡ 50% mais rápido |
| **First Contentful Paint (FCP)** | 4.4s | **2.1s** | ⚡ 52% mais rápido |

> **Conclusão:** O site agora oferece uma navegação instantânea e fluida. Além da melhoria na experiência do usuário, a pontuação de **SEO** também foi otimizada, garantindo melhor visibilidade em motores de busca.
