<?php

namespace App\Tests;

use App\Entity\Booking;
use App\Entity\House;
use App\Entity\User;
use DateTime;
use PHPUnit\Framework\TestCase;

class BookingUnitTest extends TestCase
{
    public function testIsTrue(): void
    {
        $booking = new Booking();
        $startdate = new DateTime();
        $enddate = new DateTime();
        $createdAt = new DateTime();

        $booking->setStartdate($startdate)
                ->setEnddate($enddate)
                ->setPrice(150)
                ->setCreatedAt($createdAt);
   

        $this->assertTrue($booking->getStartdate() === $startdate);
        $this->assertTrue($booking->getEnddate() === $enddate);
        $this->assertTrue(($booking->getPrice() - 150)/150 <= 0) ;
        $this->assertTrue($booking->getCreatedAt() === $createdAt);
    }


    public function testIsFalse(): void
    {
        $booking = new Booking();
        $startdate = new DateTime();
        $enddate = new DateTime();
        $createdAt = new DateTime();

        $booking->setStartdate($startdate)
        ->setEnddate($enddate)
        ->setPrice(1000)
        ->setCreatedAt($createdAt);
        

        $this->assertFalse($booking->getStartdate() === new DateTime());
        $this->assertFalse($booking->getEnddate() === new DateTime());
        $this->assertFalse($booking->getPrice() === 1456);
        $this->assertFalse($booking->getCreatedAt() === new DateTime());
    }

    public function testIsEmpty()
    {
        $booking = new Booking();

        $this->assertEmpty($booking->getStartdate());
        $this->assertEmpty($booking->getEnddate());
        $this->assertEmpty($booking->getCreatedAt());
        $this->assertEmpty($booking->getPrice());
        $this->assertEmpty($booking->getId());
    }
}
