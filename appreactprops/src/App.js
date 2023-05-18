import './App.css';
import Profile from './profile/Profile.js';
import PropTypes from "prop-types";

function App() {
  let paragraphe="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel sapien tristique, vestibulum justo non, pretium magna. Maecenas gravida quam ac dolor ultrices placerat at at nisl. Integer pretium imperdiet volutpat. Curabitur auctor, elit ac rutrum aliquam, purus augue scelerisque orci, non tempor velit nisi in odio. Sed eros lectus, luctus at fringilla a, feugiat nec nunc. Proin a metus congue diam tempus luctus vel ut sem. Susp"
  let styling={width:"250px",heigth:"300px", border:"solid"}
  let handleName=(pers)=>{
    alert("ceci est un alerte pour "+ pers)
  }
  
  return (  
    <div>
      
      
      <Profile handleName={handleName} fullName="Sarra" bio={paragraphe} profession="developer" stylin={styling} img="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80"/>
      <h1>heey</h1>

    </div>
  );
}

export default App;
