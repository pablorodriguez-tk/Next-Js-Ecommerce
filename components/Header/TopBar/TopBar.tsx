import { Container, Grid, Image, Input } from 'semantic-ui-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const TopBar: React.FC = () => {
  return (
    <div className="top-bar">
      <Container>
        <Grid className="top-bar">
          <Grid.Column width={8} className="top-bar__left">
            <Logo />
          </Grid.Column>
          <Grid.Column width={8} className="top-bar__right">
            <Search />
          </Grid.Column>
        </Grid>
      </Container>
    </div>
  );
};

const Logo: React.FC = () => {
  return (
    <Link href="/">
      <a>
        <Image src="/logo.png" alt="Gaming" />
      </a>
    </Link>
  );
};

const Search: React.FC = () => {
  const [searchStr, setSearchStr] = useState('');
  const [load, setLoad] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (load) {
      router.push(`/search?query=${searchStr}`);
    }
    setLoad(true);
  }, [searchStr]);
  return (
    <Input
      id="search-game"
      icon={{ name: 'search' }}
      value={router.query.query}
      onChange={(_, data) => setSearchStr(data.value)}
    />
  );
};

export default TopBar;
