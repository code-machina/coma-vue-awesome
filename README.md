# Code-Machina(코마)의 Vue Awesome

- gh-page 에 Vue Awesome 웹 페이지를 개시한다.

## internalization (i18n)

- [How to translate your Vue app with vue i18n](https://www.codeandweb.com/babeledit/tutorials/how-to-translate-your-vue-app-with-vue-i18n)

```powershell
vue add i18n
```

## gh-page 설정

gh-page 설정 상 {PROJECT_ROOT}/docs 폴더에 npm 빌드한 데이터가 있어야 한다.

따라서 `/vue-gh-page` 폴더에서 `vue.config.js` 파일을 생성하고 아래의 코드를 넣어둔다.

- `/coma-vue-awesome/` 는 git repository 이름이다.
- `../docs` 라고 설정하여 docs 디렉터리를 매 빌드때마다 체크한다.

```javascript
const path = require("path");

module.exports = {
  publicPath: '/coma-vue-awesome/',
  outputDir: path.resolve(__dirname, "../docs")
}
```

## 구성 계획

vue 관련 내용을 정리할 때, 예제 소스를 {PROJECT_ROOT}/{TUTORIAL_NAME} 형태로 생성한다.

```powershell
vue create vue-start-01
```

### vue-start-01




## 주의 사항

WSL 환경에서 @vue/cli 구성 중에 오류가 발생하였다. 조금 안타깝네.
따라서, poweshell 에서 npm 을 통해 @vue/cli 를 설치한다.

```powershell
npm install -g @vue/cli
```
