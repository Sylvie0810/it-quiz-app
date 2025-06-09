// 퀴즈 데이터
const termsData = [
    {
        term: "Interface",
        definition: "두 시스템, 장치, 소프트웨어, 또는 사람과 기계 사이에서 정보를 주고받을 수 있도록 해주는 접점이자, 소통을 위한 규칙 또는 매개체"
    },
    {
        term: "API (Application Programming Interface)",
        definition: "응용 프로그램이 서로 소통하고 기능을 사용할 수 있도록 정의된 인터페이스. 프로그램과 프로그램 사이에서 서로 데이터를 주고받고, 기능을 요청하거나 결과를 전달할 수 있도록 정해진 규칙과 방법"
    },
    {
        term: "MCP (Model Context Protocol)",
        definition: "AI 모델이 외부 도구, 데이터, 시스템과 표준화된 방식으로 연결될 수 있도록 해주는 오픈소스 프로토콜"
    },
    {
        term: "Protocol",
        definition: "두 개 이상의 시스템이 서로 통신할 때 반드시 따라야 하는 규칙이나 약속. 정보를 주고받을 때 어떤 형식으로 데이터를 전달하고, 어떤 절차로 요청과 응답을 처리할지 정해진 표준화된 방법"
    },
    {
        term: "IDE (Integrated Development Environment)",
        definition: "소프트웨어 개발에 필요한 다양한 도구를 하나로 통합한 개발 환경. 코드 편집기, 컴파일러, 디버거, 빌드 자동화 도구 등을 하나의 애플리케이션 안에 통합한 소프트웨어"
    },
    {
        term: "Vive Coding",
        definition: "인공지능이 자연어 설명을 바탕으로 코드를 자동 생성하는 새로운 프로그래밍 방식. AI와 협업하여 자연어로 원하는 기능을 설명하면, AI가 실제 코드를 자동으로 생성해주는 개발 방식"
    },
    {
        term: "Framework",
        definition: "소프트웨어 개발에 필요한 구조와 규칙을 제공하는 뼈대이자 기본 틀. 프로그램의 흐름을 프레임워크가 주도하며, 개발자는 그 안에 필요한 코드를 채워 넣는 방식으로 개발"
    },
    {
        term: "Library",
        definition: "개발에 자주 쓰이는 함수나 도구를 모아둔 코드 집합. 개발자가 원하는 기능을 골라서 직접 활용하는 방식"
    },
    {
        term: "HTML",
        definition: "웹페이지의 구조와 내용을 정의하는 마크업 언어. 제목, 문단, 이미지, 표, 링크 등 콘텐츠의 뼈대를 정의"
    },
    {
        term: "CSS",
        definition: "웹페이지의 디자인과 레이아웃을 담당하는 스타일 시트 언어. HTML로 만들어진 구조에 디자인과 스타일을 입히는 언어"
    },
    {
        term: "JavaScript",
        definition: "웹페이지에 동적인 기능을 추가하는 프로그래밍 언어. 버튼 클릭, 애니메이션, 데이터 갱신 등 사용자의 행동에 반응하는 다양한 기능을 구현"
    },
    {
        term: "React",
        definition: "사용자 인터페이스를 효율적으로 만들기 위한 JavaScript 기반 라이브러리. 컴포넌트 기반 아키텍처로 UI를 독립적인 작은 단위로 쪼개어 개발"
    },
    {
        term: "Component",
        definition: "UI의 한 부분을 담당하는 작은 코드 조각. 독립적으로 동작하고, 필요할 때마다 여러 곳에서 재사용할 수 있음"
    },
    {
        term: "Reactive Component",
        definition: "데이터 변경에 따라 자동으로 UI가 업데이트되는 컴포넌트. 반응형 프로그래밍 개념을 기반으로 하며, 데이터 흐름과 변경 사항의 전파를 처리"
    },
    {
        term: "Node.js",
        definition: "자바스크립트로 서버(백엔드) 애플리케이션을 개발할 수 있게 해주는 런타임 환경"
    },
    {
        term: "Next.js",
        definition: "React를 기반으로 한 오픈소스 웹 프레임워크. React로 만든 웹 애플리케이션을 더 쉽고 효율적으로 개발할 수 있게 도와주는 프레임워크"
    },
    {
        term: "Rendering",
        definition: "컴퓨터가 데이터나 코드로 작성된 내용을 화면에 시각적으로 표현하는 과정. 웹에서는 HTML, CSS, JavaScript 등으로 작성된 코드가 브라우저에 의해 해석되어 웹페이지로 바뀌는 과정"
    },
    {
        term: "Routing",
        definition: "데이터나 네트워크 트래픽이 목적지까지 최적의 경로로 전달되도록 경로를 결정하고 지정하는 과정. 웹에서는 사용자가 요청한 URL에 따라 어떤 화면을 보여줄지 결정하는 과정"
    },
    {
        term: "Wireframe",
        definition: "디지털 제품의 구조와 레이아웃을 단순화된 형태로 시각화한 설계도. 선, 사각형, 원 등 기본적인 도형과 텍스트만을 사용해 화면 구성 요소의 위치와 정보 구조를 표현"
    },
    {
        term: "Prototype",
        definition: "실제 제품과 유사하게 동작하는 시뮬레이션 버전. 사용자 인터랙션과 화면 전환 등 실제 사용성을 테스트할 수 있도록 구현한 샘플"
    },
    {
        term: "Compile",
        definition: "사람이 이해할 수 있는 소스 코드를 컴퓨터가 이해할 수 있는 기계어로 번역하는 과정"
    },
    {
        term: "실행(Execution)",
        definition: "컴파일된 프로그램을 실제로 컴퓨터에서 동작시키는 과정. 실행 파일을 메모리에 로드하고, CPU가 명령어를 해석·수행하여 프로그램이 설계된 작업을 처리"
    },
    {
        term: "Hosting",
        definition: "웹사이트, 애플리케이션 등 다양한 서비스를 인터넷에 공개하고, 외부에서 접근할 수 있도록 서버의 공간이나 기능을 임대해 주는 서비스"
    },
    {
        term: "파싱(Parsing)",
        definition: "입력된 데이터를 분석하여 의미 있는 구조로 변환하는 과정. 데이터를 해석하고 원하는 형식이나 구조로 가공하는 작업"
    },
    {
        term: "크롤링",
        definition: "웹에서 데이터를 수집하는 과정"
    },
    {
        term: "스크래핑",
        definition: "데이터를 수집·가공하는 전체 과정(크롤링+파싱 포함)"
    },
    {
        term: "객체(Object)",
        definition: "여러 데이터(속성)와 그 데이터를 다루는 기능(메서드)을 하나로 묶은 단위"
    },
    {
        term: "UI (User Interface)",
        definition: "사용자가 앱이나 웹사이트와 상호작용하는 시각적 요소. 버튼, 메뉴, 입력 폼 등이 포함"
    },
    {
        term: "리팩토링 (Refactoring)",
        definition: "코드의 외부 동작은 그대로 유지하면서 내부 구조를 개선하는 과정. 프로그램이 원래 하던 기능은 그대로 두고, 코드의 가독성이나 설계, 구조를 더 좋게 만드는 것"
    },
    {
        term: "토큰",
        definition: "텍스트를 분석할 때의 최소 단위. 입력된 문자열을 분석할 때 의미 있는 가장 작은 단위로 나눈 조각"
    },
    {
        term: "트리",
        definition: "데이터를 계층적으로 표현하는 자료구조로, 여러 개의 노드가 연결되어 나무처럼 뻗어 있는 구조"
    },
    {
        term: "CDN (Content Delivery Network)",
        definition: "전 세계 여러 지역에 분산된 서버 네트워크를 통해 웹 콘텐츠를 사용자와 가까운 곳에서 빠르고 효율적으로 전달하는 시스템"
    },
    {
        term: "PWA (Progressive Web App)",
        definition: "웹사이트를 앱처럼 설치하고, 오프라인에서도 사용할 수 있으며, 푸시 알림 등 네이티브 앱의 주요 기능을 제공하는 최신 웹 애플리케이션 기술"
    },
    {
        term: "SDK (Software Development Kit)",
        definition: "소프트웨어를 개발할 때 필요한 다양한 도구와 리소스가 모여 있는 개발 키트. 라이브러리, API, IDE, 문서, 디버거 등이 포함된 패키지"
    }
];

