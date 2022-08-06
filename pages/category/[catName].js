import Link from 'next/link';

function Category({ products, categories }) {
  console.log(products);
  console.log(categories);
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

export async function getServerSideProps() {
  const products = await fetch('https://fakestoreapi.com/products').then((d) =>
    d.json()
  );
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
