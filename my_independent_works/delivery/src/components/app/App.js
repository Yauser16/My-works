
import React, { lazy, Suspense,  useMemo } from 'react';
import Spinner from '../spinner/Spinner';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useGetDeliveryQuery, useGetDriverQuery, useGetDistrQuery } from '../../api/apiSlice';
import './App.css';
// import {FormPage, DeliverPage} from '../pages';

const FormPage = lazy(() => import('../pages/formPage'));
const DeliverPageF = lazy(() => import('../pages/deliverPageF'));
const DeliveriesPage = lazy(() => import('../pages/deliveriesPage'));
const Page404 = lazy(() => import('../pages/page404'));


function App() {
  const {
    data: delivery = [],
    isLoading,
    isError
  } = useGetDeliveryQuery({ pollingInterval: 3000, keepUnusedDataFor: 120 });

  const deliveryItems = useMemo(() => {
    const deliveryItems = delivery.slice();
    return deliveryItems;
  }, [delivery]);
  
  const {
    data: drivers = []
  } = useGetDriverQuery();

  const driversNames = useMemo(() => {
    const driverName = drivers.slice();
    return driverName;
  }, [drivers]);

  const {
    data: distrdeliveries = []
  } = useGetDistrQuery({ pollingInterval: 3000, keepUnusedDataFor: 120 });

  const distribution = useMemo(() => {
    const distribution = distrdeliveries.slice();
    return distribution;
  }, [distrdeliveries]);


  return (
    <Router>
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path="/" element={<FormPage
            distribution={distribution}
            deliveryItems={deliveryItems}
            isLoading={isLoading}
            isError={isError} />} />
          <Route path="/delivery/:id" element={<DeliverPageF
            deliveryItems={deliveryItems}
            isLoading={isLoading}
            isError={isError} />} />
          <Route path="/deliveries" element={<DeliveriesPage
            driversNames={driversNames}
            deliveryItems={deliveryItems}
            distribution={distribution}
            isLoading={isLoading}
            isError={isError} />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
