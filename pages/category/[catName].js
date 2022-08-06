import Link from 'next/link';

function Category({ products, categories }) {
  return (
    <div>
      <h1>Category page ?</h1>
      <div>
        <h3>all categories {categories.length}</h3>
        {categories.map((x) => (
          <Link key={x} href={`/category/${x}`}>
            <a>{x}</a>
          </Link>
        ))}
      </div>
      <div>
        <h3>all products {products.length}</h3>
      </div>
    </div>
  );
}

export default Category;

export async function getServerSideProps(context) {
  // console.log("url data is ",context.query.catName)
  const cat = context.query.catName;

  const products = await fetch(
    `https://fakestoreapi.com/products/category/${cat}`
  ).then((d) => d.json());
  const categories = await fetch(
    'https://fakestoreapi.com/products/categories'
  ).then((d) => d.json());

  return {
    props: {
      products: products,
      categories: categories,
    },
  };
}
