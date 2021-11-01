import PropTypes from 'prop-types'
const Button = ({color,text,onClick}) => {
    // const onClick =(e)=>{
    //   //  console.log(e)
    //     //console.log('click')
    // }
    return (
        <div>
             <button  onClick={onClick} style={{backgroundColor:color}}className='btn'>{text}</button>
        </div>
    )
}
Button.defaultProps ={
    text:'Add',
    color:'steelblue'
}
Button.propTypes ={
    text:PropTypes.string.isRequired,
    onClick:PropTypes.func,
}
export default Button
