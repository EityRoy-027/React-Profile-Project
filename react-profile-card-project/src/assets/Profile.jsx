function Profile(props) {
  return (
    <div
      style={{
        border: "2px solid black",
        margin: "10px",
        padding: "10px",
        borderRadius: "10px",
      }}
    >
      <h2>Name: {props.name}</h2>

      <p>Age: {props.age}</p>

      <p>Hobbies: {props.hobbies}</p>

      <h4>{props.greeting}</h4>

      <button>Contact</button>
    </div>
  );
}

export default Profile;