import React from 'react';
import MaterialTable from 'material-table';
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';
import { Link } from 'react-router-dom';
import Popup from 'reactjs-popup';
import DATA2 from './constant';
import './styles.css';
import Header from '../../components/header';
// eslint-disable-next-line consistent-return
function check(props) {
  let a;
  let idx;
  for (let index = 0; index < DATA2.length; index += 1) {
    if (props === DATA2[index].id) {
      a = true;
      idx = index;
    }
  }
  if (a === true) {
    return (
      <MDBContainer>
        <MDBRow>
          <MDBCol md="6">
            <form>
              <p className="h4 text-center py-4">Học viên: {DATA2[idx].name}</p>
              <label
                htmlFor="defaultFormCardNameEx"
                className="grey-text font-weight-light"
              >
                Tuổi
              </label>
              <input
                type="text"
                id="defaultFormCardNameEx"
                className="form-control"
                placeholder={DATA2[idx].age}
                disabled="disabled"
              />
              <br />
              <label
                htmlFor="defaultFormCardNameEx"
                className="grey-text font-weight-light"
              >
                Email
              </label>
              <input
                type="text"
                id="defaultFormCardNameEx"
                className="form-control"
                placeholder={DATA2[idx].email}
                disabled="disabled"
              />
              <br />
              <label
                htmlFor="defaultFormCardNameEx"
                className="grey-text font-weight-light"
              >
                Lớp
              </label>
              <input
                type="text"
                id="defaultFormCardNameEx"
                className="form-control"
                placeholder={DATA2[idx].class}
                disabled="disabled"
              />
              <br />
              <div className="text-center py-4 mt-3">
                <MDBBtn className="btn btn-outline-purple">Edit</MDBBtn>
              </div>
            </form>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}
export default function InformationPage() {
  return (
    <div>
      <Header />
      <MaterialTable
        title="Thông Tin Học Viên"
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
          { title: 'ID', field: 'id' },
          { title: 'Họ và Tên', field: 'name' },
          {
            title: 'Lớp',
            field: 'class',
            render: rowData => (
              // <Popup
              //   trigger={<button className="button"> {rowData.class} </button>}
              //   modal
              //   closeOnDocumentClick
              // >
              //   {conect(rowData.class)}
              // </Popup>
              <Link to={`detail/${rowData.id}`}>{rowData.class}</Link>
            ),
          },
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
        data={DATA2.map(value => value)}
      />
    </div>
  );
}
