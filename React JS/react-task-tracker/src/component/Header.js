import React from "react";
import PropTypes from 'prop-types'
import { Button } from "./Button";
const Header = ({ title }) => {
 const onClick = (e) => {
 console.log('Click', e);
 }
 return (
 <header className='header'>
 <h1>Hello, {title}</h1>
 <Button onClick={onClick} color='green' text='Hello' />
 <Button onClick={onClick} color='blue' text='Hello1' />
 <Button onClick={onClick} color='red' text='Hello2' />
 <Button onClick={onClick} />
 </header>
 )
}
const headingStyle = {
 color: 'darkcyan',
 backgroundColor: 'lightblue',
 textAlign: 'center'
}
Header.defaultProps = {
 title: 'Task Tracker',
}
Header.propTypes = {
    // See changes for isRequired after remove defaultProps
    //<Header title = {1}/> in app.js will show the warining in console.
    title: PropTypes.string.isRequired,
   }
   export default Header;