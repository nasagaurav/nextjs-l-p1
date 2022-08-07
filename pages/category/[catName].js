import Link from 'next/link';
import Card from '../../components/Card';
function Category({ products, categories, catName }) {
  return (
    <div className="main p-5">
      <h1 className="inline-flex bg-gray-300  p-5 rounded-full shadow-md">
        Category page {catName}
      </h1>
      <div>
        <h3 className="my-5">all categories {categories.length}</h3>
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
      <div className="products mt-5 flex flex-wrap">
        {products.map((item, index) => (
          <Card key={index} {...item} />
        ))}
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
      catName: cat,
    },
  };
}
