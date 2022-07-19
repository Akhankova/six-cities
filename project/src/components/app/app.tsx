import Welcome from '../welcome/welcome';

type Props = {
  count: number,
}

function App(props:Props): JSX.Element {
  const { count } = props;
  return (<Welcome count={count}/>);
}

export default App;
