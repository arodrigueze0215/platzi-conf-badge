import React from 'react';

class BadgeForm extends React.Component {
    state = {};
    render() {
        return (
            <div>
                <h1>New Attendant</h1>
                <form>
                    <div className="form-group">
                        <label>First Name</label>
                        <input 
                            onChange={this.handleChange}
                            className="form-control"
                            type="text"
                            name="first_name"
                            value={this.state.first_name}
                            />
                    </div>
                    <div className="form-group">
                        <label>Last Name</label>
                        <input 
                            onChange={this.handleChange}
                            className="form-control"
                            type="text"
                            name="last_name"
                            value={this.state.last_name}
                            />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input 
                            onChange={this.handleChange}
                            className="form-control"
                            type="mail"
                            name="email"
                            value={this.state.email}
                            />
                    </div>
                    <div className="form-group">
                        <label>Job title</label>
                        <input 
                            onChange={this.handleChange}
                            className="form-control"
                            type="text"
                            name="job_title"
                            value={this.state.job_title}
                            />
                    </div>
                    <div className="form-group">
                        <label>Twitter</label>
                        <input 
                            onChange={this.handleChange}
                            className="form-control"
                            type="text"
                            name="twitter"
                            value={this.state.twitter}
                            />
                    </div>
                    <button
                        type="button"
                        onClick={this.handleClick}
                        className="btn btn-primary">
                            Save
                    </button>
                </form>
            </div>
        )
    }
    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
        
    }
    handleClick = e => {
        console.log(this.state)

    }
}
export default BadgeForm;