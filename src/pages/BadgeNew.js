import React from 'react';

import './styles/BadgeNew.css';
import header from '../images/platziconf-logo.svg';
import Badge from '../components/Badge.jsx';
import BadgeForm from '../components/BadgeForm.jsx'
import api from '../api';

class BadgeNew extends React.Component {
  state = { 
    form: {
      first_name: '',
      last_name: '',
      twitter: '',
      email: '',
      job_title: ''
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
    } catch (error) {
      this.setState({loading: false, error});
    }
  }
  render() {
    const { form } = this.state;
    return (
      <React.Fragment>
        <div className="BadgeNew__hero">
          <img className="BadgeNew__hero-image img-fluid" src={header} alt="Logo" />
        </div>

        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge
                firstName={form.first_name || 'First name'}
                lastName={form.last_name || 'Last name'}
                twitter={form.twitter || 'Twitter'}
                jobTitle={form.job_title || 'Job title'}
                email={form.email || 'Email'}
                avatarUrl="https://www.gravatar.com/avatar/21594ed15d68ace3965642162f8d2e84?d=identicon"
              />
            </div>
            <div className="col-6">
                <BadgeForm 
                  onChange = {this.handleChange}
                  onSubmit = {this.handleSubmit} 
                  formValues = {this.state.form}
                />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default BadgeNew;
