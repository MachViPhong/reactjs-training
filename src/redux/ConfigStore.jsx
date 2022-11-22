//File cấu hình store để chứa các state của ứng dụng
import { configureStore } from "@reduxjs/toolkit";
import { arrNguoiDungReducer } from "./reducers/arrNguoiDungReducer";
import { gameReducer } from "./reducers/gameReducer";

export const store = configureStore({
  reducer: {
    //Các state ứng dụng đặt tại đây
    fontSizeState: (state = 16, action) => {
      console.log("action1", action);
      switch (action.type) {
        case "TANG_GIAM_FONT_SIZE": {
          state = state + action.payload;
          return state;
        }
        default:
          return state;
      }
      //     console.log('action1', action);
      //     if(action.type == 'TANG_GIAM_FONT_SIZE'){
      //         state = state + action.payload;
      //     }
      //   return state;
    },
    imgSrcReducer: (state = "./img/imgBlackCar.jpg", action) => {
      console.log("action2", action);
      switch (action.type) {
        case "CHANGE_COLOR": {
          state = action.payload;
          return state;
        }
        default:
          return state;
      }
    },
    arrNguoiDungReducer: arrNguoiDungReducer,
    gameReducer: gameReducer,
  },
});
