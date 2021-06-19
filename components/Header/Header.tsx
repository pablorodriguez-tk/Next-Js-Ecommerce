import Menu from './Menu';
import TopBar from './TopBar';

const Header: React.FC = () => {
  return (
    <div className="header">
      <TopBar />
      <Menu />
    </div>
  );
};

export default Header;
