// @flow

import db from './model';
import { CREATOR_NAME } from './constants';

export const helloWorldService = (options: any) => db.sayHello({ creatorName: CREATOR_NAME });
