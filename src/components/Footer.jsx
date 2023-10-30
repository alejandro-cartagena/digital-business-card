import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitterSquare } from '@fortawesome/free-brands-svg-icons'
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons'
import { faInstagramSquare } from '@fortawesome/free-brands-svg-icons'
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
    return (
        <div className="footer">
            <div className="container footer-container">
                <FontAwesomeIcon icon={faTwitterSquare} className="icon"></FontAwesomeIcon>
                <FontAwesomeIcon icon={faFacebookSquare} className="icon"></FontAwesomeIcon>
                <a href="https://www.instagram.com/honduranhunk/">
                    <FontAwesomeIcon icon={faInstagramSquare} className="icon"></FontAwesomeIcon>
                </a>
                <a href="https://github.com/alejandro-cartagena">
                    <FontAwesomeIcon icon={faGithubSquare} className="icon"></FontAwesomeIcon>
                </a>
                
            </div>
        </div>
    )
}