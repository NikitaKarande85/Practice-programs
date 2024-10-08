
//GET
fetch("https://dummyjson.com/products")
    .then((data) => data.json())
    .then((items) => {
        console.log("products", items.products);
    }).catch((err) => {
        console.log("err", err);
    })


//POST
    fetch('https://dummyjsons.com/products/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: 'BMW Pencil',
          category: 'Stationary'
        })
      })
      .then(res => res.json())
      .then(console.log)
      .catch((err) => {
        console.log(err);
      })