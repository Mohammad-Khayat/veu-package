// import axios from "axios";
export default {
  state: {
    categories: [
      {
        id: 1,
        name: "قطع محرك",
        quantity: "35",
        image: "https://eskipaper.com/images/car-engine-2.jpg",
      },
      {
        id: 2,
        name: "قطع دوزان",
        quantity: "35",
        image:
          "https://lh3.googleusercontent.com/proxy/RwhNqQ-7O3sbyahhqsZi6W2LKMwEJo7kZtPpkpQX0pFaxr5z5lm8pzTeS-qDB0JH-_XGGpECVyNSJGJmxF064dL7C3hZrHdf3qEOi0g4DT2uejvxK_C6IA2-lJqEDYQ40jDD_wB0WxAm9e4QwvvlDhQ",
      },
      {
        id: 3,
        name: "قطع بودي",
        quantity: 20,
        image:
          "https://5.imimg.com/data5/LB/BO/CX/SELLER-30560611/panel-parts-500x500.jpg",
      },
    ],
    categoryDto: {
      name: "",
      image: null,
    },
  },
  mutations: {
    Add_Category(state, payload) {
      state.categories.unshift(payload);
    },
    Set_Categories() {},

    Update_Category() {},
    Delete_Category(state, payload) {
      state.categories = state.categories.filter((el) => el.id != payload.id);
    },
    Set_Category_Dto(state, payload) {
      state.categoryDto = payload;
    },
  },
  actions: {
    async addCategory({ commit }, payload) {
      // let res = await  axios.post('');
      commit("Add_Category", payload);
    },
    async getCategories({ commit }, payload) {
      // let res = await  axios.get('');
      commit("Set_Categories", payload);
    },
    async updateCategory({ commit }, payload) {
      commit("Update_Category", payload);
    },
    async deleteCategory({ commit }, payload) {
      commit("Delete_Category", payload);
    },
  },
};
