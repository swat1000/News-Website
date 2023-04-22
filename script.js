let p = fetch("https://newsapi.org/v2/everything?q=bitcoin&apiKey=93aa5422144741d5bf86695b209c5011")
p.then((value1) => {
    // console.log(value1.status)
    // console.log(value1.ok)
    return value1.json()
}).then((value2) => {
    console.log(value2.articles[0]);
    for (i = 0; i < value2.articles.length; i++) {
        console.log(i)
        var html = `<div class="card m-4" style="width: 18rem;">
        <img src="${value2.articles[i].urlToImage}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${value2.articles[i].title}</h5>
            <p class="card-text">${value2.articles[i].content}</p>  
            <p class="card-text">Author: ${value2.articles[i].author} <br> Published on: ${value2.articles[i].publishedAt} <br> Source: ${value2.articles[i].source.name} </p>
            <a href="${value2.articles[i].url}" class="btn btn-primary">Read More</a>
        </div>
    </div>`;

        $(".container").append(html);
    }
}) 