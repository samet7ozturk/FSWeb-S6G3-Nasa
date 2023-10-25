export default function Input(props) {
  const { inputDegistir } = props;

  return (
    <div>
      <input id="input" type="date" onChange={inputDegistir} />
    </div>
  );
}
