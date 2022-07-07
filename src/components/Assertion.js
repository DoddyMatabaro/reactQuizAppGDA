import React from 'react'
import LabelQuestion from './LabelQuestion'


function Assertion(props) {
    let question = ["doddy", "duclane", "faustin", "roi"];
  return (
    <div>
          {question.map(({assertion}) => (
                <div >
                   {/* <PlantItem cover={cover} name={name} water={water} light={light} /> */}
                   <LabelQuestion value='1' assertion={assertion}/>
                    {/* <button onClick={() => addToCart(name,price)}>Ajouter</button> */}
                </div>
             ))} 
             
    </div>
  )
}

export default Assertion