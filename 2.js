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