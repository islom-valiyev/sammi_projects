const User = (props) => {
  console.log(props);
  return (

    <div>
      <h1>{props.firstname}</h1>
      <a href="youtube.com"> {props.link}</a>
    </div>
  )
}


const App = () => {
  return (

    <div>
      <User firstname="valiev" link="kunuz" />
      <User firstname="islom" link="Youtube" />
      <User firstname="zoir" link="intra" />

    </div>
  )
}

export default App
