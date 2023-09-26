function CardProduct({product, image, title, description, price}) {
  return (
    <div className="card-container">
        <div key={product.id} className="card-product mt-5 col-12 col-md-4 col-xl-2">
          <img src={product.image} className='img-fluid product-image' alt={product.title} ></img>
          <h1 className='mt-3 product-title'>{product.title}</h1>
          <div className='precio mt-5'>${product.price}</div>
            <a href='./Item/Item.jsx' className='mt-3' >Ver más</a>
          </div>
    </div>
  );
}

export default CardProduct;