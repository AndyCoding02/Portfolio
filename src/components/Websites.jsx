import React from "react";
import './Webstyle.css';
import styled from "styled-components";

const Container = styled.div`
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: 'Poppins', sans-serif;  
`;

const Websites = () => {
    return (
        <div className="flex-container-left">

            {/* <div className="flex-child">
                <div className="content">
                    <h3>SmartBrain</h3>
                    <p>A virtual brain capable of finding the faces in every photo.</p>
                    <a href="./smartbrain" title="" className="btn btn-default">Discover</a>
                </div>
            </div> */}
            <div className="flex-container-right">
                <div className="flex-child">
                    <div className="content">
                        <h3>RoboFriends</h3>
                        <p>A searchable list full of friendly robots with their names and jobs.</p>
                        <a href="https://robo-fr.web.app" target="_blank" title="" className="btn btn-default">Discover</a>
                    </div>
                </div>
            </div>
        </div>
    )
};


export default Websites;