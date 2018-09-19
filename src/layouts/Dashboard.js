import React from 'react';
import { Route, Switch } from 'react-router-dom';
import FeedPage from '../pages/Feed';
import Navigation from '../components/navigation/Navigation';
import AuthenticationChecker from '../components/Authentication';
import Container from '../components/Container';

function Dashboard() {
  return (
    <div>
      <header>
        <Navigation />
      </header>
      <main className="main">
        <Container>
          <Switch>
            <Route path="/" component={AuthenticationChecker(FeedPage)} />
          </Switch>
        </Container>
      </main>
    </div>
  );
}

export default Dashboard;
