<?php declare(strict_types=1);

namespace Uploadcare\Interfaces\Conversion;

/**
 * Request for document conversion.
 */
interface DocumentConversionRequestInterface extends ConversionRequestInterface
{
    public function getPageNumber(): ?int;
}
