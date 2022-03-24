# Foobar

ARTSI est le site internet présentant l'expertise de Anne rousselot, travailleur social indépendant.

## environnement de developpement

### Pré-requis

- PHP 7.4
- Composer
- Symfony CLI
- Docker-compose
- Nodejs et npm installé sur le poste

Vous pouvez verifier les pré-requis (sauf Docker et Docker-compse) avec la commande (de la CLI symfony) suivante:

```bash
symphony check:requirements
```

### Lancer l'environnement de developpement

```bash
composer install
npm install
npm run build
docker-compose up -d
symfony serve -d
npm run builddev
```

### Ajouter des données de test

```bash
symfony console doctrine:fixtures:load

```

## Lancer les tests

```bash
php bin/phpunit --testdox

```

## Voir la couverture de test

```
php bin/phpunit --coverage-html var/log/test/test-coverage
```

## Production

### Envoie des mails de contacts

Les mails de prise de contact sont stockés en BDD, pour les envoyer au manager, il faut mettre en place un cron sur

```bash
symfony console app:send-contact
```
