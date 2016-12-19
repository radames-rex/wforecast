# wForecast | Aurum Challenge

## Use Guide

Digite uma cidade no campo de busca e você obterá a previsão do tempo atual para a respectiva cidade, com indicações de clima e temperatura. Existe a opção para alternar a escala de temperatura e uma opção para revelar a previsão do tempo para as próximas horas e dias.

## Get Started

Para instalar as dependências é necessário ter o NodeJS e NPM instalados e as seguintes dependências:

```npm install -g grunt-cli bower yo generator-karma generator-angular```

Para instalar as demais dependências de desenvolvimento:

```npm install```

Para instalar as demais dependências de front-end:

```bower install```

ou

```sudo bower install --allow-root```

Para instalar demais dependências de teste:

```npm install grunt-karma karma karma-phantomjs-launcher karma-jasmine jasmine-core phantomjs-prebuilt --save-dev```

## Build & development

`grunt build` para buildar a aplicação and `grunt serve` para iniciar o servidor e rodar a aplicação.

## Testing

`grunt test` para rodar os testes com Karma.
