"use client";

import { useRouter } from "next/navigation";
import type React from "react";
import { useEffect } from "react";

import type { CartItem } from "@/store/cart";
import { useCartStore } from "@/store/cart";

import Button from "../../atoms/Button";
import ProductCard from "../../molecules/ProductCard";

interface ProductPDPProps {
  product: CartItem;
  lang: string;
}

const ProductPDP: React.FC<ProductPDPProps> = ({ product, lang }) => {
  const router = useRouter();
  const { isModalOpen, closeModal, addToCart } = useCartStore();

  const handleClose = () => {
    router.back();
    closeModal();
  };

  const handleAddToCart = () => {
    addToCart(product);
    handleClose();
  };

  useEffect(() => {
    if (!isModalOpen) {
      useCartStore.setState({ isModalOpen: true, selectedProduct: product });
    }
  }, [product, isModalOpen]);

  if (!isModalOpen) return null;

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-10">
      <div className="flex flex-col justify-between">
        <ProductCard product={product} />
        <div className="mt-4 space-y-3">
          <Button
            variant="primary"
            size="lg"
            className="w-full"
            onClick={handleAddToCart}
          >
            Add to Cart
          </Button>

          <Button
            variant="primary"
            size="lg"
            className="w-full"
            onClick={handleAddToCart}
            href={`/${lang}/checkout`}
          >
            Go to Checkout
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductPDP;