// 퀴즈 상태
let currentQuizType = '';
let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let userAnswers = [];
let answered = false;
let questionStates = []; // 각 문제의 상태를 저장

// DOM 요소
const homeScreen = document.getElementById('home-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');
const dictionaryScreen = document.getElementById('dictionary-screen');
const questionTitle = document.getElementById('question-title');
const questionContent = document.getElementById('question-content');
const answerOptions = document.getElementById('answer-options');
const feedback = document.getElementById('feedback');
const submitBtn = document.getElementById('submit-btn');
const nextBtn = document.getElementById('next-btn');
const prevBtn = document.getElementById('prev-btn');
const progressFill = document.getElementById('progress-fill');
const progressText = document.getElementById('progress-text');
const homeBtn = document.getElementById('home-btn');
const restartBtn = document.getElementById('restart-btn');
const homeResultBtn = document.getElementById('home-result-btn');

// 사전 관련 DOM 요소
const homeDictBtn = document.getElementById('home-dict-btn');
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const searchSuggestions = document.getElementById('search-suggestions');
const dictionaryResults = document.getElementById('dictionary-results');
const searchResults = document.getElementById('search-results');
const allTerms = document.getElementById('all-terms');
const resultsCount = document.getElementById('results-count');
const resultsList = document.getElementById('results-list');
const termsList = document.getElementById('terms-list');
const termTags = document.querySelectorAll('.term-tag');
const sortBtns = document.querySelectorAll('.sort-btn');

// 접근성 컨트롤 요소는 함수 내에서 동적으로 가져옴

// 접근성 설정
let isDarkMode = localStorage.getItem('darkMode') === 'true' || 
                 window.matchMedia('(prefers-color-scheme: dark)').matches;
let isMotionReduced = localStorage.getItem('motionReduced') === 'true' || 
                      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// 사전 기능 관련 변수
let searchTimeout;
let currentSortMode = 'alphabetical';

// 용어 아이콘 및 카테고리 매핑
function getTermIcon(term) {
    const iconMap = {
        'Interface': '🔌',
        'API': '🔗',
        'MCP': '🤖',
        'Protocol': '📋',
        'IDE': '💻',
        'Vive Coding': '🚀',
        'Framework': '🏗️',
        'Library': '📚',
        'HTML': '🌐',
        'CSS': '🎨',
        'JavaScript': '⚡',
        'React': '⚛️',
        'Component': '🧩',
        'Reactive Component': '🔄',
        'Node.js': '🟢',
        'Next.js': '⏭️',
        'Rendering': '🖼️',
        'Routing': '🗺️',
        'Wireframe': '📐',
        'Prototype': '🎨',
        'Compile': '⚙️',
        '실행(Execution)': '▶️',
        'Hosting': '☁️',
        '파싱(Parsing)': '🔍',
        '크롤링': '🕷️',
        '스크래핑': '📊',
        '객체(Object)': '📦',
        'UI': '🖥️',
        '리팩토링': '🔧',
        '토큰': '🎯',
        '트리': '🌳',
        'CDN': '🌍',
        'PWA': '📱',
        'SDK': '🛠️'
    };
    return iconMap[term] || '';
}

function getTermCategory(term) {
    const categoryMap = {
        'Interface': 'concepts',
        'API': 'concepts',
        'MCP': 'concepts',
        'Protocol': 'concepts',
        'IDE': 'tools',
        'Vive Coding': 'concepts',
        'Framework': 'concepts',
        'Library': 'concepts',
        'HTML': 'languages',
        'CSS': 'languages',
        'JavaScript': 'languages',
        'React': 'frameworks',
        'Component': 'concepts',
        'Reactive Component': 'concepts',
        'Node.js': 'runtime',
        'Next.js': 'frameworks',
        'Rendering': 'concepts',
        'Routing': 'concepts',
        'Wireframe': 'design',
        'Prototype': 'design',
        'Compile': 'concepts',
        '실행(Execution)': 'concepts',
        'Hosting': 'deployment',
        '파싱(Parsing)': 'concepts',
        '크롤링': 'concepts',
        '스크래핑': 'concepts',
        '객체(Object)': 'concepts',
        'UI': 'design',
        '리팩토링': 'concepts',
        '토큰': 'concepts',
        '트리': 'concepts',
        'CDN': 'deployment',
        'PWA': 'concepts',
        'SDK': 'tools'
    };
    
    const categoryNames = {
        'concepts': '개념',
        'languages': '언어',
        'frameworks': '프레임워크',
        'tools': '도구',
        'runtime': '런타임',
        'design': '디자인',
        'deployment': '배포'
    };
    
    const category = categoryMap[term] || 'concepts';
    return categoryNames[category];
}

// 접근성 초기화
function initializeAccessibility() {
    // 다크모드 설정
    const themeToggle = document.getElementById('theme-toggle');
    if (isDarkMode) {
        document.documentElement.setAttribute('data-theme', 'dark');
        if (themeToggle) themeToggle.textContent = '☀️';
    } else {
        document.documentElement.removeAttribute('data-theme');
        if (themeToggle) themeToggle.textContent = '🌙';
    }
    
    // 모션 감소 설정 (간소화 - 토글 버튼 제거됨)
    if (isMotionReduced) {
        document.documentElement.setAttribute('data-motion', 'reduced');
    } else {
        document.documentElement.removeAttribute('data-motion');
    }
}

// 다크모드 토글
function toggleTheme() {
    isDarkMode = !isDarkMode;
    localStorage.setItem('darkMode', isDarkMode);
    
    const themeToggle = document.getElementById('theme-toggle');
    if (isDarkMode) {
        document.documentElement.setAttribute('data-theme', 'dark');
        if (themeToggle) themeToggle.textContent = '☀️';
    } else {
        document.documentElement.removeAttribute('data-theme');
        if (themeToggle) themeToggle.textContent = '🌙';
    }
}

// 모션 감소 토글 (함수 제거됨 - 토글 버튼이 제거되어 더 이상 사용되지 않음)

// 🎯 UX 개선: 문제 유형별 제목과 서브타이틀
function getQuestionTypeTitle(type) {
    switch (type) {
        case 'multiple-choice':
            return '객관식 문제';
        case 'short-answer':
            return '단답형 문제';
        case 'true-false':
            return '참/거짓 문제';
        case 'application':
            return '응용 문제';
        default:
            return '퀴즈';
    }
}

function getQuestionSubtitle(type) {
    switch (type) {
        case 'multiple-choice':
            return '다음 정의에 해당하는 용어를 선택하세요';
        case 'short-answer':
            return '다음 정의에 해당하는 용어를 입력하세요';
        case 'true-false':
            return '용어와 정의가 올바르게 연결되었는지 판단하세요';
        case 'application':
            return '실제 상황에서 어떤 용어가 적용되는지 입력하세요';
        default:
            return '';
    }
}

