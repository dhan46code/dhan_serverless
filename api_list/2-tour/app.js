const result = document.querySelector('.result_tour');

const fetchData = async () => {
  try {
    const { data } = await axios.get(
      'https://dhan-api.netlify.app/api/2-tour-api'
    );
    const tours = data
      .map((tour) => {
        const { id, name, img, country, info } = tour;
        return `
     
        <article id=${id} class='tours'>
           <img src=${img}></img>
           <footer>
           <div class='tour-title'>
             <h4>${name}</h4>
             <h4>${country}</h4>
           </div>
           <p>${info}</p>
           </footer>
      </article>`;
      })
      .join('');
    result.innerHTML = tours;
  } catch (error) {
    console.log(error.response.data);
    result.innerHTML = `<h2>Error fetch data, please check again later...</h2>`;
  }
};

fetchData();
