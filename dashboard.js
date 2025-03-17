// Dashboard script - will only run after Recharts is confirmed to be loaded
console.log('Initializing dashboard...');

// Safely extract Recharts components
const {
  LineChart, Line, BarChart, Bar, XAxis, YAxis,
  CartesianGrid, Tooltip, Legend, ResponsiveContainer
} = Recharts;

// Color configuration
const colors = {
  primary: {
    main: '#2563EB',
    light: '#60A5FA',
    dark: '#1E40AF',
  },
  secondary: {
    main: '#475569',
    light: '#94A3B8',
    dark: '#334155',
  },
  success: {
    main: '#059669',
    light: '#34D399',
  },
  border: '#E2E8F0',
  text: {
    primary: '#1E293B',
    secondary: '#64748B'
  }
};

// Sample data
const notificationTimeData = [
  { day: '2025-01-01', avg_time: 42, baseline: 45, target: 11 },
  { day: '2025-01-08', avg_time: 35, baseline: 45, target: 11 },
  { day: '2025-01-15', avg_time: 28, baseline: 45, target: 11 },
  { day: '2025-01-22', avg_time: 20, baseline: 45, target: 11 },
  { day: '2025-01-29', avg_time: 15, baseline: 45, target: 11 },
];

const fcrData = [
  { week: 'Week 1', rate: 65, target: 80 },
  { week: 'Week 2', rate: 70, target: 80 },
  { week: 'Week 3', rate: 75, target: 80 },
  { week: 'Week 4', rate: 78, target: 80 },
];

const callVolumeData = [
  { week: 'Week 1', total_calls: 1000, outage_calls: 300 },
  { week: 'Week 2', total_calls: 850, outage_calls: 200 },
  { week: 'Week 3', total_calls: 700, outage_calls: 150 },
  { week: 'Week 4', total_calls: 600, outage_calls: 100 },
];

// Chart configurations
const tooltipStyle = {
  backgroundColor: '#FFFFFF',
  border: `1px solid ${colors.border}`,
  borderRadius: '8px',
  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  padding: '12px',
};

const chartContainerStyle = "bg-white rounded-xl shadow-lg border border-slate-100 p-6 transition-all duration-300 hover:shadow-xl hover:border-slate-200 chart-container";