// 퀴즈 유형별 제목 (기존 호환성을 위해 유지)
const quizTitles = {
    'multiple-choice': '객관식 문제',
    'short-answer': '단답형 문제',
    'true-false': '참/거짓 문제',
    'application': '응용 문제'
};

// 유틸리티 함수
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

function getRandomItems(array, count) {
    const shuffled = shuffleArray(array);
    return shuffled.slice(0, count);
}

function normalizeText(text) {
    return text.toLowerCase().trim().replace(/[()]/g, '');
}

// 고급 답안 검증 함수 - 영어/한글 답변 모두 인정
function isAnswerCorrect(userAnswer, correctAnswer, fullTerm) {
    // 기본 정규화
    const normalizedUser = normalizeText(userAnswer);
    const normalizedCorrect = normalizeText(correctAnswer);
    const normalizedFull = fullTerm ? normalizeText(fullTerm) : '';
    
    // 🔍 디버깅: 정규화된 값들 출력
    console.log('🔍 답안 검증 디버깅:', {
        원본사용자답안: userAnswer,
        원본정답: correctAnswer,
        원본전체용어: fullTerm,
        정규화사용자답안: normalizedUser,
        정규화정답: normalizedCorrect,
        정규화전체용어: normalizedFull
    });
    
    // 1. 정확한 답안 매칭
    if (normalizedUser === normalizedCorrect) {
        console.log('✅ 1번 체크: 정확한 답안 매칭 성공');
        return true;
    }
    
    // 2. 전체 용어 매칭 (예: "API (Application Programming Interface)")
    if (normalizedFull && normalizedUser === normalizedFull) {
        console.log('✅ 2번 체크: 전체 용어 매칭 성공');
        return true;
    }
    
    // 3. 괄호 앞부분만 매칭 (예: "API")
    if (normalizedFull && normalizedUser === normalizedFull.split(' (')[0]) {
        console.log('✅ 3번 체크: 괄호 앞부분 매칭 성공');
        return true;
    }
    
    // 4. 한글 부분만 추출해서 매칭 (예: "Parsing(파싱)" -> "파싱")
    const koreanMatch = normalizedCorrect.match(/[가-힣]+/);
    const fullKoreanMatch = normalizedFull.match(/[가-힣]+/);
    if (koreanMatch && normalizedUser === koreanMatch[0]) {
        console.log('✅ 4-1번 체크: 한글 부분 매칭 성공');
        return true;
    }
    if (fullKoreanMatch && normalizedUser === fullKoreanMatch[0]) {
        console.log('✅ 4-2번 체크: 전체용어 한글 부분 매칭 성공');
        return true;
    }
    
    // 5. 영어 부분만 추출해서 매칭 (예: "Parsing(파싱)" -> "parsing")
    const englishMatch = normalizedCorrect.match(/[a-z]+/);
    const fullEnglishMatch = normalizedFull.match(/[a-z]+/);
    if (englishMatch && normalizedUser === englishMatch[0]) {
        console.log('✅ 5-1번 체크: 영어 부분 매칭 성공');
        return true;
    }
    if (fullEnglishMatch && normalizedUser === fullEnglishMatch[0]) {
        console.log('✅ 5-2번 체크: 전체용어 영어 부분 매칭 성공');
        return true;
    }
    
    // 6. 영어-한글 매핑 테이블
    const termMappings = {
        // 영어 -> 한글
        'api': ['api', '에이피아이', '아피'],
        'html': ['html', '에이치티엠엘', 'HTML'],
        'css': ['css', '씨에스에스', 'CSS'],
        'javascript': ['javascript', '자바스크립트', 'js'],
        'react': ['react', '리액트'],
        'node.js': ['node.js', 'nodejs', '노드제이에스', '노드'],
        'framework': ['framework', '프레임워크'],
        'library': ['library', '라이브러리'],
        'component': ['component', '컴포넌트'],
        'interface': ['interface', '인터페이스'],
        'protocol': ['protocol', '프로토콜'],
        'routing': ['routing', '라우팅'],
        'rendering': ['rendering', '렌더링'],
        'compile': ['compile', '컴파일'],
        'hosting': ['hosting', '호스팅'],
        'parsing': ['parsing', '파싱', 'parsing파싱', '파싱parsing'],
        'refactoring': ['refactoring', '리팩토링'],
        'token': ['token', '토큰'],
        'tree': ['tree', '트리'],
        'cdn': ['cdn', '시디엔'],
        'pwa': ['pwa', '피더블유에이'],
        'sdk': ['sdk', '에스디케이'],
        'ide': ['ide', '아이디이'],
        'ui': ['ui', '유아이', '사용자인터페이스', '사용자 인터페이스'],
        'mcp': ['mcp', '엠씨피'],
        'next.js': ['next.js', 'nextjs', '넥스트제이에스', '넥스트'],
        'wireframe': ['wireframe', '와이어프레임'],
        'prototype': ['prototype', '프로토타입'],
        'object': ['object', '객체'],
        'execution': ['execution', '실행'],
        'crawling': ['crawling', '크롤링'],
        'scraping': ['scraping', '스크래핑'],
        
        // 한글 -> 영어도 지원
        '에이피아이': ['api', '에이피아이', '아피'],
        '자바스크립트': ['javascript', '자바스크립트', 'js'],
        '리액트': ['react', '리액트'],
        '프레임워크': ['framework', '프레임워크'],
        '라이브러리': ['library', '라이브러리'],
        '컴포넌트': ['component', '컴포넌트'],
        '인터페이스': ['interface', '인터페이스'],
        '프로토콜': ['protocol', '프로토콜'],
        '라우팅': ['routing', '라우팅'],
        '렌더링': ['rendering', '렌더링'],
        '컴파일': ['compile', '컴파일'],
        '호스팅': ['hosting', '호스팅'],
        '파싱': ['parsing', '파싱', 'parsing파싱', '파싱parsing'],
        '리팩토링': ['refactoring', '리팩토링'],
        '토큰': ['token', '토큰'],
        '트리': ['tree', '트리'],
        '객체': ['object', '객체'],
        '실행': ['execution', '실행'],
        '크롤링': ['crawling', '크롤링'],
        '스크래핑': ['scraping', '스크래핑']
    };
    
    // 7. 매핑 테이블을 통한 검증
    console.log('🔍 매핑 테이블 검증 시작...');
    for (const [key, variants] of Object.entries(termMappings)) {
        if (variants.includes(normalizedUser)) {
            console.log(`🔍 사용자 답안 "${normalizedUser}"이 "${key}" 그룹에서 발견됨:`, variants);
            // 사용자 답안이 매핑 테이블에 있으면, 정답도 같은 그룹에 있는지 확인
            if (variants.includes(normalizedCorrect) || 
                variants.includes(normalizedFull) || 
                variants.includes(normalizedFull.split(' (')[0])) {
                console.log('✅ 7번 체크: 매핑 테이블 매칭 성공');
                return true;
            } else {
                console.log(`❌ 정답 "${normalizedCorrect}", 전체용어 "${normalizedFull}"이 같은 그룹에 없음`);
            }
        }
    }
    
    // 8. 동적 영어-한글 변환 패턴 매칭
    // 영어 용어를 한글로 입력하는 경우들을 감지
    const dynamicPatterns = [
        // 일반적인 영어 -> 한글 발음 패턴
        { pattern: /api/i, variants: ['api', '에이피아이', '아피', 'a.p.i'] },
        { pattern: /ui/i, variants: ['ui', '유아이', 'u.i'] },
        { pattern: /cdn/i, variants: ['cdn', '시디엔', 'c.d.n'] },
        { pattern: /sdk/i, variants: ['sdk', '에스디케이', 's.d.k'] },
        { pattern: /ide/i, variants: ['ide', '아이디이', 'i.d.e'] },
        { pattern: /css/i, variants: ['css', '씨에스에스', 'c.s.s'] },
        { pattern: /html/i, variants: ['html', '에이치티엠엘', 'h.t.m.l'] },
        { pattern: /xml/i, variants: ['xml', '엑스엠엘', 'x.m.l'] },
        { pattern: /sql/i, variants: ['sql', '에스큐엘', 's.q.l'] },
        { pattern: /php/i, variants: ['php', '피에이치피', 'p.h.p'] },
        { pattern: /npm/i, variants: ['npm', '엔피엠', 'n.p.m'] },
        { pattern: /git/i, variants: ['git', '깃', 'g.i.t'] },
        { pattern: /url/i, variants: ['url', '유알엘', 'u.r.l'] },
        { pattern: /ftp/i, variants: ['ftp', '에프티피', 'f.t.p'] },
        { pattern: /tcp/i, variants: ['tcp', '티씨피', 't.c.p'] },
        { pattern: /http/i, variants: ['http', '에이치티티피', 'h.t.t.p'] },
        { pattern: /https/i, variants: ['https', '에이치티티피에스', 'h.t.t.p.s'] }
    ];
    
    // 동적 패턴 검사
    for (const { pattern, variants } of dynamicPatterns) {
        if (pattern.test(normalizedCorrect) || pattern.test(normalizedUser)) {
            if (variants.some(v => v === normalizedUser) && 
                variants.some(v => v === normalizedCorrect || normalizedFull.includes(v))) {
                return true;
            }
        }
    }
    
         // 9. 부분 매칭 (최소 3글자 이상, 80% 이상 일치)
     if (normalizedUser.length >= 3 && normalizedCorrect.length >= 3) {
         const shorter = normalizedUser.length < normalizedCorrect.length ? normalizedUser : normalizedCorrect;
         const longer = normalizedUser.length < normalizedCorrect.length ? normalizedCorrect : normalizedUser;
         
         if (longer.includes(shorter) && shorter.length / longer.length >= 0.8) {
             console.log('✅ 9번 체크: 부분 매칭 성공');
             return true;
         }
     }
     
     // 10. 한영 혼용 표기 허용 (예: "HTTP프로토콜", "API인터페이스")
    const cleanUser = normalizedUser.replace(/[^a-z가-힣0-9]/g, '');
    const cleanCorrect = normalizedCorrect.replace(/[^a-z가-힣0-9]/g, '');
    const cleanFull = normalizedFull.replace(/[^a-z가-힣0-9]/g, '');
    
         if (cleanUser === cleanCorrect || cleanUser === cleanFull) {
         console.log('✅ 10번 체크: 한영 혼용 표기 매칭 성공');
         return true;
     }
     
     console.log('❌ 모든 검증 실패 - 오답 처리');
     return false;
}

