getNews();

function getNews (){
    $(".container").text("");

    var searchkey = $("#keyword").val();

    if(searchkey == ""){
        searchkey = "latest";
    }

    let p = fetch("https://newsapi.org/v2/everything?q="+searchkey+"&apiKey=93aa5422144741d5bf86695b209c5011")
    p.then((value1) => {
        // console.log(value1.status)
        // console.log(value1.ok)
        return value1.json()
    }).then((value2) => {
        console.log(value2.articles[0]);
        for (i = 0; i < value2.articles.length; i++) {
            console.log(i)
            if (value2.articles[i].urlToImage == null){
                
                value2.articles[i].urlToImage = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1200px-No-Image-Placeholder.svg.png";
            }
            var html = `<div class="card m-2 p-2" style="width: 100%;">
            <div class="row g-4">
              <div class="col-md-4">
                <img src="${value2.articles[i].urlToImage}" class="img-fluid rounded-start" alt="...">
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">${value2.articles[i].title}</h5>
                  <p class="card-text">${value2.articles[i].content}</p>
                  <p class="card-text">Author: ${value2.articles[i].author} <br> 
                  Source: ${value2.articles[i].source.name}<br> 
                  <small class="text-body-secondary">Published On: ${value2.articles[i].publishedAt}</small></p>
                  <a href="${value2.articles[i].url}" class="btn btn-primary">Read More</a>
                </div>
              </div>
            </div>
          </div>`;
    
            $(".container").append(html);
        }
    }) 
}


