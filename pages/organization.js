/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import getOrg from '../api/orgData';
import OrgCard from '../components/cards/OrgCard';
// import SearchBar from '../components/search/SearchBar';

export default function ShowOrg() {
  const [orgs, setOrgs] = useState([]);

  const getTheOrgs = () => {
    getOrg().then(setOrgs);
  };

  useEffect(() => {
    getTheOrgs();
  }, []);

  return (
    <><div className="text-center my-4"><h1>Our Organization</h1></div>
      <div className="text-center my-4">
        <div className="d-flex flex-wrap">
          {orgs.map((org) => (
            <OrgCard key={org.firebaseKey} orgObj={org} onUpdate={getOrg} />
          ))}
        </div>
      </div>
    </>
  );
}
