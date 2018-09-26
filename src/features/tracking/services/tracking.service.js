export const config = {
  url: 'http://localhost:3001',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
};

const { headers, url } = config;

export async function getAll() {
  try {
    const response = await fetch(`${url}/list`);
    return  { data:  await response.json() }
  } catch (error) {
    return { data: [], error: 'Server Problems'};
  }
}


export async function editTask(task) {
  try {
    const response = await fetch(`${url}/list/${task.id}`, {
      method: 'PATCH',
      headers,
      body: JSON.stringify(task)
    });
    return  { data:  await response.json() }
  } catch (error) {
    return { error: 'Server Problems'};
  }
}


export async function addTask(task) {
  const params = {
    ...task,
    creationDate: new Date().valueOf()
  }
  try {
    const response = await fetch(`${url}/list`, {
      method: 'POST',
      headers,
      body: JSON.stringify(params)
    });
    return  { data:  await response.json() }
  } catch (error) {
    return { error: 'Server Problems'};
  }
}


export async function deleteTask(id) {
  try {
    const response = await fetch(`${url}/list/${id}`, {
      method: 'DELETE',
      headers,
    });
    return  { data:  await response.json() }
  } catch (error) {
    return { error: 'Server Problems'};
  }
}

