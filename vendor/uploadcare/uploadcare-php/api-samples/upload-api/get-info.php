<?php

$configuration = Uploadcare\Configuration::create((string) $_ENV['UPLOADCARE_PUBLIC_KEY'], (string) $_ENV['UPLOADCARE_SECRET_KEY']);
$uploader = new Uploadcare\Uploader\Uploader($configuration);
$fileInfo = $uploader->fromPath(__DIR__ . '/squirrel.jpg');

echo \sprintf('URL: %s, ID: %s, Mime type: %s', $fileInfo->getUrl(), $fileInfo->getUuid(), $fileInfo->getMimeType());
