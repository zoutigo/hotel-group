<?php

namespace App\Tests;

use App\Entity\Booking;
use App\Entity\Image;
use App\Entity\Suite;
use DateTime;
use PHPUnit\Framework\TestCase;

class SuiteTestUnit extends TestCase
{
    public function testIsTrue(): void
    {
        $suite = new Suite();
        $now = new DateTime('now');

        $suite->setTitle('villa du sud')
            ->setDescription('la casa de papel')
            ->setPrice(150)
            ->setBookinglink('casa-papa')
            ->setBanner('papa')
            ->setCreatedAt($now);

     

        $this->assertTrue($suite->getTitle() === 'villa du sud');
        $this->assertTrue($suite->getDescription() === 'la casa de papel');
        $this->assertTrue(($suite->getPrice() - 150)/150 <= 0) ;
        $this->assertTrue($suite->getBookinglink() === 'casa-papa');
        $this->assertTrue($suite->getBanner() === 'papa');
        $this->assertTrue($suite->getCreatedAt()=== $now);
    }

    public function testIsFalse(): void
    {
        $suite = new Suite();
        $now = new DateTime('now');


        $suite->setTitle('villa du sude');
        $suite->setDescription('la casa de papele');
        $suite->setPrice(151);
        $suite->setBookinglink('casa-papale');
        $suite->setBanner('casa');
        $suite->setCreatedAt($now);

        $this->assertFalse($suite->getTitle() === 'villa du sud');
        $this->assertFalse($suite->getDescription() === 'la casa de papel');
        $this->assertFalse($suite->getPrice() === 151);
        $this->assertFalse($suite->getBanner() === 'casa-papa');
        $this->assertFalse($suite->getBookinglink() === 'casa-papa');
        $this->assertFalse($suite->getCreatedAt()=== new DateTime());
    }

    public function testIsEmpty()
    {
        $suite = new Suite();

        $this->assertEmpty($suite->getTitle());
        $this->assertEmpty($suite->getDescription());
        $this->assertEmpty($suite->getPrice());
        $this->assertEmpty($suite->getBookinglink());
        $this->assertEmpty($suite->getBanner());
        $this->assertEmpty($suite->getCreatedAt());
    }

    public function testAddRemoveBooking()
    {
        $suite = new Suite();
        $booking = new Booking();

        $suite->addBooking($booking);
        $this->assertContains($booking, $suite->getBookings());

        $suite->removeBooking($booking);
        $this->assertNotContains($booking, $suite->getBookings());
    }
    public function testAddRemoveImage()
    {
        $suite = new Suite();
        $image = new Image();

        $suite->addImage($image);
        $this->assertContains($image, $suite->getImages());

        $suite->removeImage($image);
        $this->assertNotContains($image, $suite->getImages());
    }
}
