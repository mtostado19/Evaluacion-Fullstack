import './userlist.style.css'

const UserList = (props) => {

  const { search, arr } = props

  return (
    <div className='list'>
      <div className='list-header'>
        <div> Nombre </div>
        <div> Email </div>
      </div>
      {arr.filter((data) => {
        if (search === '') return data

        const regex = new RegExp('^' + search, 'i')
        return regex.test(data.nombre)
      })
        .map((data) => (
          <div key={data.id} className='list-items'>
            <div>
              {data.nombre}
            </div>
            <div>
              {data.email}
            </div>
          </div>
        ))}
    </div>
  )
}

export default UserList