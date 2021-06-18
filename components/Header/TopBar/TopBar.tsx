import { Container, Grid, Image, Input } from 'semantic-ui-react';
import Link from 'next/link';

const TopBar = () => {
  return (
    <div className="top-bar">
      <Container>
        <Grid className="top-bar">
          <Grid.Column width={8} className="top-bar__left">
            <Logo />
          </Grid.Column>
          <Grid.Column width={8} className="top-bar__right">
            <h2>BUSCADOR</h2>
          </Grid.Column>
        </Grid>
      </Container>
    </div>
  );
};

const Logo = () => {
  return (
    <Link href="/">
      <a>
        <Image src="/logo.png" alt="Gaming" />
      </a>
    </Link>
  );
};

export default TopBar;
