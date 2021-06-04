const If = props => {
    const elseChild = props.children.filter(child => child.type && child.type.name === 'Else')[0];
    const ifChildren = props.children.filter(child => child !== elseChild);
    if(props.test) {
        return ifChildren;
    }
    else if(elseChild) {
        return elseChild;
    }
    else {
        return false;
    }
}

export default If;
export const Else = props => {
    return props.children;
}
