import type {Member} from '@/interfaces.ts';
import {defineStore} from 'pinia';

interface State {
  memberList: Map<number, Member>;
}

export const useMembersStore = defineStore('members', {
  state: (): State => {
    return {
      memberList: new Map<number, Member>()
    };
  },
  getters: {
    getById: (state) => {
      return (id: number): Member => {
        const member = state.memberList.get(id) as Member;
        return member;
      }
    },
    isMemberListEmpty: (state): boolean => {
      return state.memberList.size === 0;
    }
  },
  actions: {
    prepareMemberList(): void {
      // 빈 memberList 준비
      let memberList = new Map<number, Member>();
      // 세션 스토리지로부터 데이터 획득
      const memberListJSONStr = sessionStorage.getItem("memberList");
      // 세션 스토리지의 데이터가 비어 있지 않다면
      if (memberListJSONStr != undefined) {
        // JSON 문자열을 JSON 객체로 변환
        const memberListJSON = JSON.parse(memberListJSONStr);
        // JSON 객체를 기반으로 memberList 생성
        memberList = new Map<number, Member>(memberListJSON);
      }

      // store에 memberList 저장
      this.memberList = memberList;
    },
    insertMember(member: Member): void {
      // 상태의 memberList에 인자 회원 정보를 추가
      this.memberList.set(member.id, member);
      // 상태의 memberList를 JSON 문자열로 변환
      // Map 객체를 인자로 전달할 경우 그대로 사용이 불가능하여, JSON 문자열을 Map 객체로 복원
      const memberListJSONStr = JSON.stringify([...this.memberList]);
      // 세션 스토리지에 저장
      sessionStorage.setItem("memberList", memberListJSONStr);
    }
  }
})