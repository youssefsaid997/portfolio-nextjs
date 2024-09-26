"use client";

import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Pagination from "./Pagination";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  console.log(page);

  async function getProducts() {
    const data = await fetch(`api/products?page=${page}`).then((res) =>
      res.json()
    );
    console.log(page);
    console.log(data.data);

    setProducts(data.data);
  }

  function handleClick(page: number) {
    setPage(page);
  }

  useEffect(() => {
    getProducts();
  }, [page]);
  return (
    <div>
      <div>
        {products.map((product: Product) => (
          <div key={product.id}>
            <h2>{product.title}</h2>
            <h4>{product.price}</h4>
          </div>
        ))}
      </div>
      <Pagination page={page} handlePagination={handleClick} pagesNumber={4} />
    </div>
  );
}

export default ProductList;

type Product = { title: string; price: number; id: number };
