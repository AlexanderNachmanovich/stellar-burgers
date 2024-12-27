import { FC } from 'react';
import { BurgerConstructorElementUI } from '@ui';
import { BurgerConstructorElementProps } from './type';
import { useDispatch } from '../../services/store';
import {
  removeIngredient,
  moveIngredientPosition
} from '../../services/slices/constructorSlice';

export const BurgerConstructorElement: FC<BurgerConstructorElementProps> = ({
  ingredient,
  index,
  totalItems
}) => {
  const dispatch = useDispatch();

  const moveItem = (direction: number) => {
    dispatch(moveIngredientPosition({ index, newIndex: direction }));
  };

  const handleRemove = () => {
    dispatch(removeIngredient(ingredient.id));
  };

  return (
    <BurgerConstructorElementUI
      ingredient={ingredient}
      index={index}
      totalItems={totalItems}
      handleMoveUp={() => moveItem(-1)}
      handleMoveDown={() => moveItem(1)}
      handleClose={handleRemove}
    />
  );
};
