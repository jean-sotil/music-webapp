import { notFound } from "next/navigation";

import Modal from "@/components/atoms/Modal";
import ProductPDP from "@/components/organisms/ProductPDP";
import type { Langs } from "@/types/content";
import { getContent, getProductById } from "@/utils/getContent";

type ProductParamsType = Promise<{ id: string; lang: string }>;

export async function generateMetadata({
  params,
}: {
  params: ProductParamsType;
}) {
  const { id, lang } = (await params) as { id: string; lang: Langs };
  const product = getProductById(Number(id), lang);
  const content = getContent();
  const localizedText = content[lang];

  if (!product) {
    return { title: localizedText.products.notFound };
  }

  return {
    title: `${product.title} by ${content.settings.name}`,
    description: product.description,
    openGraph: {
      images: [product.image],
    },
  };
}

export default async function ProductPage({
  params,
}: {
  params: ProductParamsType;
}) {
  const { id, lang } = (await params) as { id: string; lang: Langs };
  const product = getProductById(Number(id), lang);

  if (!product) {
    notFound();
  }

  return (
    <Modal>
      <ProductPDP lang={lang} product={product} />
    </Modal>
  );
}

export async function generateStaticParams() {
  const content = getContent();

  const esParams = content.es.products.items.map((item) => ({
    lang: "es",
    id: String(item.id),
  }));

  const enParams = content.en.products.items.map((item) => ({
    lang: "en",
    id: String(item.id),
  }));

  return [...esParams, ...enParams];
}
