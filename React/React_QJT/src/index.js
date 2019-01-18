import "babel-polyfill"

import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { BrowserRouter, HashRouter, Route ,Link, Switch} from 'react-router-dom';

import UserAddPage from './pages/UserAdd'
import UserListPage from './pages/UserList'
import UserEditPage from './pages/UserEdit'
import BookAddPage from './pages/BookAdd'
import BookListPage from './pages/BookList'
import BookEditPage from './pages/BookEdit'
import test from './react-redux/ControlPanel'
import Login from './pages/Login'
import Home from './pages/Home';
import HomeLayout from './layouts/HomeLayout';
import store from './react-redux/Store.js'

const routerDom = (
    <Provider store={store}>
        <BrowserRouter>
            <div>
            <Route exact path="/" component={Login}/>
                <HomeLayout>
                    <Switch>
                        <Route path="/home" component={Home}/>
                        <Route path="/user/add" component={UserAddPage} />
                        <Route path="/user/list" component={UserListPage} />
                        <Route path="/user/edit/:id" component={UserEditPage}/>
                        <Route path="/book/list" component={BookListPage} />
                        <Route path="/book/add" component={BookAddPage} />
                        <Route path="/book/edit/:id" component={BookEditPage}/>
                        <Route path="/test" component={test} />
                    </Switch>
                </HomeLayout>
            </div>
        </BrowserRouter>
    </Provider>
)
ReactDOM.render(
    routerDom, 
    document.getElementById('app'));