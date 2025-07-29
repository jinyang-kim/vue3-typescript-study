import type {Member} from '@/interfaces.ts';
import {defineStore} from 'pinia';
import memberList from '@/views/member/MemberList.vue';

interface State {
  memberList: Map<number, Member>;
  isLoading: boolean;
}

let _database: IDBDatabase;
async function getDatabase(): Promise<IDBDatabase> {
  const promise = new Promise<IDBDatabase> (
      (resolve, reject): void => {
        // 데이터베이트 객체가 존재하는지 체크
        if(_database != undefined) {
          resolve(_database);
        } else {
          const request = window.indexedDB.open("asyncdb", 1);
          request.onupgradeneeded = (event) => {
            const target = event.target as IDBRequest;
            const database = target.result as IDBDatabase;
            database.createObjectStore("members", {keyPath: "id"});
          }
          request.onsuccess = (event) => {
            const target = event.target as IDBRequest;
            _database = target.result as IDBDatabase;
            resolve(_database);
          };
          request.onerror = (event) => {
            console.log("ERROR: DB를 열 수 없습니다", event);
            reject(new Error("ERROR: DB를 열 수 없습니다"));
          };
        }
      }
  );

  return promise;
}

export const useMembersStore = defineStore('members', {
  state: (): State => {
    return {
      memberList: new Map<number, Member>(),
      isLoading: true
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
    async prepareMemberList(): Promise<boolean> {
      // 데이터베이스 객체 취득
      const database = await getDatabase();
      const promise = new Promise<boolean> (
          (resolve, reject) => {
            // 트랜잭션 객체 취득
            const transaction = database.transaction("members", "readonly");
            // members 객체 취득
            const objectStore = transaction.objectStore("members");
            // 빈 memberList 생성
            const memberList = new Map<number, Member>();
            // members 객체 스토어의 모든 데이터 취득
            const request = objectStore.openCursor();
            // 데이터 취득이 성공한 경우의 처리를 등록
            request.onsuccess = (event) => {
              // 커서 객체 취득
              const target = event.target as IDBRequest;
              const cursor = target.result as IDBCursorWithValue;
              // 커서가 존재하면
              if (cursor) {
                // 커서부터 키 데이터 취득
                const id = cursor.key as number;
                // 커서부터 값 객체 취득
                const member = cursor.value as Member;
                // memberList에 저장
                memberList.set(id, member);
                // 다음 데이터에 같은 처리를 실행
                cursor.continue();
              }
            };
            // 트랜잭션이 성공한 경우의 처리
            transaction.oncomplete = () => {
              // store에 memberList 저장
              this.memberList = memberList;
              // store의 isLoading을 false로 변경
              this.isLoading = false;
              // 비동기 처리 성공 Promise 안의 반환값을 true로
              resolve(true);
            };
            // 트랜잭션이 실패한 경우의 처리를 등록
            transaction.onerror = (event) => {
              // 비동기처리 실패 에러 메시지를 저장
              console.log("ERROR: 데이터 취득에 실패", event);
              reject(new Error("ERROR: 데이터 취득에 실패"));
            };
          }
      )

      return promise;
    },
    async insertMember(member: Member): Promise<boolean> {
      const memberAdd: Member = {
        ...member
      };
      const database = await getDatabase();
      const promise = new Promise<boolean> (
          (resolve, reject) => {
            const transaction = database.transaction("members", "readwrite");
            const objectStore = transaction.objectStore("members");
            objectStore.put(memberAdd);
            transaction.oncomplete = () => {
              resolve(true);
            };
            transaction.onerror = (event) => {
              console.log("ERROR: 데이터 등록 실패", event);
              reject(new Error("ERROR: 데이터 등록 실패"));
            };
          }
      );

      return promise;
    }
  }
})