export default function CategoryPage(props) {
  const { params } = props; 
  throw new Error('Error fetching products');
  return (
    <div>
      <h1>Categories: {params.categories} </h1>
      <p>Here are some of my projects</p>
    </div>
  );
}