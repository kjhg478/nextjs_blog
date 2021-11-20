## Next.js_blog

---

#### 모듈의 이해

- npm init —yes
	- 기본적인 형태의 package.json을 얻는 방법

- next 수동설정
    - yarn add next react react-dom

- 생성된 파일에 Typescript를 적용
    - yarn add -D typescript @types/node @types/react
        - -D, —dev 패키지를 개발 종속성으로 추가
        - @types/node @types/ 가 붙은 모듈은 타입스크립트가 지원되는 라이브러리

- mkdir - p src/{pages, components}
	- 존재하지 않는 중간의 디렉토리를 자동으로 생성해준다.
	- mkdir -p 여러 덱스의 하위 디렉토리 생성시 사용 (파일 경로 생성)

![image](https://user-images.githubusercontent.com/31474272/142714777-3d514d8e-e8a8-4779-867c-4c1c4ed1dcf8.png)

- vim src/pages/index/tsx
- vim package.json
	- Vim (VI iMproved) 터미널을 통해 텍스트를 편집할 수 있는 에디터
	- vim 만들고자하는 파일이름.파일의 확장자
yarn dev

- git init
- vim .gitignore
- git add .
- git commit -m “Initialize next.js with ts”

- yarn add -D eslint @typescript-eslint/eslint-plugin 
- @typescript-eslint/parser
	- @typescript-eslint/parser: ESLint가 Typescript 코드를 린트하도록 허용하는 파서
	- @typescript-eslint/eslint-plugin: Typescript 고유의 규칙을 포함하는 플러그인

vim .eslintrc.js
vim package.json
Yarn lint

- yarn add -D prettier eslint-plugin-prettier eslint-config-prettier
	- Prettier: prettier 코어 패키지
	- Eslint-config-prettier: prettier와 충돌할 수 있는 ESLint 규칙을 비활성화 해주는 패키지
	- eslint-plugin-prettier: ESLint 규칙으로 prettier를 실행하기 위한 패키지

vim .prettierrc.js
yarn lint

- Yarn add -D husky lint-staged
	- git은 Hook이라는 기능을 가지고 있다. Git에서 특정 이벤트(커밋, 푸쉬 등)를 실행할 때, 그 이벤트에 Hook을 설정하여 Hook에 설정된 스크립트 실행 가능

	- Commit wokrflow hook
        - Pre-commit : 커밋 메시지를 작성하기 전에 호출됨
        - pre-commit은 파일을 커밋하기 전에 코드 스타일을 정돈하거나 이미지를 최적화하는 등 파일을 전처리하고 싶을 때 사용하는 편
        - Prepare-commit-msg: 커밋이 만들어지고 git이 커밋 메시지를 만든 뒤 사용자에게 전달하기 전에 호출되는 hook
        - 커밋 메시지를 원하는 스타일로 가공하고 싶을 때

	- husky는 Git Hook을 간편하게 사용할 수 있도록 도와주는 툴
        - lint-staged
        - husky와 함께 자주 사용되는 lint-staged는 git의 staged된 상태에 파일들에 특정 명령어를 실행할 수 있도록 해주는 툴
        - git의 staged된 상태란 git add 명령어로 수정된 파일을 커밋하기 위해 추가한 상태 이렇게 staged 상태에 파일들은 다시 수정하게 되면 git add로 다시 추가해야 함
        - lint-staged는 staged된 파일을 수정한 후 다시 git add를 하지 않아도 문제가 없도록 도와주는 툴

Vim package.json

Git add .
Git commit -m “Config eslint with git hooks”

- react-markdown
    - dangerouslySetInnerHTML 마크다운을 처리하는 방법에 자주 의존하거나 버그가 있기 때문
    - react-markdown 구문 트리를 사용하여 완전히 덮어쓰는 대신 변경되는 DOM만 업데이트 할 수 있는 가상 dom을 구축

Yarn add gray-matter 
- 문자열이나 파일에서 앞 내용을 구문 분석합니다.

```Javascript
    /*
        ---
        제목 : Hello
        slug : 홈
        ---
        <h1> Hello World ! </h1>
    */
   // 다음과 같은 객체로
   {
       content : '<h1>Hello World!</h1>'
       data: {
           title: 'Hello',
           slug: 'home'
       }
   }

```
