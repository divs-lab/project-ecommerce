
import './App.css'
import {Route,Routes} from 'react-router-dom'
import LoginPage from './components/login'


function App(){

    return(
        <>
            <Routes>
                <Route path="/login" element={<LoginPage/>}/>
            </Routes>
        </>
    )
}

export default App