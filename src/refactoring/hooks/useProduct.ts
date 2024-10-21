import { useState } from 'react';
import { Product } from '../../types.ts';

export const useProducts = (initialProducts: Product[]) => {
  const [products, setProducts] = useState<Product[]>(initialProducts);

  const addProduct = (target: Product) => {
    setProducts([...products, target]);
  };

  const updateProduct = (target: Product) => {
    setProducts(
      products.map((product) => (product.id === target.id ? target : product)),
    );
  };

  return { products, addProduct, updateProduct };
};
