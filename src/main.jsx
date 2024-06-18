import React from 'react'
import ReactDOM from 'react-dom/client'
import { store } from './redux/store.js';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Provider } from 'react-redux';
import './index.css'
import AgencyPage from './components/pages/Agency.page.jsx';
import ClientsPage from './components/pages/Clients.page.jsx';

const router = createBrowserRouter([
  {
    path: "/empresas",
    element: <AgencyPage />,
  },
  {
    path: "/empresas/:nameAgencyParams",
    element: <ClientsPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
