const increase = () => {
    return {
        type: 'INCREMENT',
    };
};

const decrease = () => {
    return {
        type: 'DECREMENT',
    };
};

export { increase, decrease };
