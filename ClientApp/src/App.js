import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { StudentList } from './components/StudentList';
import { AddStudent } from './components/AddNewStudent';

//import { FetchData } from './components/FetchData';
//import { StudentList } from './components/StudentList';

export default class App extends Component {
  displayName = App.name

  render() {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
            <Route path='/StudentList' component={StudentList} />
            <Route path='/Addstudent' component={AddStudent} />
       
      </Layout>
    );
  }
}
