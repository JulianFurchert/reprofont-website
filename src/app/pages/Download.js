import React from 'react';
import './Download.css';

import OverlayPage from '../layout/OverlayPage';
import DownloadList from '../components/DownloadList'

const Download = (props) => (
  <OverlayPage>
    <div className="download-page">
      <DownloadList />
    </div>
  </OverlayPage>
);

export default Download;