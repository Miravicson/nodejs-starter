// @flow

import type { $Request, $Response, Middleware } from 'express';
import { helloWorldService } from './service';

type controllerActionsType = {
  helloWorld: Middleware,
};

const controller = (dependencyObject: any): controllerActionsType => {
  const helloWorld = async (req: $Request, res: $Response): Promise<void> => {
    const message = await helloWorldService({});
    res.send(message);
  };
  return {
    helloWorld,
  };
};

export default controller;
