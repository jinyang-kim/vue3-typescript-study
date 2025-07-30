import {defineStore} from 'pinia';

export interface City {
  name: string;
  q: string;
}

interface State {
  cityList: Map<string, City>;
}

export const useWeatherStore = defineStore('weather', {
  state: (): State => {
    return {
      cityList: new Map<string, City>(),
    };
  },
  getters: {

  },
  actions: {
    prepareCityList() {
      this.cityList.set("Seoul",
          {
            name: "서울",
            q: "Seoul"
          });
      this.cityList.set("Daejeon",
          {
            name: "대전",
            q: "Daejeon"
          });
      this.cityList.set("Busan",
          {
            name: "부산",
            q: "Busan"
          });
    },
  }
})