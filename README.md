<h2 align="middle">동글의 레이아웃 컴포넌트</h2>
<p align="middle">우아한테크코스 5기 프로젝트 <a href="https://donggle.blog">동글</a></p>
<br/>

# layout-component &middot; [![NPM Version](https://img.shields.io/npm/v/@donggle/layout-component)](https://www.npmjs.com/package/@donggle/layout-component) [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/yogjin/layout-component/blob/main/LICENSE)

`@donggle/layout-component` 는 동글에서 사용하는 Drawer 컴포넌트를 담은 라이브러리입니다.

이 라이브러리는 내부적으로 [styled-components](https://github.com/styled-components/styled-components)를 이용하기 때문에, styled-components를 이용하고 있는 프로젝트에 적합합니다.

## 설치

`@donggle/layout-component`는 [npm](https://www.npmjs.com/package/@donggle/layout-component)에 배포되어 있습니다.

다음 명령어를 통해 최신 버전을 설치할 수 있습니다.

```sh
npm i @donggle/layout-component
```

[yarn](https://yarnpkg.com/getting-started/usage)을 사용하신다면:

```sh
yarn add @donggle/layout-component
```

## 사용법

### Drawer

사이트 내 목적지 또는 계정 전환과 같은 앱 기능에 접근하는 통로를 담는 컴포넌트

#### Props

| 속성    | 타입                               | 기본값    |
| ------- | ---------------------------------- | --------- |
| anchor  | `'left', 'right', 'top', 'bottom'` | 'left'    |
| open    | boolean                            | false     |
| onClose | Function                           | undefined |

```tsx
import { Container } from '@donggle/layout-component';

...
const [state, setState] = React.useState({
  top: false,
  left: false,
  bottom: false,
  right: false,
});

const toggleDrawer = (anchor: Anchor, open: boolean) => {
  setState({ ...state, [anchor]: open });
};

const list = (anchor: Anchor) => (
  <Flex direction="column">
    <button onClick={() => toggleDrawer(anchor, false)}>Woowacourse</button>
    <button onClick={() => toggleDrawer(anchor, false)}>Missions</button>
    <button onClick={() => toggleDrawer(anchor, false)}>Settings</button>
  </Flex>
);

return (
  <>
    {(['left', 'right', 'top', 'bottom'] as const).map((anchor) => (
      <React.Fragment key={anchor}>
        <button onClick={() => toggleDrawer(anchor, true)}>{anchor}</button>
        <Drawer anchor={anchor} open={state[anchor]} onClose={() => toggleDrawer(anchor, false)}>
          {list(anchor)}
        </Drawer>
      </React.Fragment>
    ))}
  </>
);
...
```

### License

`@donggle/layout-component` is MIT licensed
