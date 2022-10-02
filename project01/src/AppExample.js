function AppExample(){

    //1. 사용자에게 이름 입력받기
    //prompt('이름을 말해주세요!')
    let name = prompt('이름을 입력하세요');
    

    //2. 현재 날짜 가져오기
    //현재 몇 월?! => getMonth()
    let day = new Date();
    let date=day.toLocaleDateString();
    let month = day.getMonth()+1;//월, 0~11까지 나오기 때문에 +1 해줘야 함
    console.log('이번 달은', month);
    let year=day.getFullYear();//년

    console.log('오늘의 날짜는', date);


    //3.
    //조건1) 3~5월: 봄
    //조건2) 6~8월: 여름
    //조건3) 9~11월: 가을
    //조건4) 12,1,2월: 겨울
    let season='';
switch(month){
    case 12:
    case 1:
    case 2:
        season='겨울';
    break;

    case 3:
    case 4:
    case 5:
        season='봄';
    break;

    case 6:
    case 7:
    case 8:
        season='여름';
    break;

    case 9:
    case 10:
    case 11:
        season='가을';
    break;
 
}

    //결과창
    //2022.9.27
    //<hr></hr>
    //000님 지금은 가을입니다. 좋은 하루보내세요!

    return(
        <>
        <h2>{date}</h2>
    <hr></hr>
    <h4>{name}님 지금은 {season}입니다. 좋은 하루 보내세요!</h4>
        </>
    )
}

export default AppExample;