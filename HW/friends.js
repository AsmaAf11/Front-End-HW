//1

const friends = ["Melissa", "Marc", "Andrew", "Nick"];

    friends.forEach(function(friend) {
        console.log("I have a friend named " + friend.toLowerCase());
      });
//2
const numbers = [1, 5, 8]
let double = numbers.map(x => x * x);

console.log(double);


//bouns
const instructors = ["Alex", "Daniel", "Morgan", "Ben", "Micah", "Jims"];
instructors.map((str) => {
    const {length} = str;
    
    console.log(length)
  });

//3
const arr = ["Alex", "Daniel", "Morgan", "Ben", "Micah", "Jims"];

let newArr = arr.map(name => name+" is awsome");

console.log(newArr);
  
//4
const nums = [25, 6, 8, 3];

number= nums.filter(num => (num%2==0));

console.log(number.length);


  //5
  const people = ["jerks", "nice people", "jerks", "nice people", "nice people"];
  let jerks = people.filter(x =>x.includes('jerks')) ;
  console.log(jerks);

  // jerks equals ["jerks", "jerks"]

//6
const average = arr => arr.reduce( ( p, c ) => p + c, 0 ) / arr.length;
const result = average( [8, 2, 2, 4] ); 
console.log(result);
//7
  let reverseWordArr =(word => word.split("").reverse().join(""));

  console.log(reverseWordArr("caterpillar"));


  //8


  function Movie1(name, duration, stars) {
    this.name = name;
    this.duration = duration;
    this.stars = stars;
    this.mov = function() {
      console.log(`${name} lasts for: ${duration} minuets stars:${stars}`)
    }
  
  
  }
  
  let Movie01 = new Movie1("Puff the Magic Dragon", 30, ["me","u"]);

  
  
  
 Movie01.mov();
 

