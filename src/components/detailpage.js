import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useLocation } from "react-router-dom";

function sanitizeHTML(html) {
  const doc = new DOMParser().parseFromString(html, 'text/html');
  return doc.body.textContent || "";
}

function DetailsPage() {
  let { state } = useLocation();
  const [records, setRecords] = useState([state.records]);

  return (
    <div className="container">
      {records && records?.map((list, index) => (
        <div className="card mb-3" key={index}>
          <div className="row g-0">
            <div className="col-md-4">
              <div className="image">
                {list.show.image && list.show.image.medium ? (
                  <img src={list.show.image.medium} alt="Show" className="img-fluid w-100" />
                ) : (
                  <div style={{ backgroundColor: 'lightgray',  }}></div>
                )}
              </div>
            </div>
            <div className="col-md-8 text-center">
        
                <p className="card-text p-5" style={{ fontFamily: 'poppins',fontSize:'20px' }}>
                  {sanitizeHTML(list.show.summary)}
                </p>
           
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DetailsPage;
