<?php

namespace App\DataFixtures;

use App\Entity\User;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use Faker\Factory;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

class AppFixtures extends Fixture
{
    private $encoder ;

    public function __construct(UserPasswordHasherInterface $encoder)
    {
        $this->encoder = $encoder ;
    }
    
    public function load(ObjectManager $manager): void
    {

          // Utilisation de faker
        $faker = Factory::create('fr_FR');

        // Creation Manager

        $userManager = new User();

        $userManager->setEmail('manager@test.com')
             ->setFirstname($faker->firstname)
             ->setLastname($faker->lastname)
             ->setRoles(['ROLE_MANAGER'])
             ->setCreatedAt($faker->dateTimeBetween('-6 month', 'now'))
             ;

        $password = $this->encoder->hashPassword($userManager, 'password');
        $userManager->setPassword($password);

        $manager->persist($userManager);

        // Creation admin

        $userAdmin = new User();

        $userAdmin->setEmail('admin@test.com')
                ->setFirstname($faker->firstname)
                ->setLastname($faker->lastname)
                ->setRoles(['ROLE_ADMIN'])
                ->setCreatedAt($faker->dateTimeBetween('-6 month', 'now'))
             ;

        $password = $this->encoder->hashPassword($userAdmin, 'password');
        $userManager->setPassword($password);

        $manager->persist($userAdmin);

        // Creation client

        $user = new User();

        $user->setEmail('user@test.com')
                ->setFirstname($faker->firstname)
                ->setLastname($faker->lastname)
                ->setRoles(['ROLE_USER'])
                ->setCreatedAt($faker->dateTimeBetween('-6 month', 'now'))
             ;

        $password = $this->encoder->hashPassword($user, 'password');
        $userManager->setPassword($password);

        $manager->persist($user);



        $manager->flush();
    }
}
