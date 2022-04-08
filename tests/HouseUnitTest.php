<?php

namespace App\Tests;

use App\Entity\House;
use App\Entity\Suite;
use DateTime;
use PHPUnit\Framework\TestCase;

class HouseUnitTest extends TestCase
{
    public function testIsTrue(): void
    {
        $house = new House();
        $now = new DateTime('now');

        $house->setName('villa du sud');
        $house->setCity('madrid');
        $house->setDescription('la casa de papel');
        $house->setSlug('casa-papa');
        $house->setCreatedAt($now);

     

        $this->assertTrue($house->getName() === 'villa du sud');
        $this->assertTrue($house->getCity() === 'madrid');
        $this->assertTrue($house->getDescription() === 'la casa de papel');
        $this->assertTrue($house->getSlug() === 'casa-papa');
        $this->assertTrue($house->getCreatedAt()=== $now);
    }

    public function testIsFalse(): void
    {
        $house = new House();
        $now = new DateTime('now');


        $house->setName('villa du sud');
        $house->setCity('madrid');
        $house->setDescription('la casa de papel');
        $house->setSlug('casa-papa');
        $house->setCreatedAt($now);

        $this->assertFalse($house->getName() === 'villa du sude');
        $this->assertFalse($house->getCity() === 'madride');
        $this->assertFalse($house->getDescription() === 'la casa de papele');
        $this->assertFalse($house->getSlug() === 'casa-papae');
        $this->assertFalse($house->getCreatedAt()=== new DateTime());
    }

    public function testIsEmpty()
    {
        $house = new House();

        $this->assertEmpty($house->getName());
        $this->assertEmpty($house->getCity());
        $this->assertEmpty($house->getDescription());
        $this->assertEmpty($house->getSlug());
        $this->assertEmpty($house->getCreatedAt());
    }

    public function testAddRemoveSuite()
    {
        $house = new House();
        $suite = new Suite();

        $house->addSuite($suite);
        $this->assertContains($suite, $house->getSuites());

        $house->removeSuite($suite);
        $this->assertNotContains($suite, $house->getSuites());
    }
}
