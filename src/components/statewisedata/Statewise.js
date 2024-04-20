import React, { useEffect, useState } from "react";
import './StateWise.css'
function Statewise() {
  const [data, setData] = useState([]);

  const getCovidData = async () => {
    const res = await fetch("https://data.covid19india.org/data.json");
    const actualdata = await res.json();
    setData(actualdata.statewise);
  };
  useEffect(() => {
    getCovidData();
  }, []);
  return (
    <>
      <div className="container">
        <div className="main">
          <h4>
            <span className="india">INDIA</span> Covid-19 Statewise Live Data
          </h4>
        </div>
      </div>
      <div className="table">
        <table>
          <thead>
            <tr>
              <th>State</th>
              <th>Confirmed</th>
              <th>Recovererd</th>
              <th>Deaths</th>
              <th>Active</th>
              <th>Updated</th>
            </tr>
          </thead>
          <tbody>
            {data.map((currEle, indx) => {
              return (
                <tr key={indx}>
                  <td>{currEle.state}</td>
                  <td>{currEle.confirmed}</td>
                  <td>{currEle.recovered}</td>
                  <td>{currEle.deaths}</td>
                  <td>{currEle.active}</td>
                  <td>{currEle.lastupdatedtime}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Statewise;
