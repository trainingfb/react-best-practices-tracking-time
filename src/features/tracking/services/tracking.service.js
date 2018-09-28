import { appSettings } from '../../../core/services';
const { headers, url } = appSettings;

/**
 * Get all tasks
 * @returns {Promise<*>}
 */
export async function getAllTasks() {
  try {
    const response = await fetch(`${url}/list`);
    return  { data:  await response.json() }
  } catch (error) {
    return { data: [], error: 'Server Problems'};
  }
}

/**
 * Edit Task
 * @param task
 * @returns {Promise<*>}
 */
export async function editTask(task) {
  try {
    const response = await fetch(`${url}/list/${task.id}`, {
      method: 'PATCH', headers,
      body: JSON.stringify(task)
    });
    return  { data:  await response.json() }
  } catch (error) {
    return { error: 'Server Problems'};
  }
}

/**
 * Add task
 * @param task
 * @returns {Promise<*>}
 */
export async function addTask(task) {
  const params = {
    ...task,
    creationDate: new Date().valueOf()
  };
  try {
    const response = await fetch(`${url}/list`, {
      method: 'POST', headers,
      body: JSON.stringify(params)
    });
    return  { data:  await response.json() }
  } catch (error) {
    return { error: 'Server Problems'};
  }
}


/**
 * Delete Task
 * @param id
 * @returns {Promise<*>}
 */
export async function deleteTask(id) {
  try {
    const response = await fetch(`${url}/list/${id}`, {
      method: 'DELETE', headers
    });
    return  { data:  await response.json() }
  } catch (error) {
    return { error: 'Server Problems'};
  }
}

