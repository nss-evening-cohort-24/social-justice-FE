/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import getOrg from '../api/orgData';
import OrgCard from '../components/cards/OrgCard';
import noExcuses from '../images/noExcuses.webp';
// import SearchBar from '../components/search/SearchBar';

export default function ShowOrg() {
  const [orgs, setOrgs] = useState([]);

  const getTheOrgs = () => {
    getOrg(2).then(setOrgs);
  };

  useEffect(() => {
    getTheOrgs();
  }, []);

  return (
    <>
      <div className="text-center">
        <div className="blueImg"> </div>
        <img alt="img" src={noExcuses.src} id="noXimg" />
        <div className="header">Organizations</div>
        <div className="text-center my-4">
          <div className="d-flex flex-wrap">
            {orgs.map((org) => (
              <OrgCard key={org.id} orgObj={org} onUpdate={getOrg} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
