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
    }
  },
  actions: {
    initList(): void {
      this.memberList.set(33456, {id: 33456, name: "영희", email: "box@example.com", points: 35, note: "신규 가입 특전"});
      this.memberList.set(47783, {id: 47783, name: "철수", email: "mue@example.com", points: 53});
    },
    addMember(member: Member): void {
      this.memberList.set(member.id, member);
    }
  }
})