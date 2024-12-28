import React, { useEffect, useState } from 'react';
import ForgeReconciler, { useProductContext, Text } from '@forge/react';
import { PizzaForm } from './PizzaForm';
import PizzaMenu from './pizzaMenu';

const App = () => {
  const context = useProductContext();
  const [menuTrigger, setMenuTrigger] = useState(false);

  useEffect(() => {
    if (context) {
      console.log('Context:', context);
    }
  }, [context]);

  const handleFormSubmit = () => {
    setMenuTrigger(prev => !prev); // Toggle the state to re-trigger useEffect in PizzaMenu
  };

  return (
      <>
        <PizzaForm onSubmit={handleFormSubmit} />
        <Text>
          Here are some recipes
        </Text>
        <PizzaMenu trigger={menuTrigger} />
      </>
  );
};

ForgeReconciler.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