// 문제 생성 함수들
function generateMultipleChoiceQuestions() {
    const questions = [];
    const selectedTerms = getRandomItems(termsData, 15);
    
    selectedTerms.forEach(term => {
        // 비슷한 카테고리나 관련된 용어들을 우선 선택
        const category = getTermCategory(term.term);
        const relatedTerms = termsData.filter(t => 
            t.term !== term.term && 
            (getTermCategory(t.term) === category || 
             t.term.includes('(') === term.term.includes('(') ||
             (category === '프레임워크' && getTermCategory(t.term) === '언어') ||
             (category === '도구' && getTermCategory(t.term) === '플랫폼'))
        );
        
        let wrongOptions;
        if (relatedTerms.length >= 3) {
            wrongOptions = getRandomItems(relatedTerms, 3).map(t => t.term);
        } else {
            // 관련 용어가 부족하면 일반 용어로 채움
            const remainingTerms = termsData.filter(t => t.term !== term.term);
            wrongOptions = [
                ...relatedTerms.map(t => t.term),
                ...getRandomItems(remainingTerms.filter(t => !relatedTerms.some(rt => rt.term === t.term)), 3 - relatedTerms.length).map(t => t.term)
            ];
        }
        
        const options = shuffleArray([term.term, ...wrongOptions]);
        const icon = getTermIcon(term.term);
        
        questions.push({
            type: 'multiple-choice',
            question: `<div class="definition-box">
                <div class="definition-text">${term.definition}</div>
            </div>`,
            options: options,
            correctAnswer: term.term,
            explanation: `${term.term}은(는) ${term.definition}`
        });
    });
    
    return questions;
}

function generateShortAnswerQuestions() {
    const questions = [];
    const selectedTerms = getRandomItems(termsData, 12);
    
    selectedTerms.forEach(term => {
        const icon = getTermIcon(term.term);
        const category = getTermCategory(term.term);
        const termName = term.term.split(' (')[0]; // 괄호 안의 설명 제거
        
        questions.push({
            type: 'short-answer',
            question: `<div class="category-hint">카테고리: ${category}</div>
            <div class="definition-box">
                <div class="definition-text">${term.definition}</div>
            </div>`,
            correctAnswer: termName, // 짧은 형태의 용어명을 정답으로 설정
            fullTerm: term.term, // 전체 용어는 별도로 보관
            explanation: `정답은 "${termName}"입니다.\n\n${term.definition}`
        });
    });
    
    return questions;
}

function generateTrueFalseQuestions() {
    const questions = [];
    const selectedTerms = getRandomItems(termsData, 10);
    
    // 정답 문제
    selectedTerms.forEach(term => {
        const icon = getTermIcon(term.term);
        
        questions.push({
            type: 'true-false',
            question: `<div class="term-definition-pair">
                <div class="term-label">
                    <strong>용어:</strong> ${term.term}
                </div>
                <div class="definition-label">
                    <strong>정의:</strong> ${term.definition}
                </div>
            </div>`,
            correctAnswer: true,
            explanation: `정답입니다. ${term.term}은(는) ${term.definition}`
        });
    });
    
    // 오답 문제 - 비슷한 카테고리의 정의를 사용
    const wrongTerms = getRandomItems(termsData, 5);
    wrongTerms.forEach(term => {
        const category = getTermCategory(term.term);
        const relatedTerms = termsData.filter(t => 
            t.term !== term.term && 
            getTermCategory(t.term) === category
        );
        
        const wrongDefinition = relatedTerms.length > 0 
            ? getRandomItems(relatedTerms, 1)[0].definition
            : getRandomItems(termsData.filter(t => t.term !== term.term), 1)[0].definition;
        
        const icon = getTermIcon(term.term);
        
        questions.push({
            type: 'true-false',
            question: `<div class="term-definition-pair">
                <div class="term-label">
                    <strong>용어:</strong> ${term.term}
                </div>
                <div class="definition-label">
                    <strong>정의:</strong> ${wrongDefinition}
                </div>
            </div>`,
            correctAnswer: false,
            explanation: `틀렸습니다. ${term.term}의 올바른 정의는: ${term.definition}`
        });
    });
    
    return shuffleArray(questions);
}

