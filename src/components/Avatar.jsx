function Avatar({imageUrl, isNew}) {
  return (
    <div className='avatar'>
      <img
        className='photo'
        src={imageUrl}
        alt="avatar"/>
      {isNew && <span className='new'>new</span>}
    </div>
  );
}

export default Avatar;