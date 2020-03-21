import { openNotification } from './openNotification';
import { v4 as uuidv4 } from 'uuid';

export const onFormSubmit = () => {
    const uniqueID = uuidv4();
        const addTodo = [...todos];

        if (form.length < 5) {
          openNotification(
            'bottomLeft',
            'Title must be a minimum of 5 letters'
          );
        } else {
          addTodo.push({
            key: uniqueID,
            title: form,
            dataIndex: todos.length
          });
          //handleTodos(addTodo, "test form");
          //setTodos(addTodo);

          const tempComplete = [...completed];

          tempComplete.push({
            key: uniqueID,
            dataindex: todos.length,
            completed: 'false'
          });

          setCompleted(tempComplete);
        }
}

