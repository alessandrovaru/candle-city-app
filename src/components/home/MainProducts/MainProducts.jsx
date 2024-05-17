const getProduct = async () => {
  const response = await fetch(`${process.env.SHOPIFY_HOSTNAME}/admin/api/2023-10/products.json`, {
    headers: {
      'X-Shopify-Access-Token': process.env.SHOPIFY_ACCESS_TOKEN,
    },
  });
  const data = await response.json();
  return data;
};


export const MainProducts = async () => {

  const products = await getProduct();
  console.log(JSON.stringify(products));
  
  
  return (
    <div className="main-products">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="main-products__content">
              <h2 className="main-products__title">New Arrivals</h2>
              <p className="main-products__text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                venenatis, eros scelerisque volutpat fringilla, mi diam varius
                est, a vehicula nunc turpis at ante.
              </p>
              <button className="main-products__btn">Shop Now</button>
            </div>
          </div>
          <div className="col-md-6">
            <div className="main-products__img">
              image
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}