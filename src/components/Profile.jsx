function Profile({ imageUrl, name, jobTitle, isNew }) {
  return (
    <div className='profile'>
      <img
        className='photo'
        src={imageUrl}
        alt="avatar"/>
      <h1>{name}</h1>
      <p>{jobTitle}</p>
      {isNew && <span className='new'>new</span>}
    </div>
  );
}

export default Profile;