Cet exercice se présente sous la forme d'un petit exécutable qui écrit "Hello
Dependency Injection" dans le shell.

Pour le lancer :
```
$ node index.js
```

## Instruction

On souhaite changer le message en "Hello DI". C'est trivial en soi, mais on
souhaite y ajouter plusieurs contraintes.

1) Faire ce changement uniquement après avoir posé au moins un test sur le comportement
existant.

2) Ne pas mocker une librairie / classe / fonction qui ne nous appartient pas ([don't mock what you don't own](https://github.com/testdouble/contributing-tests/wiki/Don%27t-mock-what-you-don%27t-own))

  - pour se protéger des changements de la lib externe
  - pour conserver notre indépendance de design
  - avantage = nous invite à nommer notre dépendance

## Plan

- ajouter un test qui vérifie l'existant
- faire le changement facile dans le test et l'existant

## Comment tester ? (Spoiler)

- Extraire la ligne qui fait le changement dans une fonction à nous
- Injecter cette fonction
- On peut maintenant mocker cette fonction à nous et tester
