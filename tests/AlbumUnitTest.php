<?php

namespace App\Tests;

use App\Entity\Album;
use App\Entity\House;
use App\Entity\Image;
use App\Entity\User;
use DateTime;
use PHPUnit\Framework\TestCase;

class AlbumUnitTest extends TestCase
{
    public function testIsTrue(): void
    {
        $album = new Album();
        $createdAt = new DateTime();

        $album->setCreatedAt($createdAt);
             
               
        $this->assertTrue($album->getCreatedAt() === $createdAt);
    }


    public function testIsFalse(): void
    {
        $album = new Album();
        $createdAt = new DateTime();

        $album->setCreatedAt($createdAt);
   
        
        $this->assertFalse($album->getCreatedAt() === new DateTime());
    }

    public function testIsEmpty()
    {
        $album = new Album();

        $this->assertEmpty($album->getCreatedAt());
        $this->assertEmpty($album->getId());
    }

    public function testAddRemoveImage()
    {
        $album = new Album();
        $image = new Image();

        $album->addImage($image);
        $this->assertContains($image, $album->getImages());

        $album->removeImage($image);
        $this->assertNotContains($image, $album->getImages());
    }
}
