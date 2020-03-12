import React from 'react';
import {Link} from 'react-router-dom';
import './styles/BadgeDetails.css'
import PlatziConflogo from '../images/platziconf-logo.svg'
import api from '../api';
import PageLoading from '../components/Loader';
import PageError from '../components/PageError';
import Badge from '../components/Badge'

export default class BadgeDetails extends React.Component {
    state = {
        loading: true,
        error: undefined,
        data: undefined
    };

    componentDidMount() {
        this.fetchData();
    }

    fetchData = async () => {
        this.setState({loading:true, error:undefined})
        try {
            const data = await api.badges.read(this.props.match.params.badgeId);
            this.setState({loading: false, error: undefined,data});
        } catch (error) {
            this.setState({loading: false, error});
        }

    };
    render() {
        const {data, loading, error }= this.state;
        if (loading){
            return <PageLoading/>
        } else if(error) {
            return <PageError error={error}/>
        }else {
            return(
                <React.Fragment>
                    <div className="BadgeDetails__hero">
                        <div className="container">
                            <div className="row">
                                <div className="col-6">
                                    <img src={PlatziConflogo} alt="conference logo"/>
                                </div>
                                <div className="col-6 BadgeDetails__hero">
                                    <h1>{data.firstName} {data.lastName}</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <Badge 
                                    firstName={data.firstName}
                                    lastName={data.lastName}
                                    email={data.email}
                                    twitter={data.twitter}
                                    jobTitle={data.jobTitle}
                                />
                            </div>
                            <div className="col">
                                <h2>Actions</h2>
                                <div>
                                    <Link className="btn btn-primary mb-4" to={`/badges/${data.id}/edit`}>Edit</Link>
                                </div>
                                <div>
                                    <button className="btn btn-danger">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </React.Fragment>
            );
        }

    }

}