import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import $ from 'jquery';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { Link } from 'react-router-dom';

function PageContent() {
    const [content, setContent] = useState('initial');

    const handleClickDown = () => {
        $(".combine").slideUp(1000);
        setTimeout(() => {
            setContent('becomeMember');
        }, 900);
    };

    const handleClickUp = () => {
        $(".becomeMember").slideUp(1000);
        setTimeout(() => {
            setContent('initial');
        }, 900);
    };

    return (
        <>
            {content === 'initial' && (
                <div>
                    <div className="combine">
                        <div className="wrap title-container">
                            <h1 className="title title1">
                            <span>Student</span>
                            <span>Developers</span>
                            <span>Initiative.</span>
                            </h1>
                        </div>
                        <div className="sub">
                            <h2>&lt;We dream tech /&gt;</h2>
                        </div>
                    </div>
                    <ArrowDropDownIcon 
                        className="arrow-down svg_icons" 
                        onClick={handleClickDown} 
                        fontSize="large" 
                        role="button" 
                        aria-label="Expand to become a member section"
                    />
                </div>
            )}

            {content === 'becomeMember' && (
                <Container className="becomeMember">
                    <KeyboardArrowUpIcon 
                        className="arrow-up svg_icons" 
                        onClick={handleClickUp} 
                        role="button" 
                        aria-label="Collapse member section"
                    />
                    <div className="wrap">
                        <h1 className="title2 title become">
                            <span>Become an</span><br />
                            <span>SDI.</span>
                        </h1>
                    </div>
                    <button className="register">
                        <Link to='/register'>
                            <img src="img/group1.png" alt="SDI logo" />
                        </Link>
                    </button>
                </Container>
            )}
        </>
    );
}

export default PageContent;
