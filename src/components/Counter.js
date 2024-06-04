import { counterActions } from '../store/counter';
import classes from './Counter.module.css';
import { useDispatch, useSelector } from 'react-redux';

const Counter = () => {
  const counter = useSelector((state) => state.counter.value);
  const showCounter = useSelector((state) => state.counter.showCounter);

  const dispatch = useDispatch();

  const onIncrement = () => {
    // dispatch({ type: 'increment' });
    dispatch(counterActions.increment());
  };

  const onIncrease = () => {
    // dispatch({ type: 'increase', amount: 5 });
    dispatch(counterActions.increase(5));
  };

  const onDecrement = () => {
    dispatch(counterActions.decrement());
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={onIncrement}>Increment</button>
        <button onClick={onIncrease}>Increase by 5</button>
        <button onClick={onDecrement}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
