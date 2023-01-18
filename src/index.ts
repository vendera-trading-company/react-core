/* eslint-disable import/no-named-as-default */
/* eslint-disable react/self-closing-comp */
/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable lines-between-class-members */
/* eslint-disable array-callback-return */
/* eslint-disable eqeqeq */
/* eslint-disable no-plusplus */
/* eslint-disable vars-on-top */
/* eslint-disable no-var */
/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable prefer-destructuring */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/function-component-definition */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable import/order */
/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable react/no-unused-class-component-methods */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/sort-comp */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable class-methods-use-this */
/* eslint-disable @typescript-eslint/no-empty-interface */

/** Import Components */
import { BaseView, IBaseViewState } from './components/BaseView/BaseView';
import {
  Application,
  ApplicationContext,
  IApplicationState,
} from './components/Application/Application';

/** Import Components Animated */
import { AnimatedImage } from './components/animated/AnimatedImage/AnimatedImage';

/** Import Components Forms */
import {
  TextInput,
  ITextInputProps,
} from './components/form/TextInput/TextInput';

/** Import Hooks */
import useApplication from './hooks/useApplication';
import useView from './hooks/useView';

/** Import Support */
/** Import Support Input Controller  */
import { Controller } from './support/input-controller/Controller/Controller';
import { TextController } from './support/input-controller/TextController/TextController';
import { ToggleController } from './support/input-controller/ToggleController/ToggleController';

/** Import Database */
import { Model } from './database/Model/Model';
import { Collection } from './database/Collection/Collection';

export {
  useView,
  useApplication,
  Application,
  ApplicationContext,
  IApplicationState,
  BaseView,
  IBaseViewState,
  Controller,
  TextController,
  ToggleController,
  Model,
  Collection,
  TextInput,
  ITextInputProps,
  AnimatedImage,
};
