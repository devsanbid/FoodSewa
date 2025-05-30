import { FiHome, FiBell, FiMail, FiSettings, FiPieChart } from 'react-icons/fi';

const icons = [FiPieChart, FiHome, FiMail, FiBell, FiSettings];

export default function Sidebar() {
  return (
    <div className="w-20 bg-[#252836] p-4 flex flex-col gap-6 items-center">
      <div className="bg-[#EA7C69] p-2 rounded-xl">
        <FiPieChart size={24} />
      </div>
      {icons.slice(1).map((Icon, idx) => (
        <Icon key={idx} className="text-gray-400 hover:text-white" size={24} />
      ))}
    </div>
  );
}
