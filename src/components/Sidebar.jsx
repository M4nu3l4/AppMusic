import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className="bg-black text-white p-3 col-2" style={{ width: '250px' }}>
      <ul className="list-unstyled">
        <li><Link to="/" className="text-white">Home</Link></li>
        <li><Link to="/radio" className="text-white">Radio</Link></li>
        <li><Link to="/favorites" className="text-white">Preferiti</Link></li>
      </ul>
    </aside>
  );
};

export default Sidebar;

