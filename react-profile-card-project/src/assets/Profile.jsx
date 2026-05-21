function Profile() {
  return (
    <div>
      <h1>Profile Card Challenge</h1>

      <Profile
        name="Alice"
        age={30}
        greeting={
          <div>
            <strong>
              Hi Alice, have a wonderful day!
            </strong>
          </div>
        }
      >
        <p>Hobbies: Reading, Hiking</p>
        <button>Contact</button>
      </Profile>
    </div>
  );
}

export default Profile;