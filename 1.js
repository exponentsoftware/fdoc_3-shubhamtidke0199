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