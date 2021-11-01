import PropTypes from 'prop-types'
import Button from './Button'
import { useLocation } from 'react-router-dom'
//import { Component } from "react"
//  const Header = (props) => {
    const Header = ({title,onAdd,showAdd})=>{
        const location = useLocation()

        // const onClick = () => {
        //     console.log("click")
        // }
     return (
         <div>

             <header className='header'>
                 <h1>{title}</h1>
                 {location.pathname === '/' && (
        <Button
          color={showAdd ? 'red' : 'green'}
          text={showAdd ? 'Close' : 'Add'}
          onClick={onAdd}
        />
      )}
    </header>
                 {/* <Button  color={showAdd ?  'red':'blue'}text={showAdd ?'Close':'Add'} onClick={onAdd} /> */}
                {/* <Button color='blue' text="Add"/> */}
                {/* <Button color='green' text="edit"/>
                <Button color='red' text="delete"/> */}
                 {/* inline style
                 <h1 style={{color:"red" ,backgroundColor:'black'}}>{title}</h1> */}
                 {/* style get from variable
                 <h1 style={headingstyle}>{title}</h1> */}
                 {/* <h1>{props.title}</h1> */}
             {/* </header> */}
             {/*  props by passing inside compoents
             <h2>{props.tittle}</h2> */}
             {/* <h1>Task Tracker</h1> */}
         </div>
     )
 }
//  const headingstyle={
//     color:"red" ,
//     backgroundColor:'black'
//  }
 /* validation  for passin props*/
 Header.propTypes = {
    title: PropTypes.string.isRequired
  }

//  pass props in same Component page
Header.defaultProps ={
    title:"Task Tracker"
}
 export default Header
 