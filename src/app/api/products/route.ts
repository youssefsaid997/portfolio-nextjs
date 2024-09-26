import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const pageQuery = request.nextUrl.searchParams.get("page") as string;
  const page = pageQuery == null ? 1 : parseInt(pageQuery);

  // get fake products
  const products = await fetch("https://fakestoreapi.com/products").then(
    (res) => res.json()
  );

  const paginatedProducts = createPagination(products, page, 5);
  // paginate products based on page
  // i need req.query to get page=1
  // i need a function i should write to paginate the elements and return the array of paginated products

  // return data to the user
  return NextResponse.json({ data: paginatedProducts }, { status: 200 });
}

function createPagination(products: [], pageNumber: number, limit: number) {
  // page number
  const numberOfPages = Math.ceil(products.length / limit);
  const skippedIndex = limit * pageNumber;
  const startIndex = (pageNumber - 1) * limit; // 1 => (1-1)*24 =0 , (2-1)*24 => 24;

  // based on number of page and products we will get the specific elements for each page
  return {
    total_pages: numberOfPages,
    products: products.slice(startIndex, skippedIndex),
  };
}
