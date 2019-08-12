import React from 'react';
import MaterialTable from 'material-table';
import Popup from 'reactjs-popup';
// import { Link } from 'react-router-dom';
import DATA3 from './constant';
import Header from '../../components/header';
// eslint-disable-next-line consistent-return
function check(props) {
  let a;
  let idx;
  for (let index = 0; index < DATA3.length; index += 1) {
    if (props === DATA3[index].id) {
      a = true;
      idx = index;
    }
  }
  if (a === true) {
    return (
      <div>
        <p>Name: {DATA3[idx].name}</p>
        <p>Age: {DATA3[idx].age}</p>
        <p>Class: {DATA3[idx].class}</p>
        <p>Email: {DATA3[idx].email}</p>
        <p>Phone: {DATA3[idx].phone}</p>
        <p>Address: {DATA3[idx].address}</p>
        <button type="button">EDIT</button>
      </div>
    );
  }
}
export default function InformationPage() {
  return (
    <div>
      <Header />
      <MaterialTable
        title="Thông Tin Giảng Viên"
        columns={[
          {
            title: 'Avatar',
            field: 'imageUrl',
            render: rowData => (
              // eslint-disable-next-line jsx-a11y/alt-text
              <img
                src={rowData.imageUrl}
                style={{ width: 40, height: 40, borderRadius: '50%' }}
              />
            ),
          },
          { title: 'Họ và Tên', field: 'name' },
          { title: 'Lớp', field: 'class' },
          { title: 'Tuổi', field: 'age', type: 'numeric' },
          {
            title: '',
            field: 'action',
            render: rowData => (
              <Popup
                trigger={
                  <button className="button" type="button">
                    {' '}
                    Xem{' '}
                  </button>
                }
                modal
                closeOnDocumentClick
              >
                {check(rowData.id)}
              </Popup>
            ),
          },
        ]}
        data={DATA3.map(value => value)}
      />
    </div>
  );
}