function generateApplicationQuestions() {
    const applicationExamples = [
        {
            term: "API (Application Programming Interface)",
            scenario: "쇼핑몰 웹사이트에서 결제 버튼을 누르면 카드사 시스템과 연결되어 결제가 처리됩니다. 이때 쇼핑몰과 카드사 간의 소통을 가능하게 하는 것은?",
            explanation: "API는 서로 다른 소프트웨어 애플리케이션 간의 소통을 가능하게 하는 인터페이스입니다."
        },
        {
            term: "CDN (Content Delivery Network)",
            scenario: "한국에 있는 사용자가 미국 서버의 동영상을 빠르게 시청할 수 있도록 전 세계 곳곳에 서버를 두고 가까운 곳에서 콘텐츠를 제공하는 기술은?",
            explanation: "CDN은 전 세계에 분산된 서버를 통해 사용자에게 가장 가까운 위치에서 콘텐츠를 제공하여 속도를 향상시키는 기술입니다."
        },
        {
            term: "React",
            scenario: "웹사이트의 버튼, 메뉴, 카드 등을 독립적인 작은 단위로 만들어서 조립하듯이 화면을 구성할 수 있게 해주는 JavaScript 라이브러리는?",
            explanation: "React는 컴포넌트 기반으로 사용자 인터페이스를 구축할 수 있게 해주는 JavaScript 라이브러리입니다."
        },
        {
            term: "Framework",
            scenario: "개발자가 정해진 규칙과 구조에 따라 코드를 작성하면, 전체적인 프로그램 흐름을 자동으로 관리해주는 개발 도구는?",
            explanation: "Framework는 개발의 기본 구조와 규칙을 제공하여 개발자가 더 쉽고 효율적으로 애플리케이션을 만들 수 있게 해주는 도구입니다."
        },
        {
            term: "리팩토링 (Refactoring)",
            scenario: "프로그램의 기능은 그대로 유지하면서 코드를 더 읽기 쉽고 유지보수하기 편하게 개선하는 작업을 무엇이라고 합니까?",
            explanation: "리팩토링은 소프트웨어의 외부 동작은 그대로 유지하면서 내부 구조를 개선하는 작업입니다."
        },
        {
            term: "Rendering",
            scenario: "브라우저가 HTML, CSS, JavaScript 코드를 해석해서 사용자가 볼 수 있는 웹페이지로 만드는 과정을 무엇이라고 합니까?",
            explanation: "Rendering은 코드를 해석하여 사용자가 볼 수 있는 화면으로 변환하는 과정입니다."
        },
        {
            term: "SDK (Software Development Kit)",
            scenario: "iOS 앱을 개발할 때 필요한 도구들(라이브러리, API, 문서, 개발환경 등)을 한 번에 제공하는 패키지를 무엇이라고 합니까?",
            explanation: "SDK는 특정 플랫폼이나 운영체제를 위한 애플리케이션 개발에 필요한 도구들을 모아놓은 개발 키트입니다."
        },
        {
            term: "PWA (Progressive Web App)",
            scenario: "웹사이트이지만 스마트폰 홈화면에 설치할 수 있고, 오프라인에서도 작동하며, 푸시 알림도 받을 수 있는 웹 애플리케이션 기술은?",
            explanation: "PWA는 웹 기술로 만들어졌지만 네이티브 앱과 같은 경험을 제공하는 웹 애플리케이션입니다."
        },
        {
            term: "Protocol",
            scenario: "서로 다른 시스템들이 데이터를 주고받을 때 어떤 형식과 절차를 따라야 하는지 정해둔 표준화된 규칙을 무엇이라고 합니까?",
            explanation: "Protocol은 컴퓨터 네트워크에서 데이터를 주고받을 때 따라야 하는 표준화된 규칙과 절차입니다."
        },
        {
            term: "Interface",
            scenario: "스마트폰 터치스크린처럼 사람과 기계가 서로 소통할 수 있도록 해주는 접점을 무엇이라고 합니까?",
            explanation: "Interface는 서로 다른 시스템이나 사용자와 기계 간에 상호작용할 수 있도록 해주는 접점입니다."
        }
    ];
    
    return applicationExamples.map(example => {
        const termName = example.term.split(' (')[0]; // 괄호 안의 설명 제거
        const icon = getTermIcon(example.term);
        
        return {
            type: 'application',
            question: `<div class="question-header">
                <div class="question-icon">${icon}</div>
                <div class="question-content">
                    <h3 class="question-title">실생활 응용 문제</h3>
                    <div class="scenario-box">
                        <div class="scenario-icon">💡</div>
                        <div class="scenario-text">${example.scenario}</div>
                    </div>
                </div>
            </div>`,
            correctAnswer: termName, // 짧은 형태의 용어명을 정답으로 설정
            fullTerm: example.term, // 전체 용어는 별도로 보관
            explanation: `정답은 "${termName}"입니다.\n\n${example.explanation}`
        };
    });
}

// 화면 전환 함수
function showScreen(screen) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    
    // screen이 문자열인 경우 element로 변환
    const screenElement = typeof screen === 'string' ? document.getElementById(screen) : screen;
    screenElement.classList.add('active');
    
    // 🎯 퀴즈 모드일 때 관리자 패널 숨기기
    const screenId = screenElement.id;
    if (screenId === 'quiz-screen' || screenId === 'result-screen' || screenId === 'dictionary-screen') {
        document.body.classList.add('quiz-mode');
    } else {
        document.body.classList.remove('quiz-mode');
    }
}

// 퀴즈 시작
function startQuiz(type) {
    currentQuizType = type;
    currentQuestionIndex = 0;
    score = 0;
    userAnswers = [];
    answered = false;
    questionStates = []; // 각 문제의 상태 초기화
    
    // 문제 생성
    switch (type) {
        case 'multiple-choice':
            currentQuestions = generateMultipleChoiceQuestions();
            break;
        case 'short-answer':
            currentQuestions = generateShortAnswerQuestions();
            break;
        case 'true-false':
            currentQuestions = generateTrueFalseQuestions();
            break;
        case 'application':
            currentQuestions = generateApplicationQuestions();
            break;
    }
    
    // 각 문제의 상태를 저장할 배열 초기화
    questionStates = new Array(currentQuestions.length).fill(null);
    
    questionTitle.textContent = quizTitles[type];
    showScreen('quiz-screen');
    displayQuestion();
}

// 문제 표시
function displayQuestion() {
    const question = currentQuestions[currentQuestionIndex];
    const savedState = questionStates[currentQuestionIndex];
    answered = savedState ? savedState.answered : false;
    
    // 🎯 문제 유형과 설명을 함께 표시
    const questionTitle = document.getElementById('question-title');
    const questionSubtitle = document.getElementById('question-subtitle');
    
    if (questionTitle) questionTitle.textContent = getQuestionTypeTitle(question.type);
    if (questionSubtitle) questionSubtitle.textContent = getQuestionSubtitle(question.type);
    
    // 진행률 업데이트
    const progress = ((currentQuestionIndex + 1) / currentQuestions.length) * 100;
    progressFill.style.width = `${progress}%`;
    progressText.textContent = `${currentQuestionIndex + 1} / ${currentQuestions.length}`;
    
    // 질문 내용
    questionContent.innerHTML = `<div class="question-text">${question.question}</div>`;
    
    // 답안 옵션 초기화
    answerOptions.innerHTML = '';
    feedback.classList.add('hidden');
    
    // 버튼 상태 초기화
    if (answered) {
        submitBtn.classList.add('hidden');
        nextBtn.classList.remove('hidden');
        // 피드백 표시
        if (savedState.feedback) {
            feedback.innerHTML = savedState.feedback;
            feedback.className = savedState.feedbackClass;
            feedback.classList.remove('hidden');
        }
    } else {
        submitBtn.disabled = true;
        submitBtn.textContent = '답안 제출';
        submitBtn.classList.remove('hidden');
        nextBtn.classList.add('hidden');
    }
    
    // 이전 버튼은 첫 번째 문제에서만 숨김
    if (currentQuestionIndex === 0) {
        prevBtn.classList.add('hidden');
    } else {
        prevBtn.classList.remove('hidden');
    }
    
    // 문제 유형별 UI 생성
    if (question.type === 'multiple-choice') {
        displayMultipleChoice(question);
    } else if (question.type === 'short-answer') {
        displayShortAnswer(question);
    } else if (question.type === 'true-false') {
        displayTrueFalse(question);
    } else if (question.type === 'application') {
        displayApplication(question);
    }
    
    // 이전에 답변한 내용이 있다면 복원
    if (savedState && savedState.userAnswer !== undefined) {
        restoreUserAnswer(question, savedState.userAnswer, savedState.isCorrect);
    }
}

