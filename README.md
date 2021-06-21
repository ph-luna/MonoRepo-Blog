# MonoRepo Blog

Esse projeto foi feito como um monorepositório utilizando de 2 subprojetos **server (ExpressJs)** e **web (ReactJs)**.

O projeto utiliza de sufixos **(:dev, :build, :start)** em seus dois subprojetos **(web, server)**:   
Por exemplo para executar um servidor de desenvolvimento do projeto web apenas digite:

```bash
yarn web:dev
```

- **:dev** para executar servidor de desenvolviment.
- **:build** para gerar uma versão otimizada de produção.
- **:start** para executar a versão otimizada de produção.

A versão otimizada fica salva na pasta **/dist** em cada subprojeto.