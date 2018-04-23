import React from 'react';
import './DownloadList.css';

import reproNull from '../../fonts/Repro-null.otf';
import repro100 from '../../fonts/Repro-100.otf';
import repro200 from '../../fonts/Repro-200.otf';
import repro300 from '../../fonts/Repro-300.otf';
import repro400 from '../../fonts/Repro-400.otf';
import repro500 from '../../fonts/Repro-500.otf';
import repro600 from '../../fonts/Repro-600.otf';

const DownloadList = (props) => (
  <ul className="list-group">
    <li><a className="list-group-item" href="/fonts/Repro-100.otf" download>Repro Null</a></li>
    <li><a className="list-group-item" href={repro100} download>Repro 100</a></li>
    <li><a className="list-group-item" href={repro200} download>Repro 200</a></li>
    <li><a className="list-group-item" href={repro300} download>Repro 300</a></li>
    <li><a className="list-group-item" href={repro400} download>Repro 400</a></li>
    <li><a className="list-group-item" href={repro500} download>Repro 500</a></li>
    <li><a className="list-group-item" href={repro600} download>Repro 600</a></li>
  </ul>
);

export default DownloadList;