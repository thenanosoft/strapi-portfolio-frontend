import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import client from './utils/apolloClient';
import SiteHeader from './components/SiteHeader';
import SiteFooter from './components/SiteFooter';
import HomePage from './pages/HomePage';
import Category from './pages/Category';
import Portfolio from './pages/Tags';
import SinglePortflio from './pages/SinglePortflio';
import { Container } from 'react-bootstrap';

// CSS import
import './pages/components/index.css'

function App() {

  return (

    <Router>
      <ApolloProvider client={client}>

          <Container style={{
            maxWidth: '100%',
            margin: '0',
            padding: '0',
          }}>
            <Container style={{
              background: 'linear-gradient(75deg, rgba(37, 27, 55, 1) 0%, rgba(55, 41, 72, 1) 0%, rgba(255, 202, 202, 1) 100%)',
              height: '100vh',
              maxWidth: '100%',
              marginBottom: '-20vh',
            }} >
              
              <SiteHeader />
              <Container>
                <Routes>
                  <Route path="/" element={<HomePage />}> </Route>
                  <Route path="/category/:slug" element={<Category />} />
                  <Route path="/portfolio/:slug" element={<SinglePortflio />} />
                  <Route path="/tag/:slug" element={<Portfolio />} />
                </Routes>
              </Container>
              <SiteFooter />
              </Container>
          </Container>
      </ApolloProvider>
    </Router>

  );
}

export default App;
