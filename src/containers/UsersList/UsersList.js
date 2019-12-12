import React, {Component} from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';
import User from '../../components/UserComponent/UserComponent';
import {getUsers} from "../../store/actions/actions";

class UsersList extends Component {

    componentDidMount() {
        this.props.getUsers();
    }

    showInfo = (event, login) => {
        event.preventDefault();
        window.open(`https://github.com/${login}`, "_blank");
    };

    render() {

        const ErrorDiv = styled.div`
            border: 1px solid #ccc;
            padding: 10px 0;
            width: 40%;
            height: 100px;
            margin: 50px auto;
            border-radius: 7px;
            text-align: center;
            box-shadow: 4px 4px 3px 0px rgba(0,0,0,0.75);
            background: linear-gradient(0deg, rgba(231,231,231,1) 37%, rgba(255,255,255,1) 100%);
        `;

        const UserWrapper = styled.div`
            width: 80%;
            margin: 0 auto;
            font-family: 'Roboto', sans-serif;
        `;

        const ErrorMessage = styled.p`
            font-weight: bold;
            text-transform: uppercase;
        `;

        const ErrorStatus = styled.p`
            font-weight: bold;
            color: #d01a1a;
        `;

        return (
            this.props.error ?
                <ErrorDiv>
                    Sorry, looks like some error occured!!!
                    <ErrorMessage>Message: {this.props.error.message}</ErrorMessage>
                    <ErrorStatus>Status: {this.props.error.status}</ErrorStatus>
                </ErrorDiv> :
                <UserWrapper>
                    {this.props.usersList && this.props.usersList.map((user, index) => {
                        return (
                            <User
                                key={index}
                                showInfo={this.showInfo}
                                user={user}
                            />
                        )
                    })}
                </UserWrapper>
        )
    }
}

const mapStateToProps = state => {
    return {
        usersList: state.users,
        error: state.error
    }
};

const mapDispatchToProps = dispatch => {
    return {
        getUsers: () => dispatch(getUsers())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersList);
