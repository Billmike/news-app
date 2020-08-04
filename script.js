const searchNews = document.getElementById('search-news');
const showNews = document.getElementById('show-news');
const submit = document.getElementById('submit-btn');

const getNews = async () => {
  const res = await fetch(`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=OtN5TgEakuRqnuUsHHxWTfMISpfrrAV7
    `);
  let data = await res.json();
  console.log(data);

  const details = data.results;
  const showDetails = details.map((item) => {
    return `
          <div class="container-fluid">
          <div class="row">
              <div class="col-12 mt-3">
                  <div class="card">
                      <div class="card-horizontal">
                          <div class="img-square-wrapper">
                              <img class="image" src=${item.multimedia[0].url} alt="Card image cap">
                          </div>
                          <div class="card-body">
                              <h4 class="card-title">${item.title}</h4>
                              <p class="card-text">${item.abstract}.</p>
                          </div>
                      </div>
                      <div class="card-footer">
                          <small>${item.byline}</small>
                      </div>
                  </div>
              </div>
          </div>
      </div>
          `;
  });
  showNews.innerHTML = showDetails;
};

submit.addEventListener('click', getNews);
