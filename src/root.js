import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { HOME, DETAILS } from './pathСonstants';
import defaultTheme from './theme';
import HomePage from './views/HomePage';
import ApplicationLayout from './views/ApplicationLayout';
import DetailsPage from './views/DetailsPage';
import NotFoundPage from './views/NotFoundPage';
import GlobalStyle from './styled';


export const RootLayout = () => (

    <ThemeProvider theme={defaultTheme}>
      <ApplicationLayout>
        <Switch>

            <Route exact name="/List"  path={HOME} component={HomePage} />

            <Redirect exact from="/" to={HOME} />
            <Route name="/Details/:id" path={DETAILS} component={DetailsPage} />
            <Route name="/NotFound" component={NotFoundPage} />
            
            
        </Switch>
      </ApplicationLayout>
    </ThemeProvider>

);

const Root = ({ store }) => (
    <Provider store={store}>
          <GlobalStyle theme={defaultTheme} />
          
          <BrowserRouter>
            <RootLayout />
          </BrowserRouter>   
    </Provider>
);

Root.propTypes = {store: PropTypes.object};
export default Root;