function displayMultipleChoice(question) {
    const optionsDiv = document.createElement('div');
    optionsDiv.className = 'answer-options';
    
    question.options.forEach((option, index) => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'option';
        optionDiv.textContent = option;
        optionDiv.addEventListener('click', () => selectOption(optionDiv, option));
        optionsDiv.appendChild(optionDiv);
    });
    
    answerOptions.appendChild(optionsDiv);
}

function displayShortAnswer(question) {
    const input = document.createElement('input');
    input.type = 'text';
    input.className = 'text-input';
    input.placeholder = '답을 입력하세요...';
    input.addEventListener('input', () => {
        submitBtn.disabled = input.value.trim() === '';
    });
    
    // ⚡ Enter 키로 답안 제출
    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && !answered && input.value.trim() !== '') {
            submitAnswer();
        }
    });
    
    answerOptions.appendChild(input);
    input.focus(); // 자동 포커스
}

function displayTrueFalse(question) {
    const buttonsDiv = document.createElement('div');
    buttonsDiv.className = 'tf-buttons';
    
    const trueBtn = document.createElement('button');
    trueBtn.className = 'tf-button';
    trueBtn.textContent = '참 (True)';
    trueBtn.addEventListener('click', () => selectTrueFalse(trueBtn, true));
    
    const falseBtn = document.createElement('button');
    falseBtn.className = 'tf-button';
    falseBtn.textContent = '거짓 (False)';
    falseBtn.addEventListener('click', () => selectTrueFalse(falseBtn, false));
    
    buttonsDiv.appendChild(trueBtn);
    buttonsDiv.appendChild(falseBtn);
    answerOptions.appendChild(buttonsDiv);
}

function displayApplication(question) {
    const input = document.createElement('input');
    input.type = 'text';
    input.className = 'text-input';
    input.placeholder = '용어를 입력하세요...';
    input.addEventListener('input', () => {
        submitBtn.disabled = input.value.trim() === '';
    });
    
    // ⚡ Enter 키로 답안 제출
    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && !answered && input.value.trim() !== '') {
            submitAnswer();
        }
    });
    
    answerOptions.appendChild(input);
    input.focus(); // 자동 포커스
}

// 답안 선택 함수들
function selectOption(optionDiv, value) {
    if (answered) return;
    
    document.querySelectorAll('.option').forEach(opt => opt.classList.remove('selected'));
    optionDiv.classList.add('selected');
    submitBtn.disabled = false;
    submitBtn.dataset.answer = value;
}

function selectTrueFalse(button, value) {
    if (answered) return;
    
    document.querySelectorAll('.tf-button').forEach(btn => btn.classList.remove('selected'));
    button.classList.add('selected');
    submitBtn.disabled = false;
    submitBtn.dataset.answer = value;
}

// 사용자 답변 복원 함수
function restoreUserAnswer(question, userAnswer, isCorrect) {
    if (question.type === 'multiple-choice') {
        document.querySelectorAll('.option').forEach(opt => {
            opt.classList.add('disabled');
            if (opt.textContent === question.correctAnswer) {
                opt.classList.add('correct');
            } else if (opt.textContent === userAnswer && !isCorrect) {
                opt.classList.add('incorrect');
                opt.classList.add('selected');
            } else if (opt.textContent === userAnswer && isCorrect) {
                opt.classList.add('selected');
            }
        });
    } else if (question.type === 'short-answer' || question.type === 'application') {
        const input = answerOptions.querySelector('.text-input');
        input.value = userAnswer;
        input.classList.add(isCorrect ? 'correct' : 'incorrect');
        input.disabled = true;
    } else if (question.type === 'true-false') {
        document.querySelectorAll('.tf-button').forEach(btn => {
            if ((btn.textContent.includes('참') && question.correctAnswer) || 
                (btn.textContent.includes('거짓') && !question.correctAnswer)) {
                btn.classList.add('correct');
            } else if (((btn.textContent.includes('참') && userAnswer === true) ||
                      (btn.textContent.includes('거짓') && userAnswer === false)) && !isCorrect) {
                btn.classList.add('incorrect');
                btn.classList.add('selected');
            } else if (((btn.textContent.includes('참') && userAnswer === true) ||
                      (btn.textContent.includes('거짓') && userAnswer === false)) && isCorrect) {
                btn.classList.add('selected');
            }
        });
    }
}

// 답안 제출
function submitAnswer() {
    if (answered) return;
    
    const question = currentQuestions[currentQuestionIndex];
    let userAnswer;
    let isCorrect;
    
    if (question.type === 'multiple-choice') {
        userAnswer = submitBtn.dataset.answer;
        isCorrect = userAnswer === question.correctAnswer;
    } else if (question.type === 'short-answer') {
        userAnswer = answerOptions.querySelector('.text-input').value.trim();
        
        // 🌟 고급 답안 검증 - 영어/한글 답변 모두 인정
        isCorrect = isAnswerCorrect(userAnswer, question.correctAnswer, question.fullTerm);
        
        // 디버깅: 답안 검증 과정 로그
        console.log('🔍 단답형 문제 채점:', {
            사용자답안: userAnswer,
            정답: question.correctAnswer,
            전체용어: question.fullTerm,
            채점결과: isCorrect ? '✅ 정답' : '❌ 오답'
        });
    } else if (question.type === 'application') {
        userAnswer = answerOptions.querySelector('.text-input').value.trim();
        
        // 🌟 고급 답안 검증 - 영어/한글 답변 모두 인정
        isCorrect = isAnswerCorrect(userAnswer, question.correctAnswer, question.fullTerm);
        
        // 디버깅: 답안 검증 과정 로그
        console.log('🔍 응용 문제 채점:', {
            사용자답안: userAnswer,
            정답: question.correctAnswer,
            전체용어: question.fullTerm,
            채점결과: isCorrect ? '✅ 정답' : '❌ 오답'
        });
    } else if (question.type === 'true-false') {
        userAnswer = submitBtn.dataset.answer === 'true';
        isCorrect = userAnswer === question.correctAnswer;
    }
    
    answered = true;
    
    // 현재 문제가 처음 답변되는 경우에만 점수와 userAnswers에 추가
    if (!questionStates[currentQuestionIndex]) {
        userAnswers.push({
            question: question.question,
            userAnswer: userAnswer,
            correctAnswer: question.correctAnswer,
            isCorrect: isCorrect
        });
        
        if (isCorrect) {
            score++;
        }
    } else {
        // 이미 답변한 문제의 경우 기존 기록 업데이트
        const existingAnswerIndex = userAnswers.findIndex(answer => 
            answer.question === question.question
        );
        if (existingAnswerIndex !== -1) {
            // 이전 답변이 정답이었다면 점수에서 차감
            if (userAnswers[existingAnswerIndex].isCorrect) {
                score--;
            }
            // 새 답변이 정답이면 점수 추가
            if (isCorrect) {
                score++;
            }
            // 기록 업데이트
            userAnswers[existingAnswerIndex] = {
                question: question.question,
                userAnswer: userAnswer,
                correctAnswer: question.correctAnswer,
                isCorrect: isCorrect
            };
        }
    }
    
    const feedbackHtml = `
        <h4>${isCorrect ? '정답입니다!' : '틀렸습니다.'}</h4>
        <p>${question.explanation}</p>
    `;
    const feedbackClass = `feedback ${isCorrect ? 'correct' : 'incorrect'}`;
    
    // 문제 상태 저장
    questionStates[currentQuestionIndex] = {
        answered: true,
        userAnswer: userAnswer,
        isCorrect: isCorrect,
        feedback: feedbackHtml,
        feedbackClass: feedbackClass
    };
    
    showFeedback(isCorrect, question.explanation, question.type);
    submitBtn.classList.add('hidden');
    nextBtn.classList.remove('hidden');
    
    // 시각적 피드백
    if (question.type === 'multiple-choice') {
        document.querySelectorAll('.option').forEach(opt => {
            opt.classList.add('disabled');
            if (opt.textContent === question.correctAnswer) {
                opt.classList.add('correct');
            } else if (opt.classList.contains('selected') && !isCorrect) {
                opt.classList.add('incorrect');
            }
        });
    } else if (question.type === 'short-answer' || question.type === 'application') {
        const input = answerOptions.querySelector('.text-input');
        input.classList.add(isCorrect ? 'correct' : 'incorrect');
        input.disabled = true;
    } else if (question.type === 'true-false') {
        document.querySelectorAll('.tf-button').forEach(btn => {
            if ((btn.textContent.includes('참') && question.correctAnswer) || 
                (btn.textContent.includes('거짓') && !question.correctAnswer)) {
                btn.classList.add('correct');
            } else if (btn.classList.contains('selected') && !isCorrect) {
                btn.classList.add('incorrect');
            }
        });
    }
}

