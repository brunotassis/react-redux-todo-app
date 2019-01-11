export default props => {
    if(props.boolean){
        return props.children;
    }else{
        return false;
    }
}
