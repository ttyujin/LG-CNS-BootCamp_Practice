import { use } from "react";

let username: string="탁유진";
let age: number=27;
let ismarraige: boolean=false;
//변수에 타입이 있다.

console.log(`debug>>>>typescript username`, typeof username);
console.log(`debug>>>>typescript age`, typeof age);
console.log(`debug>>>>typescript ismarraige`, typeof ismarraige);

//npx tsc --noEmit -> 스크립트 만들지 말라, 타입 검사만 수행을 하라는 명령어
//node test-typescript.js

let ary:string[]=["탁유진","나유성","임찬혁"];
//[]안에 객체들이 타입들을 가져야 하는것이 중요하다
//그래서 타입스크립트에서는 객체 타입을 선언하고 변수의 타입으로 사용해야함 이때 interface 명세를 사용한다.
//여러개를 받을 때는 interface가 필요한데, 타입이 필요하다.
interface User{
    email:string;
    password:string;
}

const user:User={
    email:'tyujin@naver.com',
    password:'12344567'
}
console.log(`debug>>>>user`, user);

let userAry: User[]=[user];
let userAry: User[]=[user,user,user,user]; //가능하다


function showMessage(name:string):string{
    return `${name}님 환영합니다`;
}
console.log(`debug>>>>user`, showMessage('tyujin'));

let httpstatus:string|number;
httpstatus="success";
httpstatus=404;
console.log(`debug>>>>user`, httpstatus);
