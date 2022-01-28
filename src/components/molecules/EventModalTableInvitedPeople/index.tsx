import MaterialTable from 'material-table'

export default function RemoteData({ peopleInvited }): any {
  return (
    <MaterialTable
      title="Lista de convidados"
      columns={[
        { title: 'Id', field: 'id' },
        {
          title: 'Avatar',
          field: 'avatar',
          render: rowData => (
            <img
              style={{ height: 36, borderRadius: '50%' }}
              src={rowData.avatar}
              alt="img"
            />
          ),
        },

        { title: 'Username', field: 'username' },
        { title: 'Nome', field: 'name' },
        {
          title: 'Confirmado',
          field: 'confirmed_presence',
          render: rowData => {
            if (rowData.confirmed_presence) {
              return <h5>sim</h5>
            }
            return <h5>não</h5>
          },
        },
      ]}
      data={peopleInvited}
    />
  )
}
