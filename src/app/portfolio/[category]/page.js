export default function CategoryPage(props) {
  const { params } = props; 
  return (
    <div>
      <h1>Category: {params.category} </h1>
      <p>Here are some of my projects</p>
    </div>
  );
}