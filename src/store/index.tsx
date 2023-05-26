import { configureStore }    from '@reduxjs/toolkit'
import transactionSlice from './slice/transactionsl';
import userSlice from './slice/User';

export const store = configureStore({

    reducer:{
         transactions: transactionSlice,
          users: userSlice,
        //  usecdata : usecokkie,
    
    },
    
});

