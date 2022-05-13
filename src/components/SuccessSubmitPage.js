import TextTemplate from "../helpers/TextTemplate";

const style = {
    width: '100%',
    marginTop: '15%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'

}
const SuccessSubmitPage = () => {
    return (
        <div style={style}>
            <TextTemplate text='Submission successful!'/>
        </div>
    )
}
export default SuccessSubmitPage;