import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import '../src/core/css/index.css'
import 'react-toastify/dist/ReactToastify.css';
import { NextUIProvider } from '@nextui-org/react'
import 'flowbite/dist/flowbite.css';
import { RecoilRoot } from 'recoil'
import { ToastContainer } from 'react-toastify'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <NextUIProvider>
      <RecoilRoot>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <App />
        <ToastContainer />
      </RecoilRoot>
    </NextUIProvider>
  </StrictMode>,
)
