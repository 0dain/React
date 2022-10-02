import './App.css';
import Member from './Components/Member';

// 팀원을 소개하는 페이지를 만들어보자!
    // 단, component 와 props를 이용해서 만들 것
    // 조건
    // 1) Member.js 라는 컴포넌트를 이용할 것
    // 2) 스타일은 객체 형태로 삽입할 것

function AppExample() {
  return (
    <div>
       <Member team="소연팀" name="나소연"></Member>
       {/* <Member team="소연팀" name="나소연"></Member> 얘한테만 스타일을 주고 싶다면? 
       leader={leader}를 넣어주고 Member.js를 가서 if문으로 leader가 있으면 style줘라! 이렇게 써야 함
       */}
       <Member team="소연팀" name="임다인"></Member>
       <Member team="소연팀" name="유성용"></Member>
       <Member team="소연팀" name="박민욱"></Member>
    </div>
  )
}

export default AppExample

