import React from 'react'; 

export function Card({front,back}) {
  const [checkCard, setCheckCard] = React.useState(false);
  
  const className = `card ${checkCard ? 'card-check' : ''}`;
  
  const handleClick = () => {
    setCheckCard(!checkCard);
  };
  
  return (
    <div className={className} onClick={handleClick} data-back={back}>
      {front}
    </div>
  );
}