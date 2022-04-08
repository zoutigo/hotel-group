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

        $booking->setStartdate($startdate)
                ->setEnddate($enddate);
   

        $this->assertTrue($booking->getStartdate() === $startdate);
        $this->assertTrue($booking->getEnddate() === $enddate);
    }


    public function testIsFalse(): void
    {
        $booking = new Booking();
        $startdate = new DateTime();
        $enddate = new DateTime();
        

        $this->assertFalse($booking->getStartdate() === new DateTime());
        $this->assertFalse($booking->getEnddate() === new DateTime());
    }

    public function testIsEmpty()
    {
        $booking = new Booking();

        $this->assertEmpty($booking->getStartdate());
        $this->assertEmpty($booking->getEnddate());
        $this->assertEmpty($booking->getId());
    }
}
