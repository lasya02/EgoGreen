import { Observable } from '@nativescript/core'

function getMessage(counter) {
  if (counter <= 0) {
    return 'Hoorraaay! You unlocked the NativeScript clicker achievement!'
  } else {
    return `${counter} taps left`
  }
}

export function createViewModel() {
  const viewModel = new Observable()
  viewModel.counter = 42
  viewModel.message = getMessage(viewModel.counter)
  viewModel.message = "hello world java is real"

  viewModel.onTap = () => {
    alert('Button pressed!')
    viewModel.counter--
    viewModel.set('message', "hello world")
  }

  return viewModel
}

