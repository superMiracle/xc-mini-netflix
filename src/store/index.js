import { configureStore } from '@reduxjs/toolkit';

import main from '../containers/Home/mainReducer';

export default configureStore({
  reducer: {
    main: main,
  },
});
