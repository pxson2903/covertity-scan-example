import {
    ReactElement,
    useLayoutEffect,
  } from 'react';
  
  const TRUSTED_ORIGINS = [];
  
  const LoginPage = ({}) => {
    useLayoutEffect(() => {
      const onMessage = async (event: any) => {
        if (!TRUSTED_ORIGINS?.includes(event.origin)) {
          console.error({
            msg: 'Received message from an untrusted origin:',
            event: event.origin,
          });
          return;
        }
      window.addEventListener('message', onMessage);
  
      return () => {
        window.removeEventListener('message', onMessage);
      };
    }, []);
  
    return (
    );
  };
  
  export const getServerSideProps = async (ctx) => {
    return {
    }
  };
  
  export default LoginPage;