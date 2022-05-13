
const style = {
    width: '100%',
    fontSize: '50px',
    fontWeight:'800',
    textAlign:'center',
}
const TextTemplate = ({text}) => {
    return(
        <div style={style}>{text}</div>
    )
}
export default TextTemplate