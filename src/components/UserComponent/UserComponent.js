import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const UserItem = styled.div`
    padding: 5px 15px;
    margin: 15px auto;
    display: flex;
    width: 80%;
    justify-content: space-between;
    border-radius: 5px;
    background: linear-gradient(0deg, rgba(231,231,231,1) 37%, rgba(255,255,255,1) 100%);
    box-shadow: 0px 0px 4px 0px rgba(0,0,0,0.75);
`;

const InfoWrap = styled.div`
    width: 90%;
    padding: 0 15px;
`;

const Avatar = styled.img`
    width: 15%;
    height: auto;
    border-radius: 5px;
`;

const LocMail = styled.span `
    margin: 0 15px;
    color: #616161;
`;

const UserLogin = styled.button `
    background: transparent;
    border: none;
    color: #2988da;
    cursor: pointer;
    font-size: 1em;
    font-weight: 800;
`;

const Bio = styled.p `
    font-size: 18px;
    margin-left: 8px;
`;

const User = props => {
    return (
        <UserItem>
            <Avatar src={props.user.avatar_url} alt="avatar"/>
            <InfoWrap>
                <UserLogin onClick={(event) => props.showInfo(event, props.user.login)}>{props.user.login}</UserLogin>
                <span>{props.user.name}</span>
                <Bio>{!props.user.bio ? "There is no bio in this profile. Sorry." : props.user.bio}</Bio>
                <FontAwesomeIcon icon={faMapMarkerAlt}/><LocMail>{props.user.location}</LocMail>
                <FontAwesomeIcon icon={faEnvelope}/><LocMail>{!props.user.email ? 'Sorry, email not provided' : props.user.email}</LocMail>
            </InfoWrap>
        </UserItem>
    )
};

export default User;
