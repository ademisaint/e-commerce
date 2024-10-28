// context/ProductContext.tsx
"use client"

import React, { createContext, useContext, useEffect, useState } from 'react';

type Category = {
    slug: string;
    name: string;
    url: string;
};

type Product = {
    id: number;
    title: string;
    description: string;
    category: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    tags: string[];
    brand: string;
    sku: string;
    weight: number;
    dimensions: {
      width: number;
      height: number;
      depth: number;
    };
    warrantyInformation: string;
    shippingInformation: string;
    availabilityStatus: string;
    reviews: {
      rating: number;
      comment: string;
      date: string;
      reviewerName: string;
      reviewerEmail: string;
    }[];
    returnPolicy: string;
    minimumOrderQuantity: number;
    meta: {
      createdAt: string;
      updatedAt: string;
      barcode: string;
      qrCode: string;
    };
    images: string[];
    thumbnail: string;
};

type ProductContextType = {
  products: Product[] | null;
  categories: Category[];
};

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const ProductProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [products, setProducts] = useState<Product[] | null>(null);
  const [categories, setCategories] = useState< Category[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch('https://dummyjson.com/products');
        const data = await res.json();
        setProducts(data.products);

        console.log(data)
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    // const fetchCategories = async () => {
    //   try {
    //     const res = await fetch('https://dummyjson.com/products/categories');
    //     const data = await res.json();
        
    //     // Assuming data is already an array of categories
    //     setCategories(data);
    //   } catch (error) {
    //     console.error("Error fetching categories:", error);
    //   }
    // };

    fetchProducts();
    // fetchCategories();

  }, []);

  useEffect(() => {
    const fetchCategories = async () => {
          try {
            const res = await fetch('https://dummyjson.com/products/categories');
            const data = await res.json();
            
            // Assuming data is already an array of categories
            setCategories(data);
          } catch (error) {
            console.error("Error fetching categories:", error);
          }
        };
  }, [])

  return (
    <ProductContext.Provider value={{ products, categories }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => {
  const context = useContext(ProductContext);
  if (context === undefined) {
    throw new Error('useProductContext must be used within a ProductProvider');
  }
  return context;
};
