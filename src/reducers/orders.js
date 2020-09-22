// Orders reducer


const ordersReducerDefaultState = [
    {
        item: 'Tomatoes',
        img: 'staticAssets/tomatoes_arzns2',
        status: 'pending',
        date: '01-01-2020',
        total: 1500,
        id: '#abc123'
    },
    {
        item: 'Beans',
        img: 'staticAssets/beans_jgdn6y',
        status: 'complete',
        date: '01-04-2020',
        total: 4000,
        id: '#def456'
    }
]

export default (state = ordersReducerDefaultState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}