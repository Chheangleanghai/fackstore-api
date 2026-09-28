let container = document.querySelector('.container')
async function getData() {
    let respone = await fetch('https://fakestoreapi.com/products')
    let data = await respone.json();
    console.log(data);
    
    let txt = ""
    data.forEach(e => {
        txt += `
            <div class="card">
                <div class="img">
                    <img src="${e.image}" alt="">
                </div>
                <div class="text">
                    <h3 class="title">${e.title}</h3>
                    <p class="des">${e.description}</p>
                    <button class="price">$${e.price}</button>
                    <p class="rating">rate: ${e.rating.rate},count: ${e.rating.count}</p>
                    <button class="addCart">Add to cart</button>
                </div>
            </div>
        `
    });
    container.innerHTML = txt
}
getData()