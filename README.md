# 원티드 프리온보딩 12차 - 4주차 과제

## 과제 소개

> 데이터 차트화 + 조건부 필터링

## 결과 미리보기

<!-- 이미지 위치 -->

## 시작 가이드

### 설치

```
$ git clone git@github.com:hyesuhong/wanted-pre-onboarding-week-4.git
$ cd wanted-pre-onboarding-week-4
```

### 로컬 서버 구동

```
$ npm install
$ npm run dev
```

## 주요 기능

### 시계열 차트

- 주어진 데이터를 Area, Bar 두 가지 타입이 함께 있는 차트로 시각화합니다.
- 두 가지 데이터의 범위를 차트 양쪽의 y축에 표시합니다.

### 차트 툴팁

- 차트의 데이터 영역에 마우스가 올라갔을 때, 해당 영역의 `id(지역구)`, `value_area`, `value_bar` 정보를 툴팁으로 보여줍니다.

### 데이터 필터링

- 페이지 상단의 지역구 버튼 클릭 or 데이터 영역 클릭했을 때, 동일한 지역구인 데이터를 표시합니다.

## 개발 중점 사항

1. 컴포넌트 분리

   - `Containers`: 비즈니스 로직을 처리하고, UI 컴포넌트를 조합합니다.
   - `Components`: UI적인 측면만 담당합니다. 각각 사용되는 Container의 이름을 딴 폴더로 구분했습니다.

2. 카테고리(지역구) 데이터 관리

   - `Context API`: 사용되는 데이터, 카테고리 변경 함수 등을 거의 동일하게 모든 Container 에서 필요로 하기 때문에 사용했습니다.
   - `useReduce`: 경우의 수를 초기화(RESET)와 변경(CHANGE) 두 가지로 제한하기 위해 reduce 훅을 사용했습니다.

## 프로젝트 구성

### 디렉토리

```
src
 ┣ assets
 ┣ components
 ┃ ┣ Chart
 ┃ ┣ Filter
 ┃ ┗ common
 ┣ container
 ┣ contexts
 ┣ hooks
 ┣ styles
 ┣ types
 ┗ utils
```

## 기술 스택

### Development

![React](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=black)
![Typescript](https://img.shields.io/badge/Typescript-3178C6?style=flat-square&logo=Typescript&logoColor=white)
![styled components](https://img.shields.io/badge/styled_components-DB7093?style=flat-square&logo=styledcomponents&logoColor=white)
![recharts](https://img.shields.io/badge/recharts-23A7B2?style=flat-square)
