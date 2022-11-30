## Setup

NodeJS requis.

```bash
$ npm install
```

Pour plus de confort sur webstorm :

-   Installer les plugins "Nest" et "Prettier".
-   Cocher l'exécution d'ESLint et Prettier dans "Actions on Save".

Pour vscode ou autre je ne sais pas :frowning_face:.

## Exécution

```bash
$ npm run start
```

# Structure NestJS

On travaille par modules, chaque module est un dossier dans le dossier `src`.
Un module se compose d'un fichier :

-   `*.module.ts` : Définition du module
-   `*.controller.ts` : Définition des routes
-   `*.service.ts` : Définition des fonctions de service

Dans l'idée, chaque module possède une route principale de forme :  
`/api/{nom du module}/{requête}`
