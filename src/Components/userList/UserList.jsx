import './UserList.css'
const UserList = ({ users, deleteUser }) => {
  return (
    <div className='userList'>
      <div className="userList-container container">
        <h1>UserList</h1>
        {users.map(user => {
          return (
            <div className='card' key={user.id}>
              <div className="card-inner">
                <img src={user.image} alt={user.name} width={170} height={170} />
                <h3>{user.firstName} {user.lastName} {user.age} yosh</h3>
                <p>Qayerdan: {user.from} </p>
                <p>Kasbi: {user.job} </p>
                <p>Jinsi: {user.gender}</p>
                <button onClick={() => deleteUser(user.id)}>O'chirish</button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default UserList
