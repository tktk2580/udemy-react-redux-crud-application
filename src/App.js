import React from 'react';

const App = () => {
  const profiles = [
    { name:"Raro",  age:10 },
    { name:"hana",  age:1 },
    { name:"aho" },
  ]
  return (
    <div>
      {
        profiles.map((profile, index) => {
          return <User name={profile.name}  age={profile.age} key={index}/>
        })
      }
    </div>
  )
}

const User = (props) => {
  return <div>hi! {props.name}で{props.age}</div>
}
User.defaultProps = {
  age:1
}

export default App;


