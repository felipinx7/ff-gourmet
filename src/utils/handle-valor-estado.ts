import React, { Dispatch } from 'react';

export function handleStateValue(setState: Dispatch<React.SetStateAction<boolean>>) {
  setState(prev => !prev);
}