// Dashboard Component
const MetricsDashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-slate-800 mb-2">MVP Performance Metrics</h1>
        <p className="text-slate-500 mb-8">Real-time monitoring dashboard</p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Notification Time Chart */}
          <div className={chartContainerStyle}>
            <h2 className="text-xl font-semibold text-slate-700 mb-2">Notification Time Trends</h2>
            <p className="text-sm text-slate-500 mb-6">Average notification delivery time</p>
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={notificationTimeData}>
                  <CartesianGrid strokeDasharray="3 3" stroke={colors.border} vertical={false} />
                  <XAxis
                    dataKey="day"
                    stroke={colors.text.secondary}
                    tick={{ fill: colors.text.secondary }}
                    tickLine={false}
                  />
                  <YAxis
                    stroke={colors.text.secondary}
                    tick={{ fill: colors.text.secondary }}
                    tickLine={false}
                    axisLine={false}
                  />
                  <Tooltip contentStyle={tooltipStyle} />
                  <Legend iconType="circle" />
                  <Line
                    type="monotone"
                    dataKey="avg_time"
                    name="Current"
                    stroke={colors.primary.main}
                    strokeWidth={3}
                    dot={{ fill: colors.primary.main, strokeWidth: 2 }}
                    activeDot={{ r: 8, stroke: colors.primary.light }}
                  />
                  <Line
                    type="monotone"
                    dataKey="baseline"
                    name="Baseline"
                    stroke={colors.secondary.main}
                    strokeDasharray="5 5"
                    dot={false}
                  />
                  <Line
                    type="monotone"
                    dataKey="target"
                    name="Target"
                    stroke={colors.success.main}
                    strokeDasharray="5 5"
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* FCR Chart */}
          <div className={chartContainerStyle}>
            <h2 className="text-xl font-semibold text-slate-700 mb-2">First Call Resolution Rate</h2>
            <p className="text-sm text-slate-500 mb-6">Percentage of issues resolved in first contact</p>
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={fcrData}>
                  <CartesianGrid strokeDasharray="3 3" stroke={colors.border} vertical={false} />
                  <XAxis
                    dataKey="week"
                    stroke={colors.text.secondary}
                    tick={{ fill: colors.text.secondary }}
                    tickLine={false}
                  />
                  <YAxis
                    domain={[0, 100]}
                    stroke={colors.text.secondary}
                    tick={{ fill: colors.text.secondary }}
                    tickLine={false}
                    axisLine={false}
                  />
                  <Tooltip contentStyle={tooltipStyle} />
                  <Legend iconType="circle" />
                  <Line
                    type="monotone"
                    dataKey="rate"
                    name="FCR Rate"
                    stroke={colors.primary.main}
                    strokeWidth={3}
                    dot={{ fill: colors.primary.main, strokeWidth: 2 }}
                    activeDot={{ r: 8, stroke: colors.primary.light }}
                  />
                  <Line
                    type="monotone"
                    dataKey="target"
                    name="Target"
                    stroke={colors.success.main}
                    strokeDasharray="5 5"
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Call Volume Chart */}
          <div className={chartContainerStyle}>
            <h2 className="text-xl font-semibold text-slate-700 mb-2">Support Call Distribution</h2>
            <p className="text-sm text-slate-500 mb-6">Weekly breakdown of support calls</p>
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={callVolumeData}>
                  <CartesianGrid strokeDasharray="3 3" stroke={colors.border} vertical={false} />
                  <XAxis
                    dataKey="week"
                    stroke={colors.text.secondary}
                    tick={{ fill: colors.text.secondary }}
                    tickLine={false}
                  />
                  <YAxis
                    stroke={colors.text.secondary}
                    tick={{ fill: colors.text.secondary }}
                    tickLine={false}
                    axisLine={false}
                  />
                  <Tooltip contentStyle={tooltipStyle} />
                  <Legend iconType="circle" />
                  <Bar
                    dataKey="total_calls"
                    name="Total Calls"
                    fill={colors.primary.light}
                    radius={[6, 6, 0, 0]}
                  />
                  <Bar
                    dataKey="outage_calls"
                    name="Outage-Related"
                    fill={colors.secondary.light}
                    radius={[6, 6, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* KPI Summary */}
          <div className={chartContainerStyle}>
            <h2 className="text-xl font-semibold text-slate-700 mb-2">Performance Summary</h2>
            <p className="text-sm text-slate-500 mb-6">Key metrics overview</p>
            <div className="space-y-8">
              <div className="group">
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium text-slate-600">Notification Time Reduction</span>
                  <span className="text-sm font-bold text-blue-600">66.7%</span>
                </div>
                <div className="h-3 bg-slate-100 rounded-full overflow-hidden transition-all duration-300 group-hover:shadow-inner">
                  <div
                    className="h-full gradient-primary rounded-full transition-all duration-500 progress-bar"
                    style={{ width: '66.7%' }}
                  />
                </div>
              </div>

              <div className="group">
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium text-slate-600">FCR Improvement</span>
                  <span className="text-sm font-bold text-emerald-600">20%</span>
                </div>
                <div className="h-3 bg-slate-100 rounded-full overflow-hidden transition-all duration-300 group-hover:shadow-inner">
                  <div
                    className="h-full gradient-success rounded-full transition-all duration-500 progress-bar"
                    style={{ width: '20%' }}
                  />
                </div>
              </div>

              <div className="group">
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium text-slate-600">Call Volume Reduction</span>
                  <span className="text-sm font-bold text-indigo-600">40%</span>
                </div>
                <div className="h-3 bg-slate-100 rounded-full overflow-hidden transition-all duration-300 group-hover:shadow-inner">
                  <div
                    className="h-full gradient-primary rounded-full transition-all duration-500 progress-bar"
                    style={{ width: '40%' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Render dashboard
try {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<MetricsDashboard />);
  console.log('Dashboard rendered successfully');
} catch (error) {
  console.error('Error rendering dashboard:', error);
  document.getElementById('root').innerHTML = `
    <div style="text-align: center; padding: 2rem;">
      <h2 style="color: #dc2626; margin-bottom: 1rem;">Error rendering dashboard</h2>
      <p style="margin-bottom: 1rem;">${error.message}</p>
      <button onclick="location.reload()" style="background-color: #2563EB; color: white; padding: 8px 16px; border-radius: 4px; border: none; cursor: pointer;">
        Reload Page
      </button>
    </div>
  `;
}

window.dashboardLoaded = true;
clearTimeout(window.fallbackTimer);
