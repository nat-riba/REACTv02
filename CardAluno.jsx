import './App.css';

const CardAluno = ({ nome, serie, media }) => {

  const classeMedia = media >= 7 ? 'aprovado' : 'reprovado';

  return (
    <div className={`card ${classeMedia}`}>
      <h2>{nome}</h2>
      <p>Série: {serie}</p>
      <p>Média: {media}</p>
      <p>{media >= 7 ? 'Aprovado!' : 'Reprovado!'}</p>
    </div>
  );
};

export default CardAluno;