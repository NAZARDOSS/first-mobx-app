import { observer } from 'mobx-react';
import todoFormViewStore from './TodoLangViewStore';

const TodoFormView = observer(() => {
  const handleLanguageChange = (event) => {
    todoFormViewStore.setLanguage(event.target.value);
  };

  return (
    <>
      <label>Language:</label>
      <select id="languageSelect" onChange={handleLanguageChange} value={todoFormViewStore.language}>
        <option value="English">English</option>
        <option value="German">German</option>
        <option value="Ukrainian">Ukrainian</option>
        <option value="Armenian">Armenian</option>
      </select>
      <p>{todoFormViewStore.message}</p>
    </>
  );
});

export default TodoFormView;