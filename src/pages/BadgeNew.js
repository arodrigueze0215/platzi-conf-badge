import React from 'react';

import './styles/BadgeNew.css';
import header from '../images/platziconf-logo.svg';
import Badge from '../components/Badge.jsx';
import BadgeForm from '../components/BadgeForm.jsx';
import Loader from '../components/Loader.jsx';
import PageError from '../components/PageError.jsx';
import api from '../api';

class BadgeNew extends React.Component {
  state = { 
    loading: false,
    error: undefined,
    form: {
      firstName: '',
      lastName: '',
      twitter: '',
      email: '',
      jobTitle: ''
    }
  }
  handleChange = e => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    });
  }
  handleSubmit = async e => {
    e.preventDefault();
    try {
      this.setState({loading: true, error:undefined});
      await api.badges.create(this.state.form);
      this.props.history.push('/badges');
    } catch (error) {
      this.setState({loading: false, error});
    }
  }
  render() {
    const { form, loading, error } = this.state;
    if (loading === true) {
      return (<Loader/>)
    } else {
      return (
        <React.Fragment>
          <div className="BadgeNew__hero">
            <img className="BadgeNew__hero-image img-fluid" src={header} alt="Logo" />
          </div>
  
          <div className="container">
            <div className="row">
              <div className="col-6">
                <Badge
                  firstName={form.firstName || 'First name'}
                  lastName={form.lastName || 'Last name'}
                  twitter={form.twitter || 'Twitter'}
                  jobTitle={form.jobTitle || 'Job title'}
                  email={form.email || 'Email'}
                  avatarUrl="https://www.gravatar.com/avatar/21594ed15d68ace3965642162f8d2e84?d=identicon"
                />
              </div>
              <div className="col-6">
                  <BadgeForm 
                    onChange = {this.handleChange}
                    onSubmit = {this.handleSubmit} 
                    formValues = {form}
                    formError = {error}
                  />
              </div>
            </div>
          </div>
        </React.Fragment>
      );
    }
  }
}

export default BadgeNew;
