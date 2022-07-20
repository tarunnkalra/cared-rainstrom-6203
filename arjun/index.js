let append = async () => {
   // let user_data = `http://127.0.0.1:3000/api/Apple-Tv`;
   // let user_data = `http://127.0.0.1:3000/api/restaurant_item`;
    let user_data = `https://fakestoreapi.com/products`
    
    let user_response = await fetch(user_data, {
      method: "GET",
    });
    let data = await user_response.json();    
    console.log(data)
  };
  append();