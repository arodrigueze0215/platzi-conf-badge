import React from 'react';

class BadgeForm extends React.Component {
    render() {
        const { formValues, onChange } = this.props;
        return (
            <div>
                <h1>New Attendant</h1>
                <form>
                    <div className="form-group">
                        <label>First Name</label>
                        <input 
                            onChange={onChange}
                            className="form-control"
                            type="text"
                            name="first_name"
                            value={formValues.first_name}
                            />
                    </div>
                    <div className="form-group">
                        <label>Last Name</label>
                        <input 
                            onChange={onChange}
                            className="form-control"
                            type="text"
                            name="last_name"
                            value={formValues.last_name}
                            />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input 
                            onChange={onChange}
                            className="form-control"
                            type="mail"
                            name="email"
                            value={formValues.email}
                            />
                    </div>
                    <div className="form-group">
                        <label>Job title</label>
                        <input 
                            onChange={onChange}
                            className="form-control"
                            type="text"
                            name="job_title"
                            value={formValues.job_title}
                            />
                    </div>
                    <div className="form-group">
                        <label>Twitter</label>
                        <input 
                            onChange={onChange}
                            className="form-control"
                            type="text"
                            name="twitter"
                            value={formValues.twitter}
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
    handleClick = e => {
        console.log(this.state)

    }
}
export default BadgeForm;