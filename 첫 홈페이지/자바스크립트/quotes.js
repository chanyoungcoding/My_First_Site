const quotes = [
    {
        quote:"인생에서 가장 의미없이 보낸 날은 웃지 않고 보낸 날이다.",
        author: "E. E. 커밍스",
    },
    {
        quote: "성공한 사람보다는 가치 있는 사람이 되려 하라.",
        author: "알버트 아인슈타인",
    },
    {
        quote: "성공한 사람이 될 수 있는데 왜 평범한 이에 머무르려 하는가?",
        author: "베르톨트 브레히트",
    },
    {
        quote: "성공은 대개 그를 좇을 겨를도 없이 바쁜 사람에게 온다.",
        author: "헨리 데이비드 소로우",
    },
    {
        quote: "목표에 도달했을 때 돌아서지 마라.",
        author: "퍼블릴리어스 사이러스",
    },
    {
        quote: "늘 명심하라. 성공하겠다는 너 자신의 결심이 다른 어떤 것보다 중요하다는 것을.",
        author: "에이브러햄 링컨",
    },
    {
        quote: "멈추지 말고 한 가지 목표에 매진하라. 그것이 성공의 비결이다.",
        author: "안나 파블로바",
    },
    {
        quote: "어떤 것이 당신이 계획대로 되지 않는 다고 해서 그것이 불필요한 것은 아니다.",
        author: "토마스 A. 에디슨",
    },
    {
        quote: "가장 위대한 영광은 한 번도 실패하지 않음이 아니라 실패할 때마다 다시 일어서는 데에 있다.",
        author: "공자",
    },
    {
        quote: "인생에 필요한 것은 무지와 확신 뿐이다. 그러면 성공은 확실하다.",
        author: "마크 트웨인",
    },
];

const quote = document.querySelector(".quote span:first-child");
const author = document.querySelector(".quote span:last-child");

const TodaysQuote = quotes[Math.floor(Math.random() * quotes.length)];


quote.innerText = TodaysQuote.quote;
author.innerText = TodaysQuote.author;