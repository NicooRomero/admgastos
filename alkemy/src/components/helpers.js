export const checkBudget = (budget, amountleft) => {
    let classes;

    if( (budget / 4 ) > amountleft ) {
        classes = 'red';
    } else if ( (budget / 2 ) > amountleft ) {
        classes = 'orange';
    } else {
        classes = 'green';
    }

    return classes;
}