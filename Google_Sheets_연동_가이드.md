# 📊 Google Sheets 연동 가이드

IT 퀴즈 앱에서 Google Sheets를 통해 용어 데이터를 실시간으로 관리하는 방법을 설명합니다.

## 🚀 빠른 시작

### 1단계: Google Sheets 문서 준비

1. [Google Sheets](https://sheets.google.com) 접속
2. 새 스프레드시트 생성
3. 시트 이름을 "IT용어데이터"로 변경
4. 다음과 같이 헤더 행 작성:

| A열 (용어) | B열 (정의) | C열 (카테고리) | D열 (난이도) |
|-----------|-----------|---------------|-------------|
| API | 애플리케이션 프로그래밍 인터페이스 | 개념 | easy |
| React | 사용자 인터페이스를 구축하기 위한 JavaScript 라이브러리 | 프레임워크 | medium |

### 2단계: Google Cloud Console 설정

1. [Google Cloud Console](https://console.cloud.google.com) 접속
2. 새 프로젝트 생성 또는 기존 프로젝트 선택
3. **API 및 서비스 > 라이브러리** 이동
4. "Google Sheets API" 검색 후 활성화
5. **API 및 서비스 > 사용자 인증 정보** 이동
6. **사용자 인증 정보 만들기 > API 키** 선택
7. 생성된 API 키 복사

### 3단계: API 키 제한 설정 (보안)

1. 생성한 API 키 클릭
2. **API 제한사항** 선택
3. **키 제한** 체크
4. "Google Sheets API" 선택
5. 저장

### 4단계: Google Sheets 공유 설정

1. 스프레드시트에서 **공유** 버튼 클릭
2. **일반 액세스** 변경
3. **링크가 있는 모든 사용자** 선택
4. 권한: **뷰어** 유지
5. **완료** 클릭

### 5단계: 스프레드시트 ID 추출

스프레드시트 URL에서 ID 찾기:
```
https://docs.google.com/spreadsheets/d/[스프레드시트_ID]/edit#gid=0
```

예시:
```
https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit#gid=0
```
→ 스프레드시트 ID: `1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms`

### 6단계: 앱 설정

1. `google-sheets-integration.js` 파일 열기
2. 다음 값들 수정:

```javascript
const GOOGLE_SHEETS_CONFIG = {
    API_KEY: 'YOUR_GOOGLE_SHEETS_API_KEY',      // 2단계에서 생성한 API 키
    SHEET_ID: 'YOUR_GOOGLE_SHEET_ID',           // 5단계에서 추출한 ID
    SHEET_NAME: 'IT용어데이터',                  // 시트 이름
    RANGE: 'A:D'                                // 데이터 범위
};
```

## 📝 스프레드시트 형식

### 필수 컬럼

| 컬럼 | 설명 | 예시 | 필수여부 |
|------|------|------|----------|
| A열 | 용어 | API, React, HTML | ✅ 필수 |
| B열 | 정의 | 애플리케이션 프로그래밍 인터페이스 | ✅ 필수 |
| C열 | 카테고리 | 개념, 언어, 프레임워크 | ⚠️ 선택 |
| D열 | 난이도 | easy, medium, hard | ⚠️ 선택 |

### 카테고리 종류

- **개념**: 기본적인 IT 개념
- **언어**: 프로그래밍 언어
- **프레임워크**: 개발 프레임워크
- **도구**: 개발 도구
- **플랫폼**: 플랫폼 서비스
- **디자인**: 디자인 관련
- **배포**: 배포/운영 관련

### 난이도 설정

- **easy**: 쉬움 (초급)
- **medium**: 보통 (중급) - 기본값
- **hard**: 어려움 (고급)

## 🔧 사용 방법

### 웹 앱에서 업데이트

1. 오른쪽 하단 🔧 버튼 클릭
2. "📥 Google Sheets에서 업데이트" 버튼 클릭
3. 성공 메시지 확인

### 자동 업데이트 설정

```javascript
// 30분마다 자동 업데이트 (선택사항)
GoogleSheetsIntegration.setupAutoUpdate(30);
```

### 수동 업데이트

```javascript
// 수동으로 업데이트 실행
GoogleSheetsIntegration.updateTermsFromGoogleSheets();
```

## 📂 CSV 대안 방법

Google Sheets API 설정이 복잡하다면 CSV 파일 방식을 사용할 수 있습니다:

### CSV 파일 형식

```csv
용어,정의,카테고리,난이도
API,"애플리케이션 프로그래밍 인터페이스",개념,easy
React,"사용자 인터페이스를 구축하기 위한 JavaScript 라이브러리",프레임워크,medium
```

### 사용 방법

1. 🔧 관리자 패널 열기
2. "📄 템플릿 다운로드"로 기본 형식 받기
3. Excel/Google Sheets에서 편집
4. CSV 형식으로 저장
5. "📁 CSV 파일 업로드"로 업로드

## ⚠️ 문제 해결

### API 키 오류

**문제**: "API key not valid" 오류
**해결**: 
- API 키가 올바른지 확인
- Google Sheets API가 활성화되었는지 확인
- API 키 제한 설정 확인

### 스프레드시트 접근 오류

**문제**: "Unable to parse range" 오류
**해결**:
- 스프레드시트가 공개되어 있는지 확인
- 스프레드시트 ID가 올바른지 확인
- 시트 이름이 정확한지 확인

### 데이터 형식 오류

**문제**: 일부 용어가 로드되지 않음
**해결**:
- A열(용어)과 B열(정의)가 비어있지 않은지 확인
- 특수문자나 따옴표 처리 확인
- 셀에 줄바꿈이 있으면 제거

## 🔒 보안 고려사항

1. **API 키 보호**: API 키를 공개 저장소에 업로드하지 마세요
2. **최소 권한**: API 키는 Google Sheets API만 허용하도록 제한
3. **스프레드시트 권한**: 뷰어 권한만 부여 (편집 권한 불필요)
4. **정기 갱신**: API 키를 정기적으로 갱신

## 📈 고급 기능

### 여러 시트 관리

```javascript
// 여러 시트에서 데이터 가져오기
const configs = [
    { sheetName: 'IT용어데이터', range: 'A:D' },
    { sheetName: '고급용어', range: 'A:D' }
];
```

### 캐시 기능

```javascript
// 로컬 스토리지에 데이터 캐시
localStorage.setItem('termsData', JSON.stringify(termsData));
```

## 📞 지원

문제가 발생하면 다음을 확인해보세요:

1. 브라우저 개발자 도구 콘솔 확인
2. Google Cloud Console에서 API 사용량 확인
3. 스프레드시트 권한 설정 재확인

## 🎯 팁

- **테스트 환경**: 프로덕션 전에 작은 테스트 시트로 먼저 테스트
- **백업**: 중요한 데이터는 정기적으로 백업
- **버전 관리**: 스프레드시트 버전 히스토리 활용
- **협업**: 여러 사람이 동시에 편집할 수 있음 