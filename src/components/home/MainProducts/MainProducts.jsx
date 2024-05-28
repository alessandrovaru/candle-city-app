import Image from "next/image";

import styles from "./MainProducts.module.sass";


const getProduct = async () => {
  try {
    const response = await fetch(`${process.env.SHOPIFY_HOSTNAME}/admin/api/2023-10/products.json`, {
      headers: {
        'X-Shopify-Access-Token': process.env.SHOPIFY_ACCESS_TOKEN,
      },
    });
    throw new Error('Error fetching products');
    const { products } = await response.json();
    return products;
  } catch (error) {
    console.error('Error fetching products:', error);
    return null;
  }
};

export const MainProducts = async () => {

  const products = await getProduct();
  
  
  return (
    <div className="main-products">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="main-products__content">
            {products?.map((product) => {
                const imageSrc = product.images[0].src;
                return (
                  <div key={product.id}>
                    <h2>{product.title}</h2>
                    <div className={styles.imageContainer}>
                      <Image src={imageSrc} fill alt={product.title} loading="eager" />
                    </div>
                    <button>Shop Now</button>
                  </div>
                );
              }
            )}
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