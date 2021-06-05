Depois de fazer o download dos arquivos, para que o servidor funcione normalmente siga os seguintes passos:

1 - Entre na pasta "server folder". Lá você encontrará o arquivo "server" , que deverá ser removido da pasta.

2 - Entre na pasta "json" e remova os arquivos: "package json" e "pack-lock.json".

3 - Entre na pasta "Npm".
depois, remova o arquivo "node_modules.rar" da pasta e faça a extração do arquivo.

4 - Se após os 3 primeiros passos o server não funcionar, vá no arquivo "package.json" e na linha 5 em "main": "index.js" altere para "server.js".

Após realizar os passos acima, basta abrir o terminal, digitar "npm start", ir no navegador e digitar a url: localhost + o número da porta que está configurada no arquivo "server.js"(Nesse caso, 2000).
