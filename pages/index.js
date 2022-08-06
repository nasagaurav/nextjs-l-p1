import Link from 'next/link';

function Home({ products, categories }) {
  return (
    <div>
      <h1>Home page</h1>
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
        {products.map((item, index) => (
          <Card key={index} {...item} />
        ))}
      </div>
    </div>
  );
}

export default Home;

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
