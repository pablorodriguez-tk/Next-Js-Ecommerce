import { Container } from 'semantic-ui-react';
import Header from '../../components/Header';

const BasicLayout: React.FC = ({ children }) => {
  return (
    <Container fluid className="basic-layout">
      <Header />
      <Container className="content">
        <div>Menu</div>
        {children}
      </Container>
    </Container>
  );
};

export default BasicLayout;
