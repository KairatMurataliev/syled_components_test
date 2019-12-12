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

        const UserWrapper = styled.div `
            width: 80%;
            margin: 0 auto;
            font-family: 'Roboto', sans-serif;
        `;

        return (
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
        usersList: state.users
    }
};

const mapDispatchToProps = dispatch => {
    return {
        getUsers: () => dispatch(getUsers())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersList);
