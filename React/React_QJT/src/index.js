import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, HashRouter, Route ,Link, Switch} from 'react-router-dom';
import UserAddPage from './pages/UserAdd'
import UserListPage from './pages/UserList'
import UserEditPage from './pages/UserEdit'
import BookAddPage from './pages/BookAdd'
import BookListPage from './pages/BookList'
import BookEditPage from './pages/BookEdit'
import Login from './pages/Login'
import Home from './pages/Home';
import HomeLayout from './layouts/HomeLayout';

const routerDom = (
    <BrowserRouter>
        <div>
            <HomeLayout>
                <Switch>
                    <Route exact path="/" component={Login}/>
                    <Route exact path="/home" component={Home}/>
                    <Route path="/user/add" component={UserAddPage} />
                    <Route path="/user/list" component={UserListPage} />
                    <Route path="/user/edit/:id" component={UserEditPage}/>
                    <Route path="/book/list" component={BookListPage} />
                    <Route path="/book/add" component={BookAddPage} />
                    <Route path="/book/edit/:id" component={BookEditPage}/>
                </Switch>
            </HomeLayout>
        </div>
    </BrowserRouter>
)
ReactDOM.render(
    routerDom, 
    document.getElementById('app'));