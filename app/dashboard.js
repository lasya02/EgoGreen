import { createViewModel } from './main-view-model';
import { Observable } from '@nativescript/core';

export function onNavigatingTo(args) {
  const page = args.object
  //page.bindingContext = createViewModel()


}

export function newPage(args) {
  const button = args.object
  const page = button.page 

  page.frame.navigate('dashboard')

}
