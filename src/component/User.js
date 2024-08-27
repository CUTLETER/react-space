function User() {

  const user = {
    name: 'Hedy Lamarr',
    imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
    imageSize: 90,
  };

  return(
    <>
      <h1>{user.name}</h1>
      <img 
        className="avatar" /* CSS에 전달될 클래스명 */
        src={user.imageUrl}
        alt={'Photo of' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
      />      
    </>
  )
}

export default User;