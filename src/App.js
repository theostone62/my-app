import React, { useState } from 'react';
import shuffle from './utilities/shuffle'
function App() {
  const [cards,setCards] = useState(shuffle)
  return (
    <div className='grid'>
      {cards.map((card)=>{
        const { image, id, marched} = card;
        return(
          <Card
            key={id}
            image={image}
            selected={false}
            onClick={()=>{}}
          />
        )
      })}
    </div>
  );
}

export default App;
