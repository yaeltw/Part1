// const Header = (props) => {
//   return (
//     <div>
//       <h1> {props.course} </h1>
//     </div>
//   )
// }



// const Part = (prop) => {
//   return (
//   <div>
//     <p>
//       {prop.name} {prop.number}
//     </p>
//   </div>
//   )
// }



// const Total = () => {
//   const exercises1 = 10
//   const exercises2 = 7  
//   const exercises3 = 14
//   return (
//     <div>
//       <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
//     </div>
//   )
// }


const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
       <h1> {course} </h1>
       <p> {part1.name} {part1.exercises} </p>
       <p> {part2.name} {part2.exercises} </p>
       <p> {part3.name} {part3.exercises} </p>
    </div>
  )
}

export default App