<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\SuiteRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;

#[ORM\Entity(repositoryClass: SuiteRepository::class)]
#[ApiResource(
    collectionOperations: [
        'get' => [
            'normalization_context' => ['groups' => ['suite_read']],
        ],
        'post'
    ],
    itemOperations: [
        'get' => [
            'normalization_context' => ['groups' => ['suite_details_read']],
        ],
        'put',
        'patch',
        'delete'
    ],
)]

class Suite
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    #[Groups(["suite_read", "suite_details_read"])]
    private $id;

    #[ORM\Column(type: 'string', length: 255)]
    #[Groups(["suite_read", "suite_details_read"])]
    #[Assert\NotBlank(
        message: "Le titre est obligatoire.",
    )]
    #[Assert\Length(
        min: 2,
        max: 50,
        minMessage: 'le titre doit avoir {{limit}} caractères au moins',
        maxMessage: 'le titre  doit avoir {{limit}} caractères au plus',
    )]
    #[Assert\Type("alnum")]
    private $title;

    #[ORM\Column(type: 'text')]
    #[Groups(["suite_read", "suite_details_read"])]
    #[Assert\NotBlank(
        message: "La description est obligatoire.",
    )]
    #[Assert\Length(
        min: 2,
        max: 50,
        minMessage: 'La description  doit avoir {{limit}} caractères au moins',
        maxMessage: 'La description   doit avoir {{limit}} caractères au plus',
    )]
    #[Assert\Type("alnum")]
    private $description;

    #[ORM\Column(type: 'float')]
    #[Groups(["suite_read", "suite_details_read"])]
    #[Assert\NotBlank(
        message: "Le prix est obligatoire.",
    )]
    #[Assert\Range(
        min: 100,
        max: 10000,
        notInRangeMessage: 'Les prix doit etre compris entre {{ min }}€ and {{ max }}€ ',
    )]
    #[Assert\Type("float")]
    private $price;

    #[ORM\Column(type: 'string', length: 255)]
    #[Groups(["suite_read", "suite_details_read"])]
    #[Assert\NotBlank(
        message: "Le lien booking.com est obligatoire.",
    )]
    #[Assert\Url(protocols: ['http', 'https'], message:'Le lien booking doit etre une url')]
    private $bookinglink;

    #[ORM\Column(type: 'datetime')]
    #[Groups(["suite_read", "suite_details_read"])]
    private $createdAt;

    #[ORM\ManyToOne(targetEntity: House::class, inversedBy: 'suites')]
    #[ORM\JoinColumn(nullable: false)]
    #[Groups(["suite_read", "suite_details_read",["house_details_read"]])]
    private $house;

    #[ORM\OneToMany(mappedBy: 'suite', targetEntity: Booking::class, orphanRemoval: true)]
    #[Groups(["suite_read", "suite_details_read","booking_details_read"])]
    private $bookings;

    #[Assert\NotBlank(
        message: "L'image principale est obligatoire",
    )]
    #[Assert\Type("alnum")]
    #[ORM\Column(type: 'string', length: 255)]
    #[Groups(["suite_read", "suite_details_read"])]
    private $banner;

    #[ORM\OneToMany(mappedBy: 'suite', targetEntity: Image::class, orphanRemoval: true)]
    #[Groups(["suite_read", "suite_details_read"])]
    private $images;

    public function __construct()
    {
        $this->bookings = new ArrayCollection();
        $this->images = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTitle(): ?string
    {
        return $this->title;
    }

    public function setTitle(string $title): self
    {
        $this->title = $title;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(string $description): self
    {
        $this->description = $description;

        return $this;
    }

    public function getPrice(): ?float
    {
        return $this->price;
    }

    public function setPrice(float $price): self
    {
        $this->price = $price;

        return $this;
    }

    public function getBookinglink(): ?string
    {
        return $this->bookinglink;
    }

    public function setBookinglink(string $bookinglink): self
    {
        $this->bookinglink = $bookinglink;

        return $this;
    }

    public function getCreatedAt(): ?\DateTimeInterface
    {
        return $this->createdAt;
    }

    public function setCreatedAt(\DateTimeInterface $createdAt): self
    {
        $this->createdAt = $createdAt;

        return $this;
    }

    public function getHouse(): ?House
    {
        return $this->house;
    }

    public function setHouse(?House $house): self
    {
        $this->house = $house;

        return $this;
    }

    /**
     * @return Collection<int, Booking>
     */
    public function getBookings(): Collection
    {
        return $this->bookings;
    }

    public function addBooking(Booking $booking): self
    {
        if (!$this->bookings->contains($booking)) {
            $this->bookings[] = $booking;
            $booking->setSuite($this);
        }

        return $this;
    }

    public function removeBooking(Booking $booking): self
    {
        if ($this->bookings->removeElement($booking)) {
            // set the owning side to null (unless already changed)
            if ($booking->getSuite() === $this) {
                $booking->setSuite(null);
            }
        }

        return $this;
    }

    public function getBanner(): ?string
    {
        return $this->banner;
    }

    public function setBanner(string $banner): self
    {
        $this->banner = $banner;

        return $this;
    }

    /**
     * @return Collection<int, Image>
     */
    public function getImages(): Collection
    {
        return $this->images;
    }

    public function addImage(Image $image): self
    {
        if (!$this->images->contains($image)) {
            $this->images[] = $image;
            $image->setSuite($this);
        }

        return $this;
    }

    public function removeImage(Image $image): self
    {
        if ($this->images->removeElement($image)) {
            // set the owning side to null (unless already changed)
            if ($image->getSuite() === $this) {
                $image->setSuite(null);
            }
        }

        return $this;
    }
}
