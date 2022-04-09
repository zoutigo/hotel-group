<?php

namespace App\DataFixtures;

<<<<<<< HEAD
use App\Entity\User;
=======
use App\Entity\Booking;
use App\Entity\House;
use App\Entity\Image;
use App\Entity\Suite;
use App\Entity\User;
use DateTime;
>>>>>>> 81d705ad7101e57d4c9c4d26d4396731c5be6de6
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

<<<<<<< HEAD
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
=======
       
>>>>>>> 81d705ad7101e57d4c9c4d26d4396731c5be6de6

        // Creation admin

        $userAdmin = new User();

        $userAdmin->setEmail('admin@test.com')
                ->setFirstname($faker->firstname)
                ->setLastname($faker->lastname)
                ->setRoles(['ROLE_ADMIN'])
                ->setCreatedAt($faker->dateTimeBetween('-6 month', 'now'))
             ;

<<<<<<< HEAD
        $password = $this->encoder->hashPassword($userAdmin, 'password');
        $userManager->setPassword($password);
=======
        $adminPassword = $this->encoder->hashPassword($userAdmin, 'password');
        $userAdmin->setPassword($adminPassword);
>>>>>>> 81d705ad7101e57d4c9c4d26d4396731c5be6de6

        $manager->persist($userAdmin);

        // Creation client

        $user = new User();

        $user->setEmail('user@test.com')
                ->setFirstname($faker->firstname)
                ->setLastname($faker->lastname)
                ->setRoles(['ROLE_USER'])
                ->setCreatedAt($faker->dateTimeBetween('-6 month', 'now'))
             ;

<<<<<<< HEAD
        $password = $this->encoder->hashPassword($user, 'password');
        $userManager->setPassword($password);
=======
        $userPassword = $this->encoder->hashPassword($user, 'password');
        $user->setPassword($userPassword);
>>>>>>> 81d705ad7101e57d4c9c4d26d4396731c5be6de6

        $manager->persist($user);



<<<<<<< HEAD
=======
     
        // create Manager

        for ($i=0; $i < 5; $i++) {
            // Creation Manager

            $userManager = new User();
            $managerEmail = 'manager'.$i.'@test.com';

            $userManager->setEmail($managerEmail)
             ->setFirstname($faker->firstname)
             ->setLastname($faker->lastname)
             ->setRoles(['ROLE_MANAGER'])
             ->setCreatedAt($faker->dateTimeBetween('-6 month', 'now'))
             ;

            $managerPassword = $this->encoder->hashPassword($userManager, 'password');
            $userManager->setPassword($managerPassword);

            $manager->persist($userManager);

            // create house
            $house = new House();

            $house->setName($faker->company())
                ->setCity($faker->city())
                ->setDescription($faker->paragraphs(4, true))
                ->setSlug($faker->slug(3))
                ->setBanner('/image')
                ->setCreatedAt(new DateTime())
                ->setUser($userManager)
                ->setCreatedAt($faker->dateTimeBetween('-6 month', 'now'))
            
        ;

            $manager->persist($house);

            //create suites

            for ($j=0; $j < 6; $j++) {
                $suite = new Suite();
               
                $suite->setTitle($faker->company())
                        ->setDescription($faker->paragraphs(3, true))
                        ->setPrice($faker->randomFloat(2, 10, 1000))
                        ->setBanner('/image')
                        ->setBookinglink($faker->url())
                        ->setCreatedAt($faker->dateTimeBetween('-6 month', 'now'))
                        ->setHouse($house)
                
                        ;

                $manager->persist($suite);

                // create users for reservations
                for ($l=0; $l < 3; $l++) {
                    $userClient = new User();
                    $clientEmail = 'client'.$faker->randomNumber(5, true).'@test.com';

                    $userClient->setEmail($clientEmail)
                                ->setFirstname($faker->firstname)
                                ->setLastname($faker->lastname)
                                ->setRoles(['ROLE_USER'])
                                ->setCreatedAt($faker->dateTimeBetween('-6 month', 'now'))
             ;

                    $clientPassword = $this->encoder->hashPassword($userClient, 'password');
                    $userClient->setPassword($clientPassword);

                    $manager->persist($userClient);

                    // creates reservations

                    for ($m=0; $m < 2; $m++) {
                        $isBooked = ($faker->randomDigit()>5);
                        if ($isBooked) {
                            $booking = new Booking();
                            $startdate = $faker->dateTimeBetween('now', '+ 1 month');
                            $enddate = $faker->dateTimeBetween('+2 month', '+3 month');
                            $diff = $startdate->diff($enddate);
                            $days = $diff->d;
                            $price =  $days * $suite->getPrice();
    
                            $booking->setUser($userClient)
                                    ->setSuite($suite)
                                    ->setPrice($price)
                                    ->setStartdate($startdate)
                                    ->setEnddate($enddate)
                                    ->setCreatedAt($faker->dateTimeBetween('-2 month', 'now'))
                                    ;
                            $manager->persist($booking);
                        }
                    }
                }

                // create images

                for ($k=0; $k <6 ; $k++) {
                    $image = new Image();

                    $image->setName($faker->name())
                            ->setPath('/image')
                            ->setCreatedAt($faker->dateTimeBetween('-6 month', 'now'))
                            ->setSuite($suite)
                        ;
                    $manager->persist($image);
                }
            }
        }




>>>>>>> 81d705ad7101e57d4c9c4d26d4396731c5be6de6
        $manager->flush();
    }
}
