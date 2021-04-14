import React from 'react';
import ReactDOM from 'react-dom';
import Shama from './Shama';
import Addir from './Addir';
import Tamir from './Tamir';
import Aviv from './Aviv';

const App=()=>{
    return (
    <div>
        App
        <Shama></Shama>
		<Addir/>
        <Tamir/>
        <Aviv></Aviv>
    </div>
    );
}
export default App;