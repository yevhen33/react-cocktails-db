import React from 'react';
import styled from 'styled-components';

const MainBlock = styled.div`
    margin: 0 auto;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 20px;
    padding: 15px 10px;
    font-size: 24px;
    color: #fff;
    text-align: center;
    h2 {
        font-size: 32px;
    }
    h3 {
        font-size: 26px;
    }
    h4 {
        margin-top: 10px;
        font-size: 18px;
    }
    @media (max-width: 991px) {
        font-size: 22px;
        h2 {
            font-size: 30px;
        }
        h3 {
            font-size: 22px;
        }
        h4 {
            font-size: 16px;
        }
    }
    @media (max-width: 767px) {
        font-size: 20px;
        h2 {
            font-size: 26px;
        }
        h3 {
            font-size: 20px;
        }
    }
    @media (max-width: 575px) {
        font-size: 16px;
        h2 {
            font-size: 18px;
        }
        h3 {
            font-size: 16px;
        }
        h4 {
            font-size: 14px;
        }
    }
`;

const MainPage = () => {
    return (
        <>
            <MainBlock>
                <h2>Welcome to the database cocktails</h2>
                <h3>Here you can view a variety of cocktails.</h3> 
                Find out how and from what to make them, as well as read information about the most popular drinks.
                <br/>
                Follow the links and read the information.
                <h4>Enjoyable use</h4>
            </MainBlock>
        </>
    )
};

export default MainPage;