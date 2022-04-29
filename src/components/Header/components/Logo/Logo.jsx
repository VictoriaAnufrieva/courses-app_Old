
import './Logo.css';
import logo from './logo.png';

//import React from 'react'
// import PropTypes 'prop-types';
 
// const Image =({
//     src, alt, className, width, height, ...attrs,
// }) => {
    
//     if(!src) {
//        src= 'https://via.placeholder.com/${width}x${height}'
//     }

//     const classes = className(
//         className,
//     );

//     return (
//         <img
//         scrc={src}
//         alt={alt}
//         className = {className}
//         width ={width}
//         height = {height}
//         {...attrs}
//         />
//     );
// };

// Image.protoTypes = {
//     src: PropTypes.string,
//     alt: PropTypes.string,
//     className: PropTypes.string,
//     width: PropTypes.number,
//     height: PropTypes.number,
// };

// Image.defaultProps = {
//     src: 'https://via.placeholder.com/100x100',
//     alt: 'image logo',
//     className: '', 
//     width: 100,
//     height: 100,
// }

export default function LogoComponent() {
    return (
    <img src={logo} className="Header-logo" alt="logo" />
    )
}

 