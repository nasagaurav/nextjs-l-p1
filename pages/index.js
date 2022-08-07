import Link from 'next/link';
import Card from '../components/Card';
function Home({ products, categories }) {
  return (
    <div className="main p-5">
      <div className="all-cat">
        <h3 className="text-lg mb-5">all categories {categories.length}</h3>
        {categories.map((x) => (
          <Link key={x} href={`/category/${x}`}>
            <a
              className="
            m-2 
            bg-[tomato] text-white p-2 
            rounded-full  
            hover:shadow-[0px_2px_10px_grey] 
            hover:bg-[slateblue] 
            
            "
            >
              {x}
            </a>
          </Link>
        ))}
      </div>
      <div className="products mt-5">
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
