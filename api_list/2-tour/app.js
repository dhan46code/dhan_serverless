const result = document.querySelector('.result_tour');

const fetchData = async () => {
  try {
    const { data } = await axios.get('/api/2-tour-api');
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
  } catch (error) {}
};

fetchData();
