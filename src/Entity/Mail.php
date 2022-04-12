<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\MailRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;

#[ORM\Entity(repositoryClass: MailRepository::class)]
#[ApiResource]
class Mail
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private $id;

    #[ORM\Column(type: 'string', length: 255)]
    private $title;

    #[ORM\Column(type: 'text')]
    private $content;

    #[ORM\Column(type: 'datetime')]
    private $createdAt;

    #[ORM\Column(type: 'string', length: 255)]
    #[Assert\NotBlank(
        message: "le nom est obligatoire.",
    )]
    #[Assert\Length(
        min: 2,
        max: 50,
        minMessage: 'le nom doit avoir {{limit}} caractères au moins',
        maxMessage: 'le nom  doit avoir {{limit}} caractères au plus',
    )]
    #[Assert\Type("alnum")]
    private $lastname;

    #[ORM\Column(type: 'string', length: 255)]
    #[Assert\NotBlank(
        message: "le prénom est obligatoire.",
    )]
    #[Assert\Length(
        min: 2,
        max: 50,
        minMessage: 'le prénom doit avoir {{limit}} caractères au moins',
        maxMessage: 'le prénom  doit avoir {{limit}} caractères au plus',
    )]
    #[Assert\Type("alnum")]
    private $firtsname;

    #[ORM\Column(type: 'string', length: 255)]
    #[Assert\NotBlank(
        message: "Le mail est obligatoire.",
    )]
    #[Assert\Email(
        mode:'html5',
        message: "Le mail {{ value }} n'est pas valide.",
    )]
    private $email;

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

    public function getContent(): ?string
    {
        return $this->content;
    }

    public function setContent(string $content): self
    {
        $this->content = $content;

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

    public function getLastname(): ?string
    {
        return $this->lastname;
    }

    public function setLastname(string $lastname): self
    {
        $this->lastname = $lastname;

        return $this;
    }

    public function getFirtsname(): ?string
    {
        return $this->firtsname;
    }

    public function setFirtsname(string $firtsname): self
    {
        $this->firtsname = $firtsname;

        return $this;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(string $email): self
    {
        $this->email = $email;

        return $this;
    }
}
