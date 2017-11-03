# moncv

> Projet réalisé dans le cadre de la deuxième année HEG, filière -  informatique de gestion. Ayant comme objectif la conception d'un CV utilisant Bootstrap et Jquery.

# Processus et outils utilisés

## Installation de git
_Logiciel de gestion de version_

[Lien installation](https://git-for-windows.github.io/)

## Installation de Visual Studio Code
_Environnement de développement_

[Lien installation](https://code.visualstudio.com/download)

## Installation de vue.js/node.js
_Node.js va permettre l'execution du javascript en local ainsi que l'obtention NPM qui est un gestionnaire de paquets_

`install -g vue-cli`


## Création d'un nouveau projet
_Avec l'outil webpack afin d'assembler nos pages_

`vue init webpack NomDuProjet`

## Installation des dépendances
_Npm install va lancer notre serveur qui va contenir les informations et vérifier les dépendances(Sur quels ports ouvrir le serveur etc..)_

`npm install`

## Installation de bootstrap-css-only et bootstrap.native
_Framework CSS notament utile pour le responsive web_

`npm install bootstrap-css-only@3 --save`

`npm install bootstrap.native --save`

## Installation de Jquery
_Bibliothèque javascript open-source qui raccourcit le code javascript et qui donne accès à différente fonctionalitées supplémentaires_

_Jquery smooth-scroll est une bibliothèque jquery qui permet un défilement fluide_

`npm install jquery`
`npm install jquery-smooth-scroll`

#Installation de Chart.js
_Bibliothèque javascript qui permet la création de graphique tel que les "doughnuts" du site

## Affichage du site en local

`npm run dev`

## Build du site

`npm run build`

## Configuration de gitHub

- Création de son compte
- Création du lien avec git

## Initialisation de git dans le répértoire

`git init`

## Commit complet des changements via git

`git add --all`

`git commit -m`

## Envoie des Commits

`git push`

## Déploiement du site

`npm run deploy`

## Utilisation du logiciel Gimp 2

_Gimp 2 m'a permit d'ajuster la résolution de certaines images ainsi que d'ajouter certains effets_

## Changement apporté dans les fichiers

- Changement de l'indentation et des ";" dans les fichiers de configuration eslintrc.js et .editorconfig
- Changement du fichier de config build/webpack.dev.conf afin d'être plus performant sur chrome (devtool: 'source-map')
- Ajout du code suivant dans eslintrc.js

```{
  ...,
  "rules": {
    // enforce semi
    "semi":  ["error", "always"],
    // use 4 spaces indent
    "indent": ["error", 4],
    // make rule equal vs code auto formatting
    "space-before-function-paren": ["error", {
        "anonymous": "always",
        "named": "never"
    }],
    ...
  },
  ...
}
```
- Ajout du code suivant dans package.json + installation du plugin afin que le commit et le push soient automatique:

`npm install push dir --save-dev`

```{
...,
 "scripts": {
   ...,
   "deploy": "push-dir --dir=dist --branch=gh-pages --cleanup --verbose"
 },
...
}
```


