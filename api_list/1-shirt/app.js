const result = document.querySelector('.result');

const fetchData = async () => {
  try {
    const { data } = await axios.get('/api/1-product-shirt');
    const products = data
      .map((product) => {
        const {
          id,
          name,
          img: { url },
          price,
          status,
        } = product;
        return `<article class='product' id=${id}>
          <img src=${url} alt=${status}></img>
          <div class='info'>
            <h5>${name}</h5>
            <h5>${price}</h5>
          </div>
      </article>`;
      })
      .join('');
    result.innerHTML = products;
  } catch (error) {
    console.log(error.response.data);
    result.innerHTML = `<h2>Error fetch data, please check again later...</h2>`;
  }
};

fetchData();
