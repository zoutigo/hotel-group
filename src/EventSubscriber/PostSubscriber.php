<?php
declare(strict_types=1);

namespace App\EventSubscriber;

use DateTime;
use Symfony\Component\HttpKernel\KernelEvents;
use Symfony\Component\HttpKernel\Event\ViewEvent;
use ApiPlatform\Core\EventListener\EventPriorities;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\HttpFoundation\Request;

class PostSubscriber implements EventSubscriberInterface
{
    public static function getSubscribedEvents()
    {
        return [
            KernelEvents::VIEW => ['willSetCreatedAt', EventPriorities::POST_VALIDATE],
        ];
    }

    public function willSetCreatedAt(ViewEvent $event): void
    {
        $object = $event->getControllerResult();
        $method = $event->getRequest()->getMethod();
       
        if (Request::METHOD_POST === $method) {
            $now = new DateTime('now');
            $object->setCreatedAt($now);
        }
    }
}