function showFeedback(isCorrect, explanation, questionType) {
    let feedbackContent = '';
    
    if (isCorrect) {
        // 정답일 때는 간단한 메시지만
        feedbackContent = `<h4>✅ 정답입니다!</h4>`;
    } else {
        // 틀렸을 때만 상세한 설명 표시
        feedbackContent = `
            <h4>❌ 틀렸습니다.</h4>
            <p>${explanation}</p>
        `;
    }
    
    feedback.innerHTML = feedbackContent;
    feedback.className = `feedback ${isCorrect ? 'correct' : 'incorrect'}`;
    feedback.classList.remove('hidden');
}

// 다음 문제
function nextQuestion() {
    currentQuestionIndex++;
    
    if (currentQuestionIndex >= currentQuestions.length) {
        showResults();
    } else {
        displayQuestion();
    }
}

// 결과 표시
function showResults() {
    const percentage = Math.round((score / currentQuestions.length) * 100);
    
    document.getElementById('score-percentage').textContent = `${percentage}%`;
    document.getElementById('correct-count').textContent = score;
    document.getElementById('total-count').textContent = currentQuestions.length;
    
    // 점수별 메시지
    let message;
    if (percentage >= 90) {
        message = '완벽합니다! 🎉';
    } else if (percentage >= 70) {
        message = '잘했습니다! 👏';
    } else if (percentage >= 50) {
        message = '좋습니다! 💪';
    } else {
        message = '다시 도전해보세요! 📚';
    }
    
    document.getElementById('score-message').textContent = message;
    
    // 틀린 답안 표시
    const wrongAnswers = userAnswers.filter(answer => !answer.isCorrect);
    const wrongList = document.getElementById('wrong-list');
    
    if (wrongAnswers.length > 0) {
        document.getElementById('wrong-answers').style.display = 'block';
        wrongList.innerHTML = wrongAnswers.map(answer => `
            <div class="wrong-item">
                <h4>문제: ${answer.question.substring(0, 100)}...</h4>
                <p><strong>당신의 답:</strong> ${answer.userAnswer}</p>
                <p class="correct-answer"><strong>정답:</strong> ${answer.correctAnswer}</p>
            </div>
        `).join('');
    } else {
        document.getElementById('wrong-answers').style.display = 'none';
    }
    
    showScreen(resultScreen);
}

// 사전 기능 함수들
function searchTerms(query) {
    if (!query.trim()) {
        showWelcomeMessage();
        return;
    }
    
    const normalizedQuery = normalizeText(query);
    
    // 용어명에서만 검색 (정의 내용에서는 검색하지 않음)
    const filtered = termsData.filter(term => {
        const normalizedTerm = normalizeText(term.term);
        return normalizedTerm.includes(normalizedQuery);
    }).sort((a, b) => {
        const aExact = normalizeText(a.term) === normalizedQuery;
        const bExact = normalizeText(b.term) === normalizedQuery;
        const aStarts = normalizeText(a.term).startsWith(normalizedQuery);
        const bStarts = normalizeText(b.term).startsWith(normalizedQuery);
        
        // 정확히 일치하는 것이 최우선
        if (aExact && !bExact) return -1;
        if (!aExact && bExact) return 1;
        
        // 그 다음은 시작 부분이 일치하는 것
        if (aStarts && !bStarts) return -1;
        if (!aStarts && bStarts) return 1;
        
        // 나머지는 알파벳 순서
        return a.term.localeCompare(b.term, 'ko');
    });
    
    showSearchResults(filtered, query);
}

function showSearchResults(results, query) {
    hideAllResults();
    
    const searchResultsDiv = document.getElementById('search-results');
    const resultsCountSpan = document.getElementById('results-count');
    const resultsListDiv = document.getElementById('results-list');
    
    if (searchResultsDiv) {
        searchResultsDiv.classList.remove('hidden');
        searchResultsDiv.style.display = 'block';
    }
    
    if (resultsCountSpan) {
        resultsCountSpan.textContent = `${results.length}개 결과`;
    }
    
    if (resultsListDiv) {
        if (results.length === 0) {
            resultsListDiv.innerHTML = `
                <div class="no-results">
                    <div class="no-results-icon">🔍</div>
                    <h3>"${query}"에 대한 검색 결과가 없습니다</h3>
                    <p>다른 검색어를 시도해보세요.</p>
                </div>
            `;
        } else {
            const itemsHtml = results.map(term => createTermItem(term)).join('');
            resultsListDiv.innerHTML = itemsHtml;
        }
    }
}

function showWelcomeMessage() {
    hideAllResults();
    const welcomeElement = document.querySelector('.welcome-message');
    if (welcomeElement) {
        welcomeElement.style.display = 'block';
    }
    
    // 용어 개수 업데이트
    updateTermsCount();
}

function updateTermsCount() {
    const termsCount = termsData ? termsData.length : 0;
    
    // 홈 화면 상단의 용어 개수 업데이트 (52 총 용어)
    const homeTermsCountElement = document.getElementById('home-terms-count');
    if (homeTermsCountElement) {
        homeTermsCountElement.textContent = termsCount;
    }
    
    // 메인 화면 사전 카드의 용어 개수 업데이트
    const termsCountElement = document.getElementById('terms-count');
    if (termsCountElement) {
        termsCountElement.textContent = `${termsCount}개 용어`;
    }
    
    // 사전 화면의 용어 개수 업데이트
    const termsCountWelcomeElement = document.getElementById('terms-count-welcome');
    if (termsCountWelcomeElement) {
        termsCountWelcomeElement.textContent = termsCount;
    }
    
    console.log(`🎯 모든 UI의 용어 개수가 ${termsCount}개로 업데이트되었습니다.`);
}

