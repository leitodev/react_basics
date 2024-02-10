
export function Square({value, onSquareClick}) { // surprice its not default =) its import {Square} from './square'

    return <button 
        type="button" 
        className='square'
        onClick={onSquareClick}>{value}</button>
}