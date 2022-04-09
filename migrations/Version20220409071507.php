<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220409071507 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE image ADD suite_id INT NOT NULL');
        $this->addSql('ALTER TABLE image ADD CONSTRAINT FK_C53D045F4FFCB518 FOREIGN KEY (suite_id) REFERENCES suite (id)');
        $this->addSql('CREATE INDEX IDX_C53D045F4FFCB518 ON image (suite_id)');
        $this->addSql('ALTER TABLE suite ADD banner VARCHAR(255) NOT NULL');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE image DROP FOREIGN KEY FK_C53D045F4FFCB518');
        $this->addSql('DROP INDEX IDX_C53D045F4FFCB518 ON image');
        $this->addSql('ALTER TABLE image DROP suite_id');
        $this->addSql('ALTER TABLE suite DROP banner');
    }
}
