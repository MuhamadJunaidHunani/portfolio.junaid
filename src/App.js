import './App.css';
import Main from './components/main';
import Layout from './components/layout';

const Languages = [
  {
      name:'HTML 5',
      icon: 'https://img.icons8.com/color/48/html-5--v1.png'
  },
  {
      name:'CSS 3',
      icon: 'https://img.icons8.com/color/48/css3.png'
  },
  {
      name:'JS',
      icon: 'https://img.icons8.com/color/48/javascript--v1.png'
  },
  {
      name:'React',
      icon: 'https://img.icons8.com/color/48/react-native.png'
  },
  {
      name:'Angular',
      icon: 'https://img.icons8.com/color/48/angularjs.png'
  },
  {
      name:'NodeJs',
      icon: 'https://img.icons8.com/color/48/nodejs.png'
  },
  {
      name:'Firebase',
      icon: 'https://img.icons8.com/color/48/firebase.png'
  },
  {
      name:'Tailwind',
      icon: 'https://img.icons8.com/color/48/tailwind_css.png'
  },
  {
      name:'Bootstarp',
      icon: 'https://img.icons8.com/color/48/bootstrap--v1.png'
  },
  {
      name:'NextJs',
      icon: 'https://img.icons8.com/fluency/48/nextjs.png'
  },
  
]

function App() {
  return (
    <div className='flex justify-center'>
      <Layout Languages={Languages}>
        <Main Languages={Languages}/>
      </Layout> 
    </div>
  );
}

export default App;
