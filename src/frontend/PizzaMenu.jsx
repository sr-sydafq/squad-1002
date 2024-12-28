import React, { useEffect, useState } from 'react';
import { Text } from '@forge/react';
import { invoke } from '@forge/bridge';

const PizzaMenu = ({ trigger }) => {
    const [recipes, setRecipes] = useState([]);

    const getRecipes = async (data) => {
        console.log("Getting recipes...");
        invoke('getRecipes', data).then((returnedData) => 
            setRecipes(returnedData)
        );
    };

    useEffect(() => {
        getRecipes();
    }, [trigger]);

    if(recipes.length === 0) return <Text>No recipes found</Text>;

    return (
        <Text>{recipes}</Text>
    );
};

export default PizzaMenu;