// import React, { useState } from 'react';
// import {
//   BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
//   ResponsiveContainer
// } from 'recharts';
// import {
//   LayoutDashboard,
//   Users,
//   BarChart2,
//   FileText,
//   Settings,
//   Plus,
//   X,
//   Download
// } from 'lucide-react';

// // Dummy data for charts
// const performanceData = [
//   { month: 'Jan', leads: 65, conversions: 40 },
//   { month: 'Feb', leads: 85, conversions: 55 },
//   { month: 'Mar', leads: 95, conversions: 60 },
//   { month: 'Apr', leads: 75, conversions: 45 },
//   { month: 'May', leads: 90, conversions: 65 },
//   { month: 'Jun', leads: 100, conversions: 70 },
// ];

// const leadsData = [
//   { id: 1, name: 'John Doe', email: 'john@example.com', status: 'New', value: '$5000' },
//   { id: 2, name: 'Jane Smith', email: 'jane@example.com', status: 'Contacted', value: '$7500' },
//   { id: 3, name: 'Mike Johnson', email: 'mike@example.com', status: 'Qualified', value: '$10000' },
// ];

// const Dashboard = () => {
//   const [isSidebarOpen, setSidebarOpen] = useState(true);
//   const [selectedLead, setSelectedLead] = useState(null);
  
//   const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);
  
//   return (
//     <div className="flex h-screen bg-gray-100">
//       {/* Sidebar */}
//       <div className={`${isSidebarOpen ? 'w-64' : 'w-20'} bg-indigo-800 text-white transition-width duration-300 ease-in-out`}>
//         <div className="p-4">
//           <h1 className={`text-xl font-bold ${!isSidebarOpen && 'hidden'}`}>EzyMetrics</h1>
//         </div>
        
//         <nav className="mt-8">
//           <NavItem icon={<LayoutDashboard />} text="Dashboard" active={true} collapsed={!isSidebarOpen} />
//           <NavItem icon={<Users />} text="Leads" collapsed={!isSidebarOpen} />
//           <NavItem icon={<BarChart2 />} text="Analytics" collapsed={!isSidebarOpen} />
//           <NavItem icon={<FileText />} text="Reports" collapsed={!isSidebarOpen} />
//           <NavItem icon={<Settings />} text="Settings" collapsed={!isSidebarOpen} />
//         </nav>
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 overflow-auto">
//         <header className="bg-white shadow p-4">
//           <div className="flex justify-between items-center">
//             <button onClick={toggleSidebar} className="text-gray-600 hover:text-gray-800">
//               <LayoutDashboard />
//             </button>
//             <div className="text-gray-600">Welcome back, Admin</div>
//           </div>
//         </header>

//         <main className="p-6">
//           {/* Widgets Grid */}
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
//             <Widget title="Total Leads" value="342" trend="+12%" />
//             <Widget title="Conversion Rate" value="48%" trend="+5%" />
//             <Widget title="Revenue" value="$125,400" trend="+8%" />
//           </div>

//           {/* Charts */}
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
//             <ChartCard title="Lead Performance">
//               <ResponsiveContainer width="100%" height={300}>
//                 <LineChart data={performanceData}>
//                   <CartesianGrid strokeDasharray="3 3" />
//                   <XAxis dataKey="month" />
//                   <YAxis />
//                   <Tooltip />
//                   <Legend />
//                   <Line type="monotone" dataKey="leads" stroke="#4F46E5" />
//                   <Line type="monotone" dataKey="conversions" stroke="#10B981" />
//                 </LineChart>
//               </ResponsiveContainer>
//             </ChartCard>

//             <ChartCard title="Revenue Distribution">
//               <ResponsiveContainer width="100%" height={300}>
//                 <BarChart data={performanceData}>
//                   <CartesianGrid strokeDasharray="3 3" />
//                   <XAxis dataKey="month" />
//                   <YAxis />
//                   <Tooltip />
//                   <Legend />
//                   <Bar dataKey="leads" fill="#4F46E5" />
//                   <Bar dataKey="conversions" fill="#10B981" />
//                 </BarChart>
//               </ResponsiveContainer>
//             </ChartCard>
//           </div>

