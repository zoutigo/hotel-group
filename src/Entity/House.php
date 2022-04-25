<?php

namespace App\Entity;

use App\Entity\User;
use App\Entity\Suite;
use Doctrine\ORM\Mapping as ORM;
use App\Repository\HouseRepository;
use Doctrine\Common\Collections\Collection;
use ApiPlatform\Core\Annotation\ApiProperty;
use ApiPlatform\Core\Annotation\ApiResource;
use Symfony\Component\HttpFoundation\File\File;
use Doctrine\Common\Collections\ArrayCollection;
// use Symfony\Component\Serializer\Annotation\Groups;
use Vich\UploaderBundle\Mapping\Annotation as Vich;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * @Vich\Uploadable
 */
#[ORM\Entity(repositoryClass: HouseRepository::class)]
#[ApiResource(
    collectionOperations: [
        'get' => [
            'normalization_context' => ['groups' => ['house_read']],
            
        ],
        'post'=> [
            'denormalization_context' => ['groups' => ['house_write']],
            'input_formats' => [
                'multipart' => ['multipart/form-data'],
            ],
        ]
    ],
    itemOperations: [
        'get' => [
            'normalization_context' => ['groups' => ['house_details_read']],
        ],
        'put',
        'patch',
        'delete'
    ],
)]

class House
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    #[Groups(["house_read", "house_details_read"])]
    private $id;

    #[Groups(["house_read", "house_details_read","house_write"])]
    #[ORM\Column(type: 'string', length: 255)]
    #[Assert\NotBlank(
        message: "Le nom est obligatoire.",
    )]
    #[Assert\Length(
        min: 2,
        max: 30,
        minMessage: 'Le nom doit avoir 2 caractères au moins',
        maxMessage: 'Le nom  doit avoir 30 caractères au plus',
    )]
    #[Assert\Type("alnum")]
    private $name;

    #[Groups(["house_read", "house_details_read","house_write"])]
    #[ORM\Column(type: 'string', length: 255)]
    #[Assert\NotBlank(
        message: "La ville est obligatoire.",
    )]
    #[Assert\Length(
        min: 2,
        max: 30,
        minMessage: 'La ville doit avoir 2 caractères au moins',
        maxMessage: 'La ville  doit avoir 30 caractères au plus',
    )]
    #[Assert\Type("alnum")]
    private $city;

    #[Groups(["house_read", "house_details_read","house_write"])]
    #[ORM\Column(type: 'text')]
    #[Assert\NotBlank(
        message: "La description est obligatoire.",
    )]
    #[Assert\Length(
        min: 15,
        max: 1000,
        minMessage: 'La description doit avoir 15 caractères au moins',
        maxMessage: 'La description  doit avoir 1000 caractères au plus',
    )]
    #[Assert\Type("string", message:'Les caractères doivent etre alphanumériques')]
    private $description;

    #[Groups(["house_read", "house_details_read","house_write"])]
    #[ORM\Column(type: 'string', length: 255)]
    private $slug;

    #[Groups(["house_read", "house_details_read"])]
    #[ORM\Column(type: 'datetime')]
    private $createdAt;

    #[Groups(["house_details_read"])]
    #[ORM\ManyToOne(targetEntity: User::class, inversedBy: 'houses')]
    #[ORM\JoinColumn(nullable: false)]
    private $user;

    #[Groups(["house_read", "house_details_read"])]
    #[ORM\OneToMany(mappedBy: 'house', targetEntity: Suite::class, orphanRemoval: true)]
    private $suites;

    #[Groups(["house_read", "house_details_read"])]
    #[ORM\Column(type: 'string', length: 255)]
    #[Assert\NotBlank(
        message: "L'image de présentation est obligatoire.",
    )]

    // #[ApiProperty(iri: 'http://schema.org/contentUrl')]
    #[Groups(['house:read'])]
    private $banner;

    /**
    * @Vich\UploadableField(mapping="media_object", fileNameProperty="filePath")
    */
    #[Groups(['house:write'])]
    #[Vich\UploadableField(mapping:'houses', fileNameProperty:'banner')]
    public ?File $file = null;

    // #[ApiProperty(iri: 'http://schema.org/contentUrl')]
    #[Groups(['house:read'])]
    public ?string $contentUrl = null;

    public function __construct()
    {
        $this->suites = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getCity(): ?string
    {
        return $this->city;
    }

    public function setCity(string $city): self
    {
        $this->city = $city;

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

    public function getSlug(): ?string
    {
        return $this->slug;
    }

    public function setSlug(string $slug): self
    {
        $this->slug = $slug;

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

    public function getUser(): ?User
    {
        return $this->user;
    }

    public function setUser(?User $user): self
    {
        $this->user = $user;

        return $this;
    }

    /**
     * @return Collection<int, Suite>
     */
    public function getSuites(): Collection
    {
        return $this->suites;
    }

    public function addSuite(Suite $suite): self
    {
        if (!$this->suites->contains($suite)) {
            $this->suites[] = $suite;
            $suite->setHouse($this);
        }

        return $this;
    }

    public function removeSuite(Suite $suite): self
    {
        if ($this->suites->removeElement($suite)) {
            // set the owning side to null (unless already changed)
            if ($suite->getHouse() === $this) {
                $suite->setHouse(null);
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

    public function getFile(): ?string
    {
        return $this->file;
    }

    public function setFile(string $file): self
    {
        $this->file = $file;

        return $this;
    }
    public function getContentUrl(): ?string
    {
        return $this->contentUrl;
    }

    public function setContentUrl(string $contentUrl): self
    {
        $this->contentUrl = $contentUrl;

        return $this;
    }
}
