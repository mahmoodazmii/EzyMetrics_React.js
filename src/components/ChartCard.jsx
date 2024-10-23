// ChartCard.js
const ChartCard = ({ title, children }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      <div className="h-64">
        {children}
      </div>
    </div>
  );
};

export default ChartCard;
