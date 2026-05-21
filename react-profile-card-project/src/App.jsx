

function App() {


  return (
    <>
   

const profile = [
  {
    id: 1,
    name: "Alice",
    age: 30,
    hobbies: "Reading, Hiking",
    greeting: "Hi Alice, have a wonderful day!",
  },

  {
    id: 2,
    name: "Bob",
    age: 25,
    hobbies: "Gaming, Traveling",
    greeting: "Hi Bob, enjoy your day!",
  },

  {
    id: 3,
    name: "Charlie",
    age: 28,
    hobbies: "Photography, Music",
    greeting: "Hi Charlie, stay awesome!",
  },
];

    </>
  )
}

export default App
import ProfileCard from "./ProfileCard";

function App() {
  const profile = [
    {
      id: 1,
      name: "Alice",
      age: 30,
      hobbies: "Reading, Hiking",
      greeting: "Hi Alice, have a wonderful day!",
    },

    {
      id: 2,
      name: "Bob",
      age: 25,
      hobbies: "Gaming, Traveling",
      greeting: "Hi Bob, enjoy your day!",
    },
  ];

  return (
    <>
      <h1>Profile Card Challenge</h1>

      {profile.map((item) => (
        <ProfileCard
          key={item.id}
          name={item.name}
          age={item.age}
          hobbies={item.hobbies}
          greeting={item.greeting}
        />
      ))}
    </>
  );
}

export default App;