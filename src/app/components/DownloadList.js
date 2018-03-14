import React from 'react';
import './DownloadList.css';

const DownloadList = (props) => (
  <ul className="list-group">
    <li className="list-group-item">Repro Family</li>
    <li className="list-group-item">Repro Null <a href="../Repro-100.oft" className="list-group-icon" download>Down</a></li>
    <li className="list-group-item">Repro 100</li>
    <li className="list-group-item">Repro 200</li>
    <li className="list-group-item">Repro 300</li>
    <li className="list-group-item">Repro 400</li>
    <li className="list-group-item">Repro 500</li>
    <li className="list-group-item">Repro 600</li>
    <li className="list-group-item">Speciem</li>
  </ul>
);

export default DownloadList;