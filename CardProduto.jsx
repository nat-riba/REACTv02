import './CardProduto.css';

const CardProduto = ({ nome, precoUnitario, desconto }) => {

  const precoComDesconto = precoUnitario * (1 - desconto / 100);
  const precoFormatado = precoComDesconto.toFixed(2); 

  return (
    <div className="card-produto">
      <h2>{nome}</h2>
      <p className="preco">
        {desconto > 0 ? (
          <>
            <span className="preco-desconto">R$ {precoFormatado}</span>
            <span className="preco-original">R$ {precoUnitario.toFixed(2)}</span>
          </>
        ) : (
          <span>R$ {precoUnitario.toFixed(2)}</span>
        )}
      </p>
      {desconto > 0 && (
        <p className="desconto">Desconto: {desconto}%</p>
      )}
    </div>
  );
};

export default CardProduto;