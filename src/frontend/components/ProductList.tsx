"use client";

import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Pagination from "./Pagination";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  async function getProducts() {
    const data = await fetch(`api/products?page=${page}`).then((res) =>
      res.json()
    );
    setProducts(data.data.products);
    setTotalPages(data.data.total_pages);
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
      <Pagination
        page={page}
        handlePagination={handleClick}
        pagesNumber={totalPages}
      />
    </div>
  );
}

export default ProductList;

type Product = { title: string; price: number; id: number };