//           {/* Leads Table */}
//           <div className="bg-white rounded-lg shadow overflow-hidden">
//             <div className="p-4 flex justify-between items-center border-b">
//               <h2 className="text-lg font-semibold">Recent Leads</h2>
//               <button className="flex items-center text-indigo-600 hover:text-indigo-800">
//                 <Download className="w-4 h-4 mr-2" />
//                 Export
//               </button>
//             </div>
//             <div className="overflow-x-auto">
//               <table className="w-full">
//                 <thead className="bg-gray-50">
//                   <tr>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Value</th>
//                   </tr>
//                 </thead>
//                 <tbody className="bg-white divide-y divide-gray-200">
//                   {leadsData.map((lead) => (
//                     <tr 
//                       key={lead.id}
//                       onClick={() => setSelectedLead(lead)}
//                       className="hover:bg-gray-50 cursor-pointer"
//                     >
//                       <td className="px-6 py-4 whitespace-nowrap">{lead.name}</td>
//                       <td className="px-6 py-4 whitespace-nowrap">{lead.email}</td>
//                       <td className="px-6 py-4 whitespace-nowrap">
//                         <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full
//                           ${lead.status === 'New' ? 'bg-green-100 text-green-800' :
//                           lead.status === 'Contacted' ? 'bg-blue-100 text-blue-800' :
//                           'bg-yellow-100 text-yellow-800'}`}>
//                           {lead.status}
//                         </span>
//                       </td>
//                       <td className="px-6 py-4 whitespace-nowrap">{lead.value}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </main>
//       </div>

//       {/* Lead Details Modal */}
//       {selectedLead && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
//           <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
//             <div className="flex justify-between items-center mb-4">
//               <h2 className="text-xl font-semibold">Lead Details</h2>
//               <button onClick={() => setSelectedLead(null)} className="text-gray-500 hover:text-gray-700">
//                 <X className="w-6 h-6" />
//               </button>
//             </div>
//             <div className="space-y-4">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">Name</label>
//                 <div className="mt-1 text-gray-900">{selectedLead.name}</div>
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">Email</label>
//                 <div className="mt-1 text-gray-900">{selectedLead.email}</div>
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">Status</label>
//                 <div className="mt-1 text-gray-900">{selectedLead.status}</div>
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">Value</label>
//                 <div className="mt-1 text-gray-900">{selectedLead.value}</div>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// // Helper Components
// const NavItem = ({ icon, text, active, collapsed }) => (
//   <a
//     href="#"
//     className={`flex items-center p-4 ${active ? 'bg-indigo-700' : 'hover:bg-indigo-700'}`}
//   >
//     <span className="w-6 h-6">{icon}</span>
//     {!collapsed && <span className="ml-4">{text}</span>}
//   </a>
// );

// const Widget = ({ title, value, trend }) => (
//   <div className="bg-white rounded-lg shadow p-6">
//     <h3 className="text-gray-500 text-sm font-medium">{title}</h3>
//     <div className="mt-2 flex items-baseline">
//       <p className="text-2xl font-semibold text-gray-900">{value}</p>
//       <p className="ml-2 text-sm font-medium text-green-600">{trend}</p>
//     </div>
//   </div>
// );

// const ChartCard = ({ title, children }) => (
//   <div className="bg-white rounded-lg shadow p-6">
//     <h3 className="text-gray-500 text-sm font-medium mb-4">{title}</h3>
//     {children}
//   </div>
// );

// export default Dashboard;





// import React, { useState } from 'react';
// import {
//   BarChart, Bar, LineChart, Line, PieChart, Pie, AreaChart, Area,
//   XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
// } from 'recharts';
// import {
//   LayoutDashboard, Users, BarChart2, FileText, Settings, Plus,
//   X, Download, Move, Edit, Trash2, Filter, Search
// } from 'lucide-react';
// import Widget from './widget';
// import ChartCard from './ChartCard';

// // Enhanced dummy data
// const performanceData = [
//   { month: 'Jan', leads: 65, conversions: 40, revenue: 12000 },
//   { month: 'Feb', leads: 85, conversions: 55, revenue: 15000 },
//   { month: 'Mar', leads: 95, conversions: 60, revenue: 18000 },
//   { month: 'Apr', leads: 75, conversions: 45, revenue: 14000 },
//   { month: 'May', leads: 90, conversions: 65, revenue: 20000 },
//   { month: 'Jun', leads: 100, conversions: 70, revenue: 22000 },
// ];

// const sourcesData = [
//   { name: 'Website', value: 400 },
//   { name: 'Social', value: 300 },
//   { name: 'Referral', value: 200 },
//   { name: 'Direct', value: 100 },
// ];

// const leadsData = [
//   { 
//     id: 1, 
//     name: 'John Doe', 
//     email: 'john@example.com', 
//     status: 'New', 
//     value: '$5000',
//     source: 'Website',
//     lastContact: '2024-03-15',
//     notes: 'Interested in premium package'
//   },
//   // ... more leads
// ];

// const widgetTypes = [
//   { id: 'total-leads', name: 'Total Leads', type: 'metric' },
//   { id: 'conversion-rate', name: 'Conversion Rate', type: 'metric' },
//   { id: 'revenue', name: 'Revenue', type: 'metric' },
//   { id: 'lead-performance', name: 'Lead Performance', type: 'chart' },
//   { id: 'revenue-distribution', name: 'Revenue Distribution', type: 'chart' },
//   { id: 'sources', name: 'Lead Sources', type: 'pie' },
// ];

// const Dashboard = () => {
//   const [isSidebarOpen, setSidebarOpen] = useState(true);
//   const [selectedLead, setSelectedLead] = useState(null);
//   const [isCustomizing, setIsCustomizing] = useState(false);
//   const [widgets, setWidgets] = useState(widgetTypes.slice(0, 6));
//   const [filterStatus, setFilterStatus] = useState('all');
//   const [searchTerm, setSearchTerm] = useState('');
  
//   const downloadCSV = () => {
//     const headers = ['Name', 'Email', 'Status', 'Value', 'Source', 'Last Contact'];
//     const csvContent = [
//       headers.join(','),
//       ...leadsData.map(lead => 
//         [lead.name, lead.email, lead.status, lead.value, lead.source, lead.lastContact].join(',')
//       )
//     ].join('\n');
    
//     const blob = new Blob([csvContent], { type: 'text/csv' });
//     const url = window.URL.createObjectURL(blob);
//     const a = document.createElement('a');
//     a.href = url;
//     a.download = 'leads-export.csv';
//     a.click();
//     window.URL.revokeObjectURL(url);
//   };
  

//   return (
//     <div className="flex h-screen bg-gray-100">
//       {/* Sidebar - Same as before */}
      
//       {/* Main Content */}
//       <div className="flex-1 overflow-auto">
//         <header className="bg-white shadow p-4">
//           <div className="flex justify-between items-center">
//             <div className="flex items-center space-x-4">
//               {/* <button onClick={() => setSidebarOpen(!isSidebarOpen)} className="text-gray-600 hover:text-gray-800">
//                 <LayoutDashboard />
//               </button> */}
//               <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
//   EzyMetrics
// </div>

//               <button 
//                 onClick={() => setIsCustomizing(!isCustomizing)}
//                 className="flex items-center px-3 py-2 rounded-md bg-indigo-50 text-indigo-600 hover:bg-indigo-100"
//               >
//                 <Settings className="w-4 h-4 mr-2" />
//                 Customize Dashboard
//               </button>
//             </div>
//             <div className="flex items-center space-x-4">
//               <div className="relative">
//                 <input
//                   type="text"
//                   placeholder="Search leads..."
//                   className="pl-10 pr-4 py-2 border rounded-md"
//                   value={searchTerm}
//                   onChange={(e) => setSearchTerm(e.target.value)}
//                 />
//                 <Search className="w-4 h-4 absolute left-3 top-3 text-gray-400" />
//               </div>
//               <select 
//                 className="border rounded-md px-3 py-2"
//                 value={filterStatus}
//                 onChange={(e) => setFilterStatus(e.target.value)}
//               >
//                 <option value="all">All Status</option>
//                 <option value="new">New</option>
//                 <option value="contacted">Contacted</option>
//                 <option value="qualified">Qualified</option>
//               </select>
//             </div>
//           </div>
//         </header>

