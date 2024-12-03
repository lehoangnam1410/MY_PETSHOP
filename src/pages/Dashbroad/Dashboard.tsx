import React from 'react';
import { Layout, Row, Col, Card, Statistic } from 'antd';
import { Line } from 'react-chartjs-2'; // Import Line chart component từ chart.js
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, TimeScale } from 'chart.js';
import 'chartjs-adapter-date-fns'; // Cần thiết để sử dụng chartjs với thời gian

// Đăng ký các thành phần của Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  TimeScale // Đảm bảo đăng ký TimeScale
);

const { Content } = Layout;

const Dashboard: React.FC = () => {
  const data = {
    labels: ['2024-01-01', '2024-02-01', '2024-03-01'], // Các ngày tháng
    datasets: [
      {
        label: 'Doanh thu',
        data: [10, 20, 30], // Dữ liệu cho doanh thu
        borderColor: 'rgba(75, 192, 192, 1)',
        fill: false
      }
    ]
  };

  const options: any = {
  responsive: true,
  scales: {
    x: {
      type: 'time',
      time: {
        unit: 'month',
        tooltipFormat: 'll', // Định dạng cho tooltip
        displayFormats: {
          month: 'MMM yyyy' // Sửa từ 'MMM YYYY' thành 'MMM yyyy'
        }
      },
      title: {
        display: true,
        text: 'Ngày'
      }
    },
    y: {
      ticks: {
        beginAtZero: true
      }
    }
  }
}

  return (
    <Content style={{ padding: '0 50px' }}>
      <Row gutter={16} style={{ marginTop: 16 }}>
        <Col span={8}>
          <Card>
            <Statistic title="Total Sales" value={112893} prefix="$" />
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <Statistic title="Total Products" value={256} />
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <Statistic title="Total Customers" value={134} />
          </Card>
        </Col>
      </Row>

      {/* Biểu đồ với Chart.js */}
      <Row style={{ marginTop: 32 }}>
        <Col span={24}>
          <Card title="Doanh thu theo tháng">
            <Line data={data} options={options} />
          </Card>
        </Col>
      </Row>
    </Content>
  );
};

export default Dashboard;
