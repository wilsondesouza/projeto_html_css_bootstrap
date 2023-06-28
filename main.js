function Universo(props) {
    return (
        React.createElement('h2', {}, props.label)
    )
}

ReactDOM.render(
    React.createElement(Universo, { label: 'Universo do Saber'}),
    document.querySelector('#universo'),
);
