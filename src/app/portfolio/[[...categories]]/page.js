export default function CategoryPage(props) {
  console.log(props);
  const { params } = props; 
  return (
    <div>
      <h1>Categories: {params.categories} </h1>
      <p>Here are some of my projects</p>
    </div>
  );
}