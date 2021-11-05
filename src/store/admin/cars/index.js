import axios from "axios";
export default {
  state: {
    cars: [
      {

        id:1,
        name: "S63 Amg",
        maker: "Mercedes",
        model: "2018",
        partsCount: "25",
        country: "germany",
        image:
          "https://www.motortrend.com/uploads/sites/5/2018/02/2018-Mercedes-AMG-S63-front-three-quarter-in-motion-02.jpg",
      },
      {
        id:2,
        name: "GTR",
        maker: "Nissan",
        model: "2018",
        partsCount: "15",
        country: "japan",
        image:
          "https://topgear.nl/thumbs/hd/2019/04/nissan-gt-r-nismo-2020-9-e1555494641198-scaled.jpg",
      },
      {
        id:3,
        name: "Sonata",
        maker: "Hyundai",
        model: "2018",
        partsCount: "15",
        country: "korea",
        image:
          "https://www.motortrend.com/uploads/sites/5/2019/01/2018-Hyundai-Sonata-Limited-front-three-quarter-in-motion-1.jpg",
      },
      {
        id:4,
        name: "Mustang",
        maker: "Ford",
        model: "2018",
        partsCount: "15",
        country: "America",
        image:
          "https://static.moniteurautomobile.be/imgcontrol/images_tmp/clients/moniteur/c680-d465/content/medias/images/news/34000/800/90/ford_mustang_mach_1__1_.jpg",
      },
    ],
    carDto: {
      name: " ",
      maker: "",
      model: "",
      partsCount: "",
      country: "",
      image: "",
    },
  },
  mutations: {
    Add_Car(state, payload) {
      state.cars.push({ ...payload });
    },
    Set_Cars(state, payload) {
      state.cars = payload;
    },
    Delete_Car() {},
  },
  actions: {
    async addCar({ commit }, payload) {
      let res = await axios.post(
        "http://192.168.43.34:8000/api/car/add",
        payload
      );
      console.log(res);
      commit("Add_Car", payload);
    },
    async getCars({ commit }) {
      let res = await axios.get("http://192.168.43.34:8000/api/car/all");
      commit("Set_Cars", res.data);
    },
    async deleteCar({ commit }, payload) {
      let res = await axios.delete(
        `http://192.168.43.34:8000/api/car/delete/${payload}`
      );
      console.log(res);
      commit("Delete_Car");
    },
  },
};
