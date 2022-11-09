import { click } from '@testing-library/user-event/dist/click';
import React, {useState, Fragment} from 'react'

const Counter = () => {

    const [numero, setNumero] = useState(0);

    const aumentar = () => {
      console.log('me diteh un click')
      setNumero(numero + 1)
    }

    return (
          // se requiere que esten entre un div todos los elementos a renderizar cuando esten dentro del return o se puede utilizar FRAGMENT
        <Fragment>
          {/* cuando se quiere leer desde js se envuelbe en corchete {} */}
          <h3>You can count on me, like 1... 2... 3... 🎶 <span>{numero}</span></h3>  
          <button onClick={aumentar}>Add</button>
        </Fragment>
      );
}
 
export default Counter;