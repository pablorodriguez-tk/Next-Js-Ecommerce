import { Container } from 'semantic-ui-react';

const BasicLayout: React.FC = ({ children }) => {
  return (
    <Container fluid className="basic-layout">
      <Container className="content">
        <div>Menu</div>
        {children}
      </Container>
    </Container>
  );
};

export default BasicLayout;
