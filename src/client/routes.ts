import Quiz from './components/Quiz';
import Result from './components/Result';

const routes: any = [
  {
    path: '/quiz',
    exact: true,
    component: Quiz,
  },
  {
    path: '/result',
    exact: true,
    component: Result,
  },
];

export default routes;