function showAllTerms(sortMode = 'alphabetical') {
    hideAllResults();
    if (allTerms) {
        allTerms.classList.remove('hidden');
    }
    
    let sorted = [...termsData];
    if (sortMode === 'alphabetical') {
        sorted.sort((a, b) => a.term.localeCompare(b.term, 'ko'));
    } else if (sortMode === 'category') {
        sorted.sort((a, b) => {
            const catA = getTermCategory(a.term);
            const catB = getTermCategory(b.term);
            if (catA === catB) {
                return a.term.localeCompare(b.term, 'ko');
            }
            return catA.localeCompare(catB, 'ko');
        });
    }
    
    if (termsList) {
        termsList.innerHTML = sorted.map(term => createTermItem(term)).join('');
    }
}

function hideAllResults() {
    const welcomeElement = document.querySelector('.welcome-message');
    if (welcomeElement) {
        welcomeElement.style.display = 'none';
    }
    
    const searchResultsDiv = document.getElementById('search-results');
    if (searchResultsDiv) {
        searchResultsDiv.classList.add('hidden');
        searchResultsDiv.style.display = 'none';
    }
    
    const allTermsDiv = document.getElementById('all-terms');
    if (allTermsDiv) {
        allTermsDiv.classList.add('hidden');
        allTermsDiv.style.display = 'none';
    }
}

function createTermItem(term) {
    const icon = getTermIcon(term.term);
    const category = getTermCategory(term.term);
    
    // 정의에서 키워드 강조
    const highlightedDefinition = highlightKeywords(term.definition);
    
    return `
        <div class="term-item">
            <div class="term-header">
                <div class="term-icon">${icon}</div>
                <div class="term-title">
                    <h3 class="term-name">${term.term}</h3>
                    <span class="term-category">${category}</span>
                </div>
            </div>
            <p class="term-definition">${highlightedDefinition}</p>
        </div>
    `;
}

function highlightKeywords(text) {
    // 중요한 키워드들을 강조 표시
    const keywords = [
        '프로그래밍', '개발', '웹', '애플리케이션', '시스템', '데이터',
        '사용자', '기능', '도구', '언어', '프레임워크', '라이브러리',
        '컴포넌트', '인터페이스', '프로토콜'
    ];
    
    let highlighted = text;
    keywords.forEach(keyword => {
        const regex = new RegExp(`(${keyword})`, 'gi');
        highlighted = highlighted.replace(regex, '<strong>$1</strong>');
    });
    
    return highlighted;
}

function showSuggestions(query) {
    if (!query.trim() || !searchSuggestions) {
        if (searchSuggestions) {
            searchSuggestions.classList.remove('show');
        }
        return;
    }
    
    const normalizedQuery = normalizeText(query);
    // 용어명 시작 부분과 정확히 일치하는 것을 우선적으로 제안
    const suggestions = termsData
        .filter(term => {
            const normalizedTerm = normalizeText(term.term);
            return normalizedTerm.includes(normalizedQuery);
        })
        .sort((a, b) => {
            const aStarts = normalizeText(a.term).startsWith(normalizedQuery);
            const bStarts = normalizeText(b.term).startsWith(normalizedQuery);
            if (aStarts && !bStarts) return -1;
            if (!aStarts && bStarts) return 1;
            return a.term.localeCompare(b.term, 'ko');
        })
        .slice(0, 5);
    
    if (suggestions.length === 0) {
        searchSuggestions.classList.remove('show');
        return;
    }
    
    searchSuggestions.innerHTML = suggestions.map(term => `
        <div class="suggestion-item" data-term="${term.term}">
            <div class="suggestion-icon">${getTermIcon(term.term)}</div>
            <div class="suggestion-text">
                <div class="suggestion-term">${term.term}</div>
                <div class="suggestion-definition">${term.definition.substring(0, 50)}...</div>
            </div>
        </div>
    `).join('');
    
    searchSuggestions.classList.add('show');
    
    // 제안 클릭 이벤트
    searchSuggestions.querySelectorAll('.suggestion-item').forEach(item => {
        item.addEventListener('click', () => {
            const termName = item.dataset.term;
            if (searchInput) {
                searchInput.value = termName;
                searchTerms(termName);
                searchSuggestions.classList.remove('show');
            }
        });
    });
}

function resetSearch() {
    if (searchInput) {
        searchInput.value = '';
    }
    if (searchSuggestions) {
        searchSuggestions.classList.remove('show');
    }
    showWelcomeMessage();
}

// 이벤트 리스너
document.addEventListener('DOMContentLoaded', () => {
    // 접근성 초기화
    initializeAccessibility();
    
    // Google Sheets 통합: 저장된 데이터가 있으면 로드
    setTimeout(() => {
        if (window.GoogleSheetsIntegration && window.GoogleSheetsIntegration.initializeTermsData) {
            window.GoogleSheetsIntegration.initializeTermsData();
        }
    }, 100);
    
    // 초기 용어 개수 업데이트
    updateTermsCount();
    
    // 접근성 컨트롤 이벤트 (motion-toggle 제거됨)
    const themeToggle = document.getElementById('theme-toggle');
    
    if (themeToggle) themeToggle.addEventListener('click', toggleTheme);
    
    // 퀴즈 유형 선택
    document.querySelectorAll('.quiz-type-card').forEach(card => {
        card.addEventListener('click', () => {
            const type = card.dataset.type;
            if (type === 'dictionary') {
                showScreen(dictionaryScreen);
                setTimeout(() => showWelcomeMessage(), 100); // 약간의 지연을 줘서 DOM이 준비될 시간을 제공
            } else {
                startQuiz(type);
            }
        });
    });
    
    // 기본 버튼 이벤트
    submitBtn.addEventListener('click', submitAnswer);
    nextBtn.addEventListener('click', nextQuestion);
    prevBtn.addEventListener('click', () => {
        if (currentQuestionIndex > 0) {
            currentQuestionIndex--;
            displayQuestion();
        }
    });
    homeBtn.addEventListener('click', () => showScreen(homeScreen));
    homeDictBtn.addEventListener('click', () => showScreen(homeScreen));
    restartBtn.addEventListener('click', () => startQuiz(currentQuizType));
    homeResultBtn.addEventListener('click', () => showScreen(homeScreen));
    
    // 사전 기능 이벤트
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const query = e.target.value;
            
            // 검색 제안 표시
            clearTimeout(searchTimeout);
            searchTimeout = setTimeout(() => {
                showSuggestions(query);
            }, 200);
            
            // 실시간 검색
            if (query.length >= 2) {
                clearTimeout(searchTimeout);
                searchTimeout = setTimeout(() => {
                    searchTerms(query);
                }, 500);
            } else if (query.length === 0) {
                resetSearch();
            }
        });
        
        searchInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                const query = searchInput.value;
                searchTerms(query);
                searchSuggestions.classList.remove('show');
            } else if (e.key === 'Escape') {
                searchSuggestions.classList.remove('show');
            }
        });
    }
    
    if (searchBtn) {
        searchBtn.addEventListener('click', () => {
            const query = searchInput.value;
            searchTerms(query);
            searchSuggestions.classList.remove('show');
        });
    }
    

    
    // 인기 용어 태그 클릭
    const allTermTags = document.querySelectorAll('.term-tag');
    allTermTags.forEach(tag => {
        tag.addEventListener('click', () => {
            const term = tag.dataset.term;
            if (searchInput && term) {
                searchInput.value = term;
                searchTerms(term);
            }
        });
    });
    
    // 정렬 버튼
    const allSortBtns = document.querySelectorAll('.sort-btn');
    allSortBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            allSortBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentSortMode = btn.dataset.sort;
            showAllTerms(currentSortMode);
        });
    });
    
    // 외부 클릭 시 제안 숨기기
    document.addEventListener('click', (e) => {
        if (searchInput && searchSuggestions &&
            !searchInput.contains(e.target) && !searchSuggestions.contains(e.target)) {
            searchSuggestions.classList.remove('show');
        }
    });
});