const users = [
    {
            _id: 'ab12ex',
            username: 'Alex',
            email: 'alex@alex.com',
            password: '123123',
            createdAt:'17/05/2019 9:00 AM',
            isLoggedIn: false
    },
    {
            _id: 'fg12cy',
            username: 'Asab',
            email: 'asab@asab.com',
            password: '123456',
            createdAt:'17/05/2019 9:30 AM',
            isLoggedIn: true
    },
    {
            _id: 'zwf8md',
            username: 'Brook',
            email: 'brook@brook.com',
            password: '123111',
            createdAt:'17/05/2019 9:45 AM',
            isLoggedIn: true
    },
    {
            _id: 'eefamr',
            username: 'Martha',
            email: 'martha@martha.com',
            password: '123222',
            createdAt:'17/05/2019 9:50 AM',
            isLoggedIn: false
    },
    {
            _id: 'ghderc',
            username: 'Thomas',
            email: 'thomas@thomas.com',
            password: '123333',
            createdAt:'17/05/2019 10:00 AM',
            isLoggedIn: false
    }
    ];

    const products = [
{
    _id: 'eedfcf',
    name: 'mobile phone',
    description: 'Huawei Honor',
    price: 200,
    ratings: [
        { userId: 'fg12cy', rate: 5 },
        { userId: 'zwf8md', rate: 4.5 }
    ],
    likes: []
},
{
    _id: 'aegfal',
    name: 'Laptop',
    description: 'MacPro: System Darwin',
    price: 2500,
    ratings: [],
    likes: ['fg12cy']
},
{
    _id: 'hedfcg',
    name: 'TV',
    description: 'Smart TV:Procaster',
    price: 400,
    ratings: [{ userId: 'fg12cy', rate: 5 }],
    likes: ['fg12cy']
}
];

// RANDOM ID GENERATOR
function idGenerator(length){
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let id =""
    let characterLength = characters.length
  
    for(let i=0; i<length;i++){
      id+=characters.charAt(Math.floor(Math.random()* characterLength))
    }
    return id
  }
  

// a. Create a function called ***signUp*** which allows user to add to the collection. If user exists, inform the user that he has already an account.
  
  function signUp(username, email, password){
    let existingUsername = []
    let existingEmails = []
  
    for(let i=0;i<users.length;i++){
      existingUsername.push(users[i].username)
      existingEmails.push(users[i].email) 
    }
    
    if(existingUsername.includes(username)){
      console.log('Username already exists')
      alert("Username already exists")
    }
    if(existingEmails.includes(email)){
      console.log('Email already exists')
      alert("Email already exists")
    }else{
      users.push({
        id:idGenerator(6),
        username,
        email,
        password,
        createdAt: new Date(),
        isLoggedIn: false
      })
      alert("User Created")
    }
  
  }
  

//  b. Create a function called ***signIn*** which allows user to sign in to the application

  function signIn(email, password){
    let existingEmails = []
    let userIndex 
  
    for(let i=0;i<users.length;i++){
      existingEmails.push(users[i].email) 
    }
    userIndex =  existingEmails.indexOf(email)
   
  
    if(userIndex >-1 && password===users[userIndex].password){
      return 'You have logged in'
     }else{
      return 'Invalid credentials'
    }
  
  }
  
  signIn('asab@asab.com','123456')


// b. The products array has three elements and each of them has six properties.

// a. Create a function called ***rateProduct*** which rates the product
  function rateProduct(id,productName, rating){
    let allProducts = []
    let indexOfProduct
  
    products.map(product => allProducts.push(product.name))
    indexOfProduct = allProducts.indexOf(productName)
    
    products[indexOfProduct].ratings.push({ userId:id, rate: rating })
    console.log(products)
  
  }
  
  console.log(rateProduct('eefts','mobile phone',5))

//   b. Create a function called ***averageRating*** which calculate the average rating of a product

  function averageRating(productName){
    let allProducts = []
    let indexOfProduct
    let totalRating = []
  
    products.map(product => allProducts.push(product.name))
    indexOfProduct = allProducts.indexOf(productName)
    
    let ProductRating = products[indexOfProduct].ratings
    ProductRating.map(rating => totalRating.push(rating.rate))
    
    let sumRating =  totalRating.reduce((acc,value)=> acc += value)
  
    let averageRating = sumRating/totalRating.length
    return averageRating
  
  }
  
  console.log(averageRating('mobile phone'))

//   c. Create a function called likeProduct. This function will helps to like to the product if it is not liked and remove like if it was liked.
 
function likeProduct(id,productName){
    let allProducts = []
    let allLikes = []
    let productIndex
    let userLikeIndex
    products.map(product => allProducts.push(product.name))
    productIndex = allProducts.indexOf(productName)
  
    products[productIndex].likes.map(like => allLikes.push(like))
    userLikeIndex = allLikes.indexOf(id)
    if(userLikeIndex == -1){
      products[productIndex].likes.push(id)
      console.log("Liked")
    }else{
      products[productIndex].likes.splice(userLikeIndex,1)
      console.log("Like removed")
    }
  
  }
  
  console.log(likeProduct('f12cy','TV'))
  
  