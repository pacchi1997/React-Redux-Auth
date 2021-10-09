import { useSelector,useDispatch} from 'react-redux';
import classes from './Counter.module.css';
import { counterActions } from '../store/counterSlice';

const Counter = () => {
  const counter = useSelector(state => state.counter.counter);
  const show = useSelector(state => state.counter.showCounter);
  const dispatch = useDispatch();

 
  const incrimentHandler = ()=>{
 dispatch(counterActions.increment());
  }
  const increase = () =>{
    dispatch(counterActions.increase({ ten: 10}));
  }
  const decrimentHandler= () =>{
    dispatch(counterActions.decriment());
  }
  const resetCounterHandler = () => {
    dispatch(counterActions.reset());
  };
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show &&  <div className={classes.value}>{counter}</div>} 
      <div>
        <button onClick={incrimentHandler}>Incriment</button>
        <button onClick={increase}>Incriment by 5</button>
        <button onClick={decrimentHandler}>Deciment</button> 
         </div>
      <button onClick={resetCounterHandler}>Reset</button>
      <button onClick={toggleCounterHandler}>Toggle counter</button>
    </main>
  );
};

export default Counter;