//         <main className="p-6">
//           {/* Customization Mode */}
//           {isCustomizing && (
//             <div className="mb-8 bg-white rounded-lg shadow p-4">
//               <div className="flex justify-between items-center mb-4">
//                 <h2 className="text-lg font-semibold">Customize Dashboard</h2>
//                 <button 
//                   onClick={() => setIsCustomizing(false)}
//                   className="text-gray-500 hover:text-gray-700"
//                 >
//                   <X />
//                 </button>
//               </div>
//               <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//                 {widgetTypes.map(widget => (
//                   <div
//                     key={widget.id}
//                     className={`p-4 border rounded-lg cursor-pointer ${
//                       widgets.find(w => w.id === widget.id) ? 'border-indigo-500 bg-indigo-50' : ''
//                     }`}
//                     onClick={() => {
//                       if (widgets.find(w => w.id === widget.id)) {
//                         setWidgets(widgets.filter(w => w.id !== widget.id));
//                       } else {
//                         setWidgets([...widgets, widget]);
//                       }
//                     }}
//                   >
//                     <div className="flex items-center">
//                       {widget.type === 'metric' && <BarChart2 className="w-4 h-4 mr-2" />}
//                       {widget.type === 'chart' && <LineChart className="w-4 h-4 mr-2" />}
//                       {widget.type === 'pie' && <PieChart className="w-4 h-4 mr-2" />}
//                       <span>{widget.name}</span>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}

//           {/* Widgets Grid */}
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
//             {widgets.map(widget => {
//               if (widget.type === 'metric') {
//                 return (
//                   <Widget 
//                     key={widget.id}
//                     title={widget.name}
//                     value={widget.id === 'total-leads' ? '342' : 
//                            widget.id === 'conversion-rate' ? '48%' : '$125,400'}
//                     trend="+12%"
//                   />
//                 );
//               }
//               if (widget.type === 'chart') {
//                 return (
//                   <ChartCard key={widget.id} title={widget.name}>
//                     {widget.id === 'lead-performance' ? (
//                       <ResponsiveContainer width="100%" height={300}>
//                         <AreaChart data={performanceData}>
//                           <CartesianGrid strokeDasharray="3 3" />
//                           <XAxis dataKey="month" />
//                           <YAxis />
//                           <Tooltip />
//                           <Legend />
//                           <Area type="monotone" dataKey="leads" stroke="#4F46E5" fill="#4F46E5" fillOpacity={0.1} />
//                           <Area type="monotone" dataKey="conversions" stroke="#10B981" fill="#10B981" fillOpacity={0.1} />
//                         </AreaChart>
//                       </ResponsiveContainer>
//                     ) : (
//                       <ResponsiveContainer width="100%" height={300}>
//                         <BarChart data={performanceData}>
//                           <CartesianGrid strokeDasharray="3 3" />
//                           <XAxis dataKey="month" />
//                           <YAxis />
//                           <Tooltip />
//                           <Legend />
//                           <Bar dataKey="revenue" fill="#4F46E5" />
//                         </BarChart>
//                       </ResponsiveContainer>
//                     )}
//                   </ChartCard>
//                 );
//               }
//               if (widget.type === 'pie') {
//                 return (
//                   <ChartCard key={widget.id} title={widget.name}>
//                     <ResponsiveContainer width="100%" height={300}>
//                       <PieChart>
//                         <Pie
//                           data={sourcesData}
//                           cx="50%"
//                           cy="50%"
//                           innerRadius={60}
//                           outerRadius={80}
//                           fill="#4F46E5"
//                           dataKey="value"
//                           label
//                         />
//                         <Tooltip />
//                         <Legend />
//                       </PieChart>
//                     </ResponsiveContainer>
//                   </ChartCard>
//                 );
//               }
//               return null;
//             })}
//           </div>

