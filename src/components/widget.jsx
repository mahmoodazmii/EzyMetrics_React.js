// Widget.js
const Widget = ({ title, value, trend }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h3 className="text-lg font-semibold">{title}</h3>
      <div className="text-2xl font-bold mt-2">{value}</div>
      <div className="text-green-500">{trend}</div>
    </div>
  );
};

export default Widget;
