import React, { useEffect, useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { i18n } from 'src/i18n';
import DashboardService from 'src/modules/dashboard/DashboardService';
import DashboardWrapper from 'src/view/layout/styles/DashboardWrapper';
export default function DashboardAdherentCount(props) {
  const [Count, SetCount] = useState();
  useEffect(() => {
    DashboardService.AdhrentCount().then((res) => {
      SetCount(res[0].count);
    });
  }, []);
  return (
    <DashboardWrapper>
      <div className="icon">
        <i className="fas fa-users"></i>
      </div>
      <div className="text">
        <h3>{Count}</h3>
        <p> {i18n('dashboard.charts.adherent')}</p>
      </div>
    </DashboardWrapper>
  );
}
