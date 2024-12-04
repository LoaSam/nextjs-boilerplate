'use client';

import React from 'react';
import MonitoringDashboard from './monitoring-dashboard';
import { sampleLogs } from './sample-data';

const Dashboard = () => {
  return (
    <div>
      <MonitoringDashboard initialLogs={sampleLogs} />
    </div>
  );
};

export default Dashboard;