//           {/* Enhanced Leads Table */}
//           <div className="bg-white rounded-lg shadow overflow-hidden">
//             <div className="p-4 flex justify-between items-center border-b">
//               <h2 className="text-lg font-semibold">Recent Leads</h2>
//               <div className="flex space-x-4">
//                 <button 
//                   onClick={downloadCSV}
//                   className="flex items-center px-4 py-2 bg-indigo-50 text-indigo-600 rounded-md hover:bg-indigo-100"
//                 >
//                   <Download className="w-4 h-4 mr-2" />
//                   Export CSV
//                 </button>
//               </div>
//             </div>
//             {/* Enhanced table with more columns and features */}
//           </div>
//         </main>
//       </div>

//       {/* Enhanced Lead Details Modal */}
//       {selectedLead && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
//           <div className="bg-white rounded-lg p-6 max-w-2xl w-full mx-4">
//             <div className="flex justify-between items-center mb-4">
//               <h2 className="text-xl font-semibold">Lead Details</h2>
//               <div className="flex space-x-2">
//                 <button className="p-2 text-gray-500 hover:text-gray-700">
//                   <Edit className="w-5 h-5" />
//                 </button>
//                 <button className="p-2 text-gray-500 hover:text-gray-700">
//                   <Trash2 className="w-5 h-5" />
//                 </button>
//                 <button 
//                   onClick={() => setSelectedLead(null)}
//                   className="p-2 text-gray-500 hover:text-gray-700"
//                 >
//                   <X className="w-5 h-5" />
//                 </button>
//               </div>
//             </div>
            
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <div className="space-y-4">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700">Name</label>
//                   <div className="mt-1 text-gray-900">{selectedLead.name}</div>
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700">Email</label>
//                   <div className="mt-1 text-gray-900">{selectedLead.email}</div>
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700">Status</label>
//                   <div className="mt-1">
//                     <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm">
//                       <option>New</option>
//                       <option>Contacted</option>
//                       <option>Qualified</option>
//                       <option>Lost</option>
//                     </select>
//                   </div>
//                 </div>
//               </div>
              
//               <div className="space-y-4">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700">Value</label>
//                   <div className="mt-1 text-gray-900">{selectedLead.value}</div>
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700">Source</label>
//                   <div className="mt-1 text-gray-900">{selectedLead.source}</div>
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700">Last Contact</label>
//                   <div className="mt-1 text-gray-900">{selectedLead.lastContact}</div>
//                 </div>
//               </div>
              
//               <div className="col-span-2">
//                 <label className="block text-sm font-medium text-gray-700">Notes</label>
//                 <textarea
//                   className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
//                   rows={4}
//                   defaultValue={selectedLead.notes}
//                 />
//               </div>
//             </div>
            
//             <div className="mt-6 flex justify-end space-x-3">
//               <button 
//                 className="px-4 py-2 border rounded-md text-gray-700 hover:bg-gray-50"
//                 onClick={() => setSelectedLead(null)}
//               >
//                 Cancel
//               </button>
//               <button className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
//                 Save Changes
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// // Existing helper components remain the same...

// export default Dashboard;











