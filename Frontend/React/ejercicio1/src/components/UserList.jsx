
const UserList = (props) => {

  const { search, arr } = props

  return (
    <div>
      {arr.filter((data) => {
        if (search === '') return data

        const regex = new RegExp('^' + search, 'i')
        return regex.test(data.nombre)
      })
        .map((data) => (
          <div key={data.id}>
            {data.nombre}
            {data.email}
          </div>
        ))}
    </div>
  )
}

export default UserList