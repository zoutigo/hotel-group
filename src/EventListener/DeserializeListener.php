<?php

namespace App\EventListener;

use ApiPlatform\Core\EventListener\DeserializeListener as DecoratedListener ;
use ApiPlatform\Core\Serializer\SerializerContextBuilderInterface;
use ApiPlatform\Core\Util\RequestAttributesExtractor;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpKernel\Event\RequestEvent;

class DeserializeListener
{
    public function __construct(
        private DecoratedListener  $decorated,
        private SerializerContextBuilderInterface $serializerContextBuilder
    ) {
    }

    public function onKernelRequest(RequestEvent $event):void
    {
        $request = $event->getRequest();

        if ($request->isMethodCacheable() || $request->isMethod(Request::METHOD_DELETE)) {
            return ;
        }
        
        if ($request->getContentType() ==='form') {
            $this->denormalizeFromRequest($request) ;
        } else {
            $this->decorated->onKernelRequest($event) ;
        }
    }

    private function denormalizeFromRequest(Request $request)
    {
        $attributes = RequestAttributesExtractor::extractAttributes($request) ;
        if (empty($attributes)) {
            return ;
        }

        $context = $this->serializerContextBuilder->createFromRequest($request, false, $attributes);
        dd($context, $request->attributes);
    }
}