import React, { useState } from 'react';
import {
  BarChart, Bar, LineChart, Line, PieChart, Pie, AreaChart, Area,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';
import {
  LayoutDashboard, Users, BarChart2, FileText, Settings, Plus,
  X, Download, Move, Edit, Trash2, Filter, Search
} from 'lucide-react';
import Widget from './widget';
import ChartCard from './ChartCard';

// Enhanced dummy data
const performanceData = [
  { month: 'Jan', leads: 65, conversions: 40, revenue: 12000 },
  { month: 'Feb', leads: 85, conversions: 55, revenue: 15000 },
  { month: 'Mar', leads: 95, conversions: 60, revenue: 18000 },
  { month: 'Apr', leads: 75, conversions: 45, revenue: 14000 },
  { month: 'May', leads: 90, conversions: 65, revenue: 20000 },
  { month: 'Jun', leads: 100, conversions: 70, revenue: 22000 },
];

const sourcesData = [
  { name: 'Website', value: 400 },
  { name: 'Social', value: 300 },
  { name: 'Referral', value: 200 },
  { name: 'Direct', value: 100 },
];

const leadsData = [
  { 
    id: 1, 
    name: 'John Doe', 
    email: 'john@example.com', 
    status: 'New', 
    value: '$5000',
    source: 'Website',
    lastContact: '2024-03-15',
    notes: 'Interested in premium package'
  },
  // ... more leads
];

const widgetTypes = [
  { id: 'total-leads', name: 'Total Leads', type: 'metric' },
  { id: 'conversion-rate', name: 'Conversion Rate', type: 'metric' },
  { id: 'revenue', name: 'Revenue', type: 'metric' },
  { id: 'lead-performance', name: 'Lead Performance', type: 'chart' },
  { id: 'revenue-distribution', name: 'Revenue Distribution', type: 'chart' },
  { id: 'sources', name: 'Lead Sources', type: 'pie' },
];

// Sidebar component
const Sidebar = ({ isSidebarOpen, onToggle }) => (
  <div className={`fixed inset-y-0 left-0 bg-white w-64 transition-transform transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} z-30 shadow-lg`}>
    <div className="h-16 bg-blue-700 flex items-center justify-between px-4">
      <div className="text-white font-semibold text-xl">
      <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-800 via-purple-500 to-pink-500">
   EzyMetrics</div>
      </div>
      <button onClick={onToggle} className="text-white hover:bg-gray-700 rounded-full p-1">
        {isSidebarOpen ? <X className="w-5 h-5" /> : <LayoutDashboard className="w-5 h-5" />}
      </button>
    </div>
    <nav className="flex-1 px-4 py-2 bg-gray-50">
      <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-200">Dashboard</a>
      <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-200">Leads</a>
      <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-200">Reports</a>
      <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-200">Settings</a>
    </nav>
  </div>
);


const Dashboard = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [selectedLead, setSelectedLead] = useState(null);
  const [isCustomizing, setIsCustomizing] = useState(false);
  const [widgets, setWidgets] = useState(widgetTypes.slice(0, 6));
  const [filterStatus, setFilterStatus] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const downloadCSV = () => {
    const headers = ['Name', 'Email', 'Status', 'Value', 'Source', 'Last Contact'];
    const csvContent = [
      headers.join(','),
      ...leadsData.map(lead => 
        [lead.name, lead.email, lead.status, lead.value, lead.source, lead.lastContact].join(',')
      )
    ].join('\n');
    
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'leads-export.csv';
    a.click();
    window.URL.revokeObjectURL(url);
  };

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar isSidebarOpen={isSidebarOpen} onToggle={toggleSidebar} />
      
      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <header className="bg-white shadow p-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setSidebarOpen(!isSidebarOpen)}
                className="text-gray-600 hover:text-gray-800"
              >
                <LayoutDashboard />
              </button>
              <button
                onClick={() => setIsCustomizing(!isCustomizing)}
                className="flex items-center px-3 py-2 rounded-md bg-indigo-50 text-indigo-600 hover:bg-indigo-100"
              >
                <Settings className="w-4 h-4 mr-2" />
                Customize Dashboard
              </button>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search leads..."
                  className="pl-10 pr-4 py-2 border rounded-md"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Search className="w-4 h-4 absolute left-3 top-3 text-gray-400" />
              </div>
              <select
                className="border rounded-md px-3 py-2"
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
              >
                <option value="all">All Status</option>
                <option value="new">New</option>
                <option value="contacted">Contacted</option>
                <option value="qualified">Qualified</option>
              </select>
            </div>
          </div>
        </header>

        <main className="p-6">
          {/* Customization Mode */}
          {isCustomizing && (
            <div className="mb-8 bg-white rounded-lg shadow p-4">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">Customize Dashboard</h2>
                <button 
                  onClick={() => setIsCustomizing(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X />
                </button>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {widgetTypes.map(widget => (
                  <div
                    key={widget.id}
                    className={`p-4 border rounded-lg cursor-pointer ${widgets.find(w => w.id === widget.id) ? 'border-indigo-500 bg-indigo-50' : ''}`}
                    onClick={() => {
                      if (widgets.find(w => w.id === widget.id)) {
                        setWidgets(widgets.filter(w => w.id !== widget.id));
                      } else {
                        setWidgets([...widgets, widget]);
                      }
                    }}
                  >
                    <div className="flex items-center">
                      {widget.type === 'metric' && <BarChart2 className="w-4 h-4 mr-2" />}
                      {widget.type === 'chart' && <LineChart className="w-4 h-4 mr-2" />}
                      {widget.type === 'pie' && <PieChart className="w-4 h-4 mr-2" />}
                      <span>{widget.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Widgets Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {widgets.map(widget => {
              if (widget.type === 'metric') {
                return (
                  <Widget 
                    key={widget.id}
                    title={widget.name}
                    value={widget.id === 'total-leads' ? '342' : 
                           widget.id === 'conversion-rate' ? '48%' : '$125,400'}
                    trend="+12%"
                  />
                );
              }
              if (widget.type === 'chart') {
                return (
                  <ChartCard key={widget.id} title={widget.name}>
                    {widget.id === 'lead-performance' ? (
                      <ResponsiveContainer width="100%" height={300}>
                        <AreaChart data={performanceData}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="month" />
                          <YAxis />
                          <Tooltip />
                          <Legend />
                          <Area type="monotone" dataKey="leads" stroke="#8884d8" fill="#8884d8" />
                          <Area type="monotone" dataKey="conversions" stroke="#82ca9d" fill="#82ca9d" />
                        </AreaChart>
                      </ResponsiveContainer>
                    ) : (
                      <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={performanceData}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="month" />
                          <YAxis />
                          <Tooltip />
                          <Legend />
                          <Bar dataKey="revenue" fill="#82ca9d" />
                        </BarChart>
                      </ResponsiveContainer>
                    )}
                  </ChartCard>
                );
              }
              if (widget.type === 'pie') {
                return (
                  <ChartCard key={widget.id} title={widget.name}>
                    <ResponsiveContainer width="100%" height={300}>
                      <PieChart>
                        <Pie
                          data={sourcesData}
                          dataKey="value"
                          nameKey="name"
                          cx="50%"
                          cy="50%"
                          outerRadius={80}
                          fill="#8884d8"
                          label
                        />
                        <Tooltip />
                      </PieChart>
                    </ResponsiveContainer>
                  </ChartCard>
                );
              }
            })}
          </div>

          {/* Leads Table */}
          <div className="bg-white rounded-lg shadow overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead>
                <tr>
                  <th className="py-2 px-4 border-b">Name</th>
                  <th className="py-2 px-4 border-b">Email</th>
                  <th className="py-2 px-4 border-b">Status</th>
                  <th className="py-2 px-4 border-b">Value</th>
                  <th className="py-2 px-4 border-b">Source</th>
                  <th className="py-2 px-4 border-b">Last Contact</th>
                  <th className="py-2 px-4 border-b">Actions</th>
                </tr>
              </thead>
              <tbody>
                {leadsData
                  .filter(lead => 
                    (filterStatus === 'all' || lead.status.toLowerCase() === filterStatus) && 
                    (lead.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                     lead.email.toLowerCase().includes(searchTerm.toLowerCase()))
                  )
                  .map(lead => (
                  <tr key={lead.id}>
                    <td className="py-2 px-4 border-b">{lead.name}</td>
                    <td className="py-2 px-4 border-b">{lead.email}</td>
                    <td className={`py-2 px-4 border-b text-center ${lead.status === 'New' ? 'text-green-600' : 'text-yellow-600'}`}>{lead.status}</td>
                    <td className="py-2 px-4 border-b">{lead.value}</td>
                    <td className="py-2 px-4 border-b">{lead.source}</td>
                    <td className="py-2 px-4 border-b">{lead.lastContact}</td>
                    <td className="py-2 px-4 border-b">
                      <button
                        className="text-blue-500 hover:text-blue-700 mr-2"
                        onClick={() => setSelectedLead(lead)}
                      >
                        <Edit className="w-4 h-4" />
                      </button>
                      <button
                        className="text-red-500 hover:text-red-700"
                        onClick={() => alert(`Delete lead: ${lead.name}`)}
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
