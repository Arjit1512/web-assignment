import React from 'react';
import PieChart from './PieChart';

const Dashboard = ({ data }) => {
  const generatePieData = (activeUser, creator, totalUser, totalReferral) => ({
    labels: ['Active Users', 'Creators', 'Total Users', 'Total Referrals'],
    datasets: [
      {
        data: [activeUser, creator, totalUser, totalReferral],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
      },
    ],
  });

  return (
    <>
      <h1>User Metrics</h1>
      <div className="dashboard-container">
        <div className="pie-chart-column">
          <PieChart
            data={generatePieData(
              data?.dashboard?.userMetrics?.allTime.activeUser,
              data?.dashboard?.userMetrics?.allTime.creator,
              data?.dashboard?.userMetrics?.allTime.totalUser,
              data?.dashboard?.userMetrics?.allTime.totalReferral
            )}
            title="All-Time"
          />
        </div>
        <div className="pie-chart-column">
          <PieChart
            data={generatePieData(
              data?.dashboard?.userMetrics?.daily.activeUser,
              data?.dashboard?.userMetrics?.daily.creator,
              data?.dashboard?.userMetrics?.daily.totalUser,
              data?.dashboard?.userMetrics?.daily.totalReferral
            )}
            title="Daily"
          />
        </div>
        <div className="pie-chart-column">
          <PieChart
            data={generatePieData(
              data?.dashboard?.userMetrics?.monthly.activeUser,
              data?.dashboard?.userMetrics?.monthly.creator,
              data?.dashboard?.userMetrics?.monthly.totalUser,
              data?.dashboard?.userMetrics?.monthly.totalReferral
            )}
            title="Monthly"
          />
        </div>
      </div>
  
      <h1>Engagement Metrics</h1>
      <div className="dashboard-container">
        {['allTime', 'daily', 'monthly'].map((period, index) => (
          <div className="pie-chart-column" key={index}>
            <PieChart
              data={generatePieData(
                data?.dashboard?.engagementMetrics[period]?.totalNotifications,
                data?.dashboard?.engagementMetrics[period]?.totalMessage,
                data?.dashboard?.engagementMetrics[period]?.totalLikes,
                data?.dashboard?.engagementMetrics[period]?.totalViews
              )}
              title={period}
            />
          </div>
        ))}
      </div>

      <h1>Content Metrics</h1>
      <div className="dashboard-container">
        {['allTime', 'daily', 'monthly'].map((period, index) => (
          <div className="pie-chart-column" key={index}>
            <PieChart
              data={generatePieData(
                data?.dashboard?.contentMetrics[period]?.totalCategory,
                data?.dashboard?.contentMetrics[period]?.totalComments,
                data?.dashboard?.contentMetrics[period]?.totalPostBlocked,
                data?.dashboard?.contentMetrics[period]?.totalPostDeleted
              )}
              title={period}
            />
          </div>
        ))}
      </div>
  
      <h1>Blockchain Metrics</h1>
      <div className="dashboard-container">
        {['allTime', 'daily', 'monthly'].map((period, index) => (
          <div className="pie-chart-column" key={index}>
            <PieChart
              data={generatePieData(
                data?.dashboard?.blockchainMetrics[period]?.totalTokens,
                data?.dashboard?.blockchainMetrics[period]?.totalWalletOnEthereum,
                data?.dashboard?.blockchainMetrics[period]?.totalWalletOnPolygon,
                data?.dashboard?.blockchainMetrics[period]?.totalWalletOnSolana
              )}
              title={period}
            />
          </div>
        ))}
      </div>
    </>
  );
  
};

export default Dashboard;
