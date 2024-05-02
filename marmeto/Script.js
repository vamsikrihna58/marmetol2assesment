function vamsi(cat) {
	const showresults='';
	const response= fetch("https://cdn.shopify.com/s/ files/1/0564/3685/0790/files/multiProduct.json");
	    // const data= response;
	     let de=response.filter(product=>product.category===cat);
	       products.forEach(product => {

         	let result=`
	     <div class="product-card">
            <img src="${product.image}" alt="${product.title}" class="product-image">
            <div class="badge">${product.badge}</div>
            <div class="title">${product.title}</div>
            <div class="vendor">${product.vendor}</div>
            <div class="price">$${product.price}</div>
            <div class="compare-at-price">Compare at $${product.compareAtPrice}</div>
            <div class="discount">Discount: ${calculateDiscount(product.price, product.compareAtPrice)}%</div>
            <button class="add-to-cart">Add to Cart</button>
          </div>
        `;
        document.getElementById('productsContainer').innerHTML += result;
      });
	       function calculateDiscount(price, compareAtPrice) {
      const discount = ((compareAtPrice - price) / compareAtPrice) * 100;
      return discount.toFixed(2);
    }
    
}
