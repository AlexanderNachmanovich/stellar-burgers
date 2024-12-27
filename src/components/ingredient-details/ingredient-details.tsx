import { FC } from 'react';
import { Preloader } from '../ui/preloader';
import { IngredientDetailsUI } from '../ui/ingredient-details';
import { getIngredientsState } from '../../services/slices/ingredientsSlice';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

export const IngredientDetails: FC = () => {
  const { id } = useParams();
  const ingredientsList = useSelector(getIngredientsState);
  const ingredient = ingredientsList.find((item) => item._id === id);

  if (!ingredient) {
    return <Preloader />;
  }

  return <IngredientDetailsUI ingredientData={ingredient} />;
};
