# design

# 项目流程
- app.tsx -> 判断 true?pc端:手机端
- router -> 判断  true?pc端:手机端 没有组件渲染 404组件
- 页面设计见 page.drawio

  ## pc index.tsx
  - wrap (100vh 100vw) 子内容滚动
  ## 手机 index.tsx
  - wrap (100vh 100vw) 子内容滚动 滚动收缩导航栏

# src 文件路径
- assets      图片，base64
- common      常量
- components  通用组件
- hooks       自定义hooks
- page-mobile 手机页面
  - index.tsx   手机页面入口
- page-web    电脑端页面
  - index.tsx   电脑端页面入口
- router      路由
- server      数据请求
  - axios       网络请求
  - local-data  本地数据
- store       全局变量管理 toolkit
- type        类型和接口
- utils       通用的js方法

# 命名规范
- 组件命名 Mio + Mb/Web + Name
- 通用组件命名 Mio + Cm + Name
- 组件css  组件命名+div
- 文件夹命名 小写 + `-`
- 变量命名 小驼峰
- 方法命名 小驼峰
- 常量命名 大写

# code
- import 分为三层，每层空一行
  - 第三方库
  - 其它文件夹方法等
  - 接口、组件
- axios使用 async await 方式
- React采用函数式组件，层级如下
  ```tsx
  import { react } from 'react'

  import { methods } from '../utils'

  import { userType } from '../type'
  import MioWebHome from '../home'

  interface Iprops {
    ···
  }

  const App:React.FC<Iprops> = (props) => {  
    const { ··· } = props;
    const xx = useSelector(···);  // 全局变量
    const [ state,setState ] = useState<>(···); // useState
    // useEffect 
    useEffect(() => {
    },[])
    // useSelfHook
    // 自定义hooks
    
    // useMemo
    const yy = useMemo(() => {
    },[])

    // useCallback
    const zz = useCallback(() => {

    },[])

    // axios
    // 网络请求代码

    // tsx 如果有的话

    // methods 
    // 业务逻辑

    return ()
  }

  export default App
  ```
