# Lógica de programação com Javascript
Neste pequeno projeto o usuário tenta adivinhar um número secreto gerado aleatoriamente.

# Evite deixar sua chave de API no repositório do git.
- Crie um aquivo chamado `config.js` com a mesma estrutura do código em `config.example.js`
- Substitua a string `SUA_CHAVE_AQUI` pela sua chave do Responsive voice.
- No seu `index.html` deve ficar assim:
```javascript
  <script type="module">
      import config from './config.js';
      const rvApiKey = config.rvApiKey;
      //console.log('API Key:', rvApiKey);
  </script>
  <script src="https://code.responsivevoice.org/responsivevoice.js"></script>
```
- Não se equeça de configurar o git para que o aquivo `config.js` seja ignorado. Crie um aquivo `.gitignore` com a seguinte estrutura.
```
# .gitignore
config.js

```

# Referências (Fórum da Alura)
https://cursos.alura.com.br/forum/topico-responsivevoice-nao-funciona-corretamente-336788