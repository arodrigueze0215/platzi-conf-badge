import React from 'react';

import './styles/BadgeNew.css';
import header from '../images/badge-header.svg';
import Badge from '../components/Badge.jsx';
import BadgeForm from '../components/BadgeForm.jsx'

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
  render() {
    const { form } = this.state;
    return (
      <React.Fragment>
        <div className="BadgeNew__hero">
          <img className="img-fluid" src={header} alt="Logo" />
        </div>

        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge
                firstName={form.first_name}
                lastName={form.last_name}
                twitter={form.twitter}
                jobTitle={form.job_title}
                avatarUrl="https://www.gravatar.com/avatar/21594ed15d68ace3965642162f8d2e84?d=identicon"
              />
            </div>
            <div className="col-6">
                <BadgeForm onChange = {this.handleChange} formValues = {this.state.form}/>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default BadgeNew;
