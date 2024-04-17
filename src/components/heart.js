import {useDispatch, useSelector} from 'react-redux';
import { increment, decrement } from '../redux/features/counterSlice';

const Heart = () => {
    const dispatch = useDispatch();
    const count = useSelector((state) => state.counter.value);

    return (
        <div>
            <button onClick={() => dispatch(decrement())}>-</button>
            <span>{count}</span>
            <button onClick={() => dispatch(increment())}>+</button>
        </div>
    );
};

export default Heart;