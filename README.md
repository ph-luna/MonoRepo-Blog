# MonoRepo Blog

Esse projeto foi feito como um monorepositório utilizando de 2 subprojetos **server (ExpressJs)** e **web (ReactJs)**.

O projeto utiliza de sufixos **(:dev, :build, :start)** em seus dois subprojetos **(web, server)**:   
Por exemplo para executar um servidor de desenvolvimento do projeto web apenas digite:

```bash
yarn web:dev
```

- **:dev** para executar servidor de desenvolvimento.
- **:build** para gerar uma versão otimizada de produção.
- **:start** para executar a versão otimizada de produção.

A versão otimizada fica salva na pasta **/dist** em cada subprojeto.

Lembrando que como o projeto uliza o **Yarn** como gerenciador de pacotes é necessário utilizar o comando "yarn" na pasta raiz pro projeto para carregar todas as dependências de ambos os subprojetos e claro ter o yarn configurado em seu sistema.

## Info

O projeto utiliza do **mongoDBAtlas** como serviço de banco de dados e **typescript** junto com **babel** e **webpack** para fazer a compilação do código.