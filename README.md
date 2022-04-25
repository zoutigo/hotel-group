# Green suite

Green Suites est le site d'un groupement d'hotels dont les établissements , suitués aux 4 coins du monde , offrent des suites paradisiaques.

Veillez noter que ce projet sur symfony n'est pas allé jusqu'au bout car j'ai eu des difficultés avec la gestion des images sur Api plateform. Horsmis l'aspect graphique , la seule vraie fonctionalité testable est ici l'authentification.

Le projet a été terminé avec Expressjs , n'éanmoins , prenez un peu de temps pour tester ici.

## environnement de developpement

- Ubuntu 20.04

### Pré-requis

- PHP 7.4
- Composer
- Symfony CLI
- Docker-compose
- Nodejs et npm installé sur le poste

Vous pouvez verifier les pré-requis (sauf Docker et Docker-compse) avec la commande (de la CLI symfony) suivante:

`symphony check:requirements`

Pour installer docker , suivre les intructions de la [document officielle](https://docs.docker.com/get-docker/)

### Lancer l'environnement de developpement

- installation des dépendances composer

`composer install`

- lancer webpack encore

`npm run dev-server`

- lancer le container dans un second terminal

`docker-compose up -d`

- demarrer symfony

`symfony serve -d`

Dans le terminal , symfony vous indique une url pour visualiser le rendu :

### Charger les données fixtures

- Jouer les migrations

`symfony console d:m:m`

- Ajouter des fixtures

`symfony console doctrine:fixtures:load`

Vous pouver desormais essayer de vous connecter en cliquant sur l'icone de connexion et vous verrez que ça marche.
les identifiants de l'admin sont 'admin@test.com || password '

### Lancer les tests

```bash
php bin/phpunit --testdox

```

### consulter l'api

rendez vous sur la route '/api' pour consulter tous les endpoints

# la suite du projet est sur ce repository :

https://github.com/zoutigo/hotels.git
