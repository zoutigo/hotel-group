<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220408124334 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE house ADD user_id INT NOT NULL');
        $this->addSql('ALTER TABLE house ADD CONSTRAINT FK_67D5399DA76ED395 FOREIGN KEY (user_id) REFERENCES `user` (id)');
        $this->addSql('CREATE INDEX IDX_67D5399DA76ED395 ON house (user_id)');
        $this->addSql('ALTER TABLE suite ADD house_id INT NOT NULL');
        $this->addSql('ALTER TABLE suite ADD CONSTRAINT FK_153CE4266BB74515 FOREIGN KEY (house_id) REFERENCES house (id)');
        $this->addSql('CREATE INDEX IDX_153CE4266BB74515 ON suite (house_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE house DROP FOREIGN KEY FK_67D5399DA76ED395');
        $this->addSql('DROP INDEX IDX_67D5399DA76ED395 ON house');
        $this->addSql('ALTER TABLE house DROP user_id');
        $this->addSql('ALTER TABLE suite DROP FOREIGN KEY FK_153CE4266BB74515');
        $this->addSql('DROP INDEX IDX_153CE4266BB74515 ON suite');
        $this->addSql('ALTER TABLE suite DROP house_id');
    }
}
