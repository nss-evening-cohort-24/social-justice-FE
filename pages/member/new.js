import React from 'react';
import MemberForm from '../../components/forms/MemberForm';
import damienTran from '../../images/damienTran.jpg';

export default function AddMember() {
  return (
    <>
      <img alt="img" src={damienTran.src} id="tran" />
      <div className="mem-form">
        <MemberForm />
      </div>
    </>
  );
}
