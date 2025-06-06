import React, { useRef } from 'react';
import { Row, Col, Statistic, Card } from 'antd';
import { 
  DollarOutlined, 
  ToolOutlined, 
  ClockCircleOutlined, 
  CheckCircleOutlined 
} from '@ant-design/icons';
import { Line } from '@ant-design/plots';
import '../styles/Dashboard.css';
import useHeadingObserver from '../layouts/useHeadingObserver';

const Dashboard = () => {
  const headingRef = useRef(null);
  useHeadingObserver(headingRef);

  // Sample data for the line chart
  const data = [
    { date: '2024-01', sales: 3500 },
    { date: '2024-02', sales: 4200 },
    { date: '2024-03', sales: 3800 },
    { date: '2024-04', sales: 4500 },
    { date: '2024-05', sales: 5000 },
  ];

  const config = {
    data,
    xField: 'date',
    yField: 'sales',
    point: {
      size: 5,
      shape: 'diamond',
    },
    label: {
      style: {
        fill: '#aaa',
      },
    },
  };

  return (
    <div className="dashboard-container">
      <h1 ref={headingRef} className="visually-hidden">Dashboard</h1>
      
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={12} lg={6}>
          <Card>
            <Statistic
              title="Today's Sales"
              value={1250}
              prefix={<DollarOutlined />}
              valueStyle={{ color: '#3f8600' }}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card>
            <Statistic
              title="Pending Repairs"
              value={8}
              prefix={<ToolOutlined />}
              valueStyle={{ color: '#1890ff' }}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card>
            <Statistic
              title="In Progress"
              value={5}
              prefix={<ClockCircleOutlined />}
              valueStyle={{ color: '#faad14' }}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card>
            <Statistic
              title="Completed Today"
              value={12}
              prefix={<CheckCircleOutlined />}
              valueStyle={{ color: '#52c41a' }}
            />
          </Card>
        </Col>
      </Row>

      <Card className="sales-overview-card">
        <h2>Sales Overview</h2>
        <Line {...config} />
      </Card>
    </div>
  );
};

export default Dashboard; 