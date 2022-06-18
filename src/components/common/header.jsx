import { BsLinkedin, BsMedium } from "react-icons/bs";
import { DiGithubBadge, DiStackoverflow } from "react-icons/di";
import ButtonGroup from 'react-bootstrap/ButtonGroup';

import img from '../../image.jpg'
export default function Header() {
    const SIZE = 30;
    const CLASS_NAME = "btn btn-dark btn-outline-light btn-borderLess";
    return (
        <div className="header">
            <img src={img} alt="Avatar" className="avatar" />
            <h1>Rajratna Maitry</h1>
            <ButtonGroup size="sm" >
                <a className={CLASS_NAME} target="_blank" href="https://rajratnamaitry.medium.com/" >
                    <BsMedium size={SIZE} />
                </a>
                <a className={CLASS_NAME} target="_blank" href="https://github.com/rajratnamaitry/" >
                    <DiGithubBadge size={SIZE} />
                </a>
                <a className={CLASS_NAME} target="_blank" href='https://stackoverflow.com/users/4549472/rajratna-maitry' >
                    <DiStackoverflow size={SIZE} />
                </a>
                <a className={CLASS_NAME} target="_blank" href="https://www.linkedin.com/in/rajratna-maitry-9b7084104/" >
                    <BsLinkedin size={SIZE} />
                </a>
            </ButtonGroup>
            <h2>A timeline that shows open source contributions all the way to present day.</h2>
        </div>
    )
}
