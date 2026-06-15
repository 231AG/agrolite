import { createMetadata, PAGE_METADATA } from "@/lib/metadata";
import { ProductsCatalog } from "./ProductsCatalog";

export const metadata = createMetadata(PAGE_METADATA.products);

export default function ProductsPage() {
  return <ProductsCatalog />;
}
