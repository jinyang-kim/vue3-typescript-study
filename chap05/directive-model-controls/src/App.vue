<script setup lang="ts">
import {ref} from 'vue';

const inputTextarea = ref("텍스트 영염 누자 입력 \n (개행 추가)");
const memberType = ref(1);
const memberTypeSelect = ref(1);
const isAgreed = ref(false);
const isAgreed01 = ref(0);
const selected0S = ref([]);
const selected0SSelect = ref([]);
</script>

<template>
  <div>
    <textarea v-model="inputTextarea"></textarea>
    <!--<textarea>{{inputTextarea}}</textarea>-->
    <br />
    <section>
      <label><input type="radio" name="memberType" value="1" v-model="memberType" />일반회원</label>
      <label><input type="radio" name="memberType" value="2" v-model="memberType" />특별회원</label>
      <label><input type="radio" name="memberType" value="3" v-model="memberType" />우수회원</label>
      <br />
      <p>선택된 라디오 버튼: {{memberType}}</p>
    </section>
    <br />
    <section>
      <select v-model="memberTypeSelect">
        <option value="1">일반회원</option>
        <option value="2">특별회원</option>
        <option value="3">우수회원</option>
      </select>
      <br />
      <p>선택된 리스트: {{memberTypeSelect}}</p>
    </section>
    <br />
    <section>
      <label><input type="checkbox" v-model="isAgreed" />동의</label>
      <p>동의 결과: {{isAgreed}}</p>
    </section>
    <br />
    <section>
      <label><input type="checkbox" v-model="isAgreed01" true-value="1" false-value="0" />동의</label>
      <p>동의 결과: {{isAgreed01}}</p>
    </section>
    <br />
    <section>
      <label><input type="checkbox" v-model="selected0S" value="1">macOS</label>
      <label><input type="checkbox" v-model="selected0S" value="2">Windows</label>
      <label><input type="checkbox" v-model="selected0S" value="3">Linux</label>
      <label><input type="checkbox" v-model="selected0S" value="4">iOS</label>
      <label><input type="checkbox" v-model="selected0S" value="5">Android</label>
      <p>선택된 OS: {{selected0S}}</p>
    </section>
    <br />
    <section>
      <select v-model="selected0SSelect">
        <option value="1">macOS</option>
        <option value="2">Windows</option>
        <option value="3">Linux</option>
        <option value="4">iOS</option>
        <option value="5">Android</option>
      </select>
      <p>선택된 OS: {{selected0SSelect}}</p>
    </section>
  </div>
</template>

<style scoped>

</style>