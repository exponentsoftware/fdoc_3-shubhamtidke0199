// 1. A junior developer structure student name, skills and score in array of arrays 
// which may not easy to read. Destruction the following array name to name, 
// skills array to skills, scores array to scores, JavaScript score to jsScore and 
// React score to reactScore variable.


const student = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]

// DESTRUCTURING NAME SKILLS AND SCORE FROM STUDENTS
const [name, skills, scores] = student

//DESTRUCTURING JSSCORE AND REACTSCORE FROM SCORES
const [,,jsScore,reactScore] = scores



// 2.Write a function called convertArrayToObject which can convert the array to a structured object.

const students = [
    ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
    ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
  ]
  
  //FUNCTION TO COVERT ARRAY INTO OBJECT

  function convertArrayToObject(arr){
    let arrayOfObjects = []
    for(let i=0; i<arr.length;i++){
      arrayOfObjects.push(
        {
          name:arr[i][0],
          skills:arr[i][1],
          scores:arr[i][2]
        })
    }
    return arrayOfObjects
  
  
  }
  
  console.log(convertArrayToObject(students))



// 3.Copy the student object to newStudent without mutating the original object. In the new object add the following ?

const student1 = {
    name: 'David',
    age: 25,
    skills: {
        frontEnd: [
            { skill: 'HTML', level: 10 },
            { skill: 'CSS', level: 8 },
            { skill: 'JS', level: 8 },
            { skill: 'React', level: 9 }
        ],
        backEnd: [
            { skill: 'Node',level: 7 },
            { skill: 'GraphQL', level: 8 },
        ],
        dataBase:[
            { skill: 'MongoDB', level: 7.5 },
        ],
        dataScience:['Python', 'R', 'D3.js']
    }
}


let newObject = {...student1}
// i.Add Bootstrap with level 8 to the front end skill sets 
newObject.skills.frontEnd.push({ skill: 'Bootstrap', level: 8 })

//ii. Add Express with level 9 to the back end skill sets
newObject.skills.backEnd.push({ skill: 'Express', level: 9 })

// iii. Add SQL with level 8 to the data base skill sets
newObject.skills.dataBase.push({ skill: 'SQL', level: 8 })

//iv.Add SQL without level to the data science skill sets
newObject.skills.dataScience.push('SQL')

console.log(newObject)


//a. Find the length of student object keys
let keyLength = Object.keys(student1).length
console.log(keyLength)