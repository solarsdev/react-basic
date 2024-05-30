import Avatar from "./Avatar.jsx";

function Profile({ imageUrl, name, jobTitle, isNew }) {
  return (
    <div className='profile'>
      <Avatar imageUrl={imageUrl} isNew={isNew} />
      <h1>{name}</h1>
      <p>{jobTitle}</p>
    </div>
  );
}

export default Profile;