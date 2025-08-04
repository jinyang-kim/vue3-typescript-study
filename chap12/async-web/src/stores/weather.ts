import {defineStore} from 'pinia';
import axios from 'axios';

export interface City {
  name: string;
  q: string;
}

interface State {
  cityList: Map<string, City>;
  selectedCity: City;
  isLoading: boolean;
  weatherDescription: string;
}

export const useWeatherStore = defineStore('weather', {
  state: (): State => {
    return {
      cityList: new Map<string, City>(),
      selectedCity: {
        name: "",
        q: ""
      },
      isLoading: true,
      weatherDescription: ""
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
    async recieveWeatherInfo(id: string) {
      this.selectedCity = this.cityList.get(id) as City;
      // 접속 URL의 기본 부분 변수 준비
      // const weatherInfoUrl = "https://api.openweathermap.org/data/3.0/onecall";
      const weatherInfoUrl = "http://api.openweathermap.org/data/2.5/weather";
      // 쿼리 파라미터의 원 데이터가 되는 객체 리터럴을 준비
      const params: {
        lang: string,
        q: string,
        appId: string
      } = {
        lang: "ko",
        q: this.selectedCity.q,
        appId: "645ddea547c079c3f6b9787f34dedd53"
      }
      // 쿼리 파라미터 생성
      const queryParams = new URLSearchParams(params);
      // 실제 접속할 URL 생성
      const urlFull = `${weatherInfoUrl}?${queryParams}`;
      // axios 방식
      // URL에 비동기로 접속하여 데이터 취득
      const response = await axios.get(urlFull);
      console.log('response', response);
      // 취득한 데이터를 비동기로 JSON으로 변환
      const weatherInfoJSON = response.data;
      console.log('weatherInfoJSON', weatherInfoJSON);
      // fetch 방식
      // // URL에 비동기로 접속하여 데이터 취득
      // const response = await fetch(urlFull);
      // console.log('response', response);
      // // 취득한 데이터를 비동기로 JSON으로 변환
      // const weatherInfoJSON = await response.json();
      // console.log('weatherInfoJSON', weatherInfoJSON);
      // 날씨 정보 JSON으로부터 날씨 데이터를 취득하여 저장
      const weatherArray = weatherInfoJSON.weather;
      const weather = weatherArray[0];
      this.weatherDescription = weather.description;
      // isLoading을 false로 변환
      this.isLoading = false;
    }
  }
})