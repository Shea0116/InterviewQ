import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from '@/views/Layout.jsx';

// 懒加载组件
const ES6Page = lazy(() => import('@/views/ES6.jsx'));
const VuePage = lazy(() => import('@/views/Vue.jsx'));
const MobilePage = lazy(() => import('@/views/Mobile.jsx'));
const ReactPage = lazy(() => import('@/views/React.jsx'));
const CSSPage = lazy(() => import('@/views/CSS.jsx'));
const HTMLPage = lazy(() => import('@/views/HTML.jsx'));
const JavaScriptPage = lazy(() => import('@/views/JavaScript.jsx'));
const ServerPage = lazy(() => import('@/views/Server.jsx'));

export default function RouterView() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="es6" element={<ES6Page />} />
          <Route path="vue" element={<VuePage />} />
          <Route path="mobile" element={<MobilePage />} />
          <Route path="react" element={<ReactPage />} />
          <Route path="css" element={<CSSPage />} />
          <Route path="html" element={<HTMLPage />} />
          <Route path="javascript" element={<JavaScriptPage />} />
          <Route path="server" element={<ServerPage />} />
        </Route>
      </Routes>
    </Suspense>
  )
}