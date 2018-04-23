import React from 'react';
import './DownloadList.css';

const DownloadList = (props) => (
  <ul className="list-group">
    <li><a className="list-group-item" href="/fonts/Repro-null.otf" download>Repro Null</a></li>
    <li><a className="list-group-item" href="/fonts/Repro-100.otf" download>Repro 100</a></li>
    <li><a className="list-group-item" href="/fonts/Repro-200.otf" download>Repro 200</a></li>
    <li><a className="list-group-item" href="/fonts/Repro-300.otf" download>Repro 300</a></li>
    <li><a className="list-group-item" href="/fonts/Repro-400.otf" download>Repro 400</a></li>
    <li><a className="list-group-item" href="/fonts/Repro-500.otf" download>Repro 500</a></li>
    <li><a className="list-group-item" href="/fonts/Repro-600.otf" download>Repro 600</a></li>
  </ul>
);

export default DownloadList;