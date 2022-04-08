<?php

namespace App\Tests;

use App\Entity\Booking;
use App\Entity\House;
use App\Entity\User;
use PHPUnit\Framework\TestCase;

class UserUnitTest extends TestCase
{
    public function testIsTrue(): void
    {
        $user = new User();

        $user->setEmail('true@test.com');
        $user->setFirstname('prenom');
        $user->setLastname('nom');
        $user->setPassword('password');
        $user->setRoles(['ROLE_TEST']);

     

        $this->assertTrue($user->getEmail() === 'true@test.com');
        $this->assertTrue($user->getFirstname() === 'prenom');
        $this->assertTrue($user->getLastname() === 'nom');
        $this->assertTrue($user->getPassword() === 'password');
        $this->assertTrue($user->getRoles()===['ROLE_TEST','ROLE_USER']);
        $this->assertTrue($user->getUserIdentifier()==='true@test.com');
    }

    public function testIsFalse(): void
    {
        $user = new User();

        $user->setEmail('true@tester.com')
            ->setFirstname('prenomer')
            ->setLastname('nommer')
            ->setPassword('passworder')
          ;
        

        $this->assertFalse($user->getEmail() === 'true@test.com');
        $this->assertFalse($user->getFirstname() === 'prenom');
        $this->assertFalse($user->getLastname() === 'nom');
        $this->assertFalse($user->getPassword() === 'password');
    }

    public function testIsEmpty()
    {
        $user = new User();

        $this->assertEmpty($user->getEmail());
        $this->assertEmpty($user->getFirstname());
        $this->assertEmpty($user->getLastname());
        $this->assertEmpty($user->getPlainPassword());
        $this->assertEmpty($user->getId());
    }

    public function testAddRemoveHouse()
    {
        $user = new User();
        $house = new House();

        $user->addHouse($house);
        $this->assertContains($house, $user->getHouses());

        $user->removeHouse($house);
        $this->assertNotContains($house, $user->getHouses());
    }
    public function testAddRemoveBooking()
    {
        $user = new User();
        $booking = new Booking();

        $user->addBooking($booking);
        $this->assertContains($booking, $user->getBookings());

        $user->removeBooking($booking);
        $this->assertNotContains($$booking, $user->getBookings());
    }
}
