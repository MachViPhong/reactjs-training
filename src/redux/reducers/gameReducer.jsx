const stateDefault = {
  arrXucXac: [
    { img: "/img/6.png", diem: 6 },
    { img: "/img/6.png", diem: 6 },
    { img: "/img/6.png", diem: 6 },
  ],
  tongSoBanThang: 0,
  tongSoBanChoi: 0,
  giaTriCuoc: true, //true: tài, false: xỉu
};

export const gameReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "DAT_CUOC": {
      state.giaTriCuoc = action.payload;
      return { ...state };
    }
    case "PLAY_GAME": {
      //Xử lý tạo ra mảng xúc xắc ngẫu nhiên để thay đổi mảng xúc xắc cũ
      let arrXXNN = [];
      for (let i = 1; i <= 3; i++) {
        //Mỗi lần chạy thì tạo ra 1 số ngẫu nhiên
        let soNgauNhien = Math.floor(Math.random() * 6) + 1;
        //Từ số ngẫu nhiên tạo ra object xúc xắc
        let xucXacNN = { diem: soNgauNhien, img:`./img/${soNgauNhien}.png` };
        //Thêm object xúc xắc ngẫu nhiên vào mảng
        arrXXNN.push(xucXacNN);
      }
      //Cập nhật lại state xúc xắc ngẫu nhiên
      state.arrXucXac=arrXXNN;
      //Xử lý tính điểm
      let tongDiem = arrXXNN.reduce((td,xx)=>{
        return td + xx.diem;
      }, 0);
      //Xử lý thắng
      if((tongDiem>11 && state.giaTriCuoc) || (tongDiem <= 11 && !state.giaTriCuoc)){
        //thắng : Cập nhật lại state số bàn thắng
        state.tongSoBanThang +=1;
      }
      //luôn luôn tăng state bàn chơi sau mỗi lần play game
      state.tongSoBanChoi +=1;
      return { ...state };
    }
    default:
      return state;
  }
};
