import { Container } from 'semantic-ui-react';
import Header from '../../components/Header';
import classNames from 'classnames';

interface BasicLayoutProps {
  children: React.ReactNode;
  className?: string;
}

// className="basic-layout"

const BasicLayout: React.FC<BasicLayoutProps> = ({ children, className }) => {
  return (
    <Container
      fluid
      className={classNames('basic-layout', { [className]: className })}
    >
      <Header />
      <Container className="content">{children}</Container>
    </Container>
  );
};

export default BasicLayout;
