// const User = (props) => {
//   console.log(props);
//   return (

//     <div>
//       <h1>{props.firstname}</h1>
//       <a href="youtube.com"> {props.link}</a>  
//     </div>
//   )
// }

//////////////// 2 way////////////////////

const User = ({firstname,link}) => {
  return (
    <div>
      <h1>{firstname.name}</h1>
      <a href="youtube.com"> {link()}</a>  
    </div>
  )
}

const App = () => {
  return (

    <div>
      <User firstname= {{name :'ivaliev'}}link={()=>"kunuz"} />
      <User firstname= {{name :'islom'}}link={()=>"youtube"} />    {/* /*bu yerda callback functin ishlatilgan */}  
     

    
    </div>
  )
}

export default App
