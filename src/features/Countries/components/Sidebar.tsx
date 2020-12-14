interface IProps {
  title: string;
}

const Sidebar: React.FC<IProps> = ({ children }) => {
  return (
    <aside className="md:w-80 md:pr-4 flex-none pb-8">
      <div className="bg-white shadow sm:rounded-lg p-4">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Filtrar</h3>

        {children}
      </div>
    </aside>
  );
};

export default Sidebar;
