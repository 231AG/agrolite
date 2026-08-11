import { createMetadata, PAGE_METADATA } from "@/lib/metadata";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { COMPANY } from "@/lib/constants";
import { ProductsCatalog } from "./ProductsCatalog";

export const metadata = createMetadata(PAGE_METADATA.products);

export default function ProductsPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: COMPANY.url },
          { name: "Products", url: `${COMPANY.url}/products` },
        ]}
      />
      <ProductsCatalog />
    </>
  );
}
