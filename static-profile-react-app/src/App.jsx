import './App.css'
import DisplayProfiles from './components/ProfileContainer';

function App() {
  const profileCards = [
  {
    id: 1,
    name: "Nick",
    age: 29,
    hobby: "cycling",
    bio: "Just a stay-at-home cat dad who loves to bike!"
  },
  {
    id: 2,
    name: "Faith",
    age: 28,
    hobby: "video games",
    bio: "A developer excited for the opportunities ahead!"
  },
  {
    id: 3,
    name: "Mouse",
    age: 4,
    hobby: "killing mice",
    bio: "Orange cat. Enough said."
  },
  {
    id: 4,
    name: "Zelda",
    age: 1,
    hobby: "begging for food",
    bio: "The sweetest angel baby princess kitty with gluttonous tendencies."
  }
];
  return (
    <>
      <div>
        <DisplayProfiles profiles={profileCards}/>
      </div>
    </>
  )
}
export default App;
