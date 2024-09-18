import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import HooksApp from './HooksApp'

import './index.css'
import CounterApp from './useState/CounterApp'
import CounterWithCustomHooks from './useState/CounterWithCustomHooks'
import SimpleForm from './useEffect/simpleForm'
import FormWithCustomHooks from './useEffect/FormWithCustomHooks'
import MultipleCustomHooks from './examples/MultipleCustomHooks'
import FocusScreen from './useRef/FocusScreen'
import Layout from './useLayout/useLayout'
import MemoHook from './memos/MemoHook'
import { Padre } from './07-tarea-memo/Padre'
import TodoApp from './useReducer/TodoApp'

import './useReducer/introReducer'

createRoot(document.getElementById('root')).render(
   <StrictMode>
    
    {/* 
    <HooksApp/>
    <CounterApp/>
    <CounterWithCustomHooks/>
    <SimpleForm/>
    <FormWithCustomHooks/>
     <MultipleCustomHooks/>
     <Layout/>
     <Memorize/>
     <Padre/>
    */}
    <TodoApp/>

    
    
    
   </StrictMode>,
)
