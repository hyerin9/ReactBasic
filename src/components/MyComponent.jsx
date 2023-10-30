

const MyComponent = props => {
    return (
        <div>
            props.name: {props.name}<br/>
            props.children: {props.children}
        </div>
    );
};

MyComponent.defaultProps = {
    name: '기본 이름'
};

export default MyComponent;