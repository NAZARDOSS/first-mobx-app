import { makeAutoObservable } from 'mobx';

class TodoFormViewStore {
  language = 'English';
  time = 'Berlin';
  theme = 'white';
  message = 'MobX is a state management library for React that allows you to automatically track changes in state using a declarative approach. This helps to avoid excessive work with state management and makes the code simpler and more understandable.';

  constructor() {
    makeAutoObservable(this);
  }

  setLanguage(language) {
    this.language = language;

    switch (language) {
      case 'English':
        this.message = 'MobX is a state management library for React that allows you to automatically track changes in state using a declarative approach. This helps to avoid excessive work with state management and makes the code simpler and more understandable.';
        break;
      case 'Ukrainian':
        this.message = 'MobX - це стейт-менеджмент бібліотека для React, що дозволяє автоматично відслідковувати зміни в стані за допомогою декларативного підходу. Це допомагає уникнути надмірної роботи з управлінням стану та робить код більш простим та зрозумілим.';
        break;
      case 'Armenian':
        this.message = 'MobX - այն պահանջվող կարգաբերիչներից մեկն է React-ի համար, որը թույլ է տալիս ավտոմատ հսկողություն հենց ստատուսի մեջ կայքերում գործադրելու համար: Սա օգնում է հետաքրքրված աշխատակերպագիրը կառուցել և կամայականում կոդը պարզ ու հարմար դարձնելու համար:';
        break;
      case 'German':
        this.message = 'MobX ist eine State-Management-Bibliothek für React, mit der Änderungen des Zustands automatisch verfolgt werden können. Dies erfolgt durch einen deklarativen Ansatz, was dazu beiträgt, eine übermäßige Arbeit mit der Zustandsverwaltung zu vermeiden und den Code einfacher und verständlicher zu machen';
        break;
      default:
        this.message = 'MobX is a state management library for React that allows you to automatically track changes in state using a declarative approach. This helps to avoid excessive work with state management and makes the code simpler and more understandable.';
    }
  }
}

const todoFormViewStore = new TodoFormViewStore();

export default todoFormViewStore;
