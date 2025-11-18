"use client";

import type React from "react";
import { useEffect } from "react";
import { useCartStore, CartItem } from "@/store/cart";

import Button from "../../atoms/Button";
import { useRouter } from "next/navigation";
import ProductCard from "@/components/molecules/ProductCard";

interface ProductPDPProps {
  product: CartItem;
  lang: string;
}

const ProductPDP: React.FC<ProductPDPProps> = ({
  product,
  lang,
}) => {
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
  }, [product.id]);

  if (!isModalOpen) return null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
      <div className="flex flex-col justify-between">
        <ProductCard product={product} />
        <div className="space-y-3 mt-4">
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
