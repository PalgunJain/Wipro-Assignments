import { TaskProvider } from '../src/contexts/TaskContext';

function MyApp({ Component, pageProps }) {
  return (
    <TaskProvider initialTasks={pageProps.initialTasks || []}>
      <Component {...pageProps} />
    </TaskProvider>
  );
}

export default MyApp;