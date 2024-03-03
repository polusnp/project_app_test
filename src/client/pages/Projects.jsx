// Імпортуємо React та useState
import React, { useState } from "react"
import { TiDelete } from "react-icons/ti"

// Створюємо компонент Projects
function Projects() {
  // Створюємо стан для зберігання списку проєктів
  const [projects, setProjects] = useState([
    // Початковий список проєктів
    {
      id: 1,
      name: "Project for example",
      tasks: ["Task 1", "Task 2"],
      comments: ["Comment 1", "Comment 2"],
    },
  ])

  // Створюємо функцію для додавання нового проєкту
  const addProject = () => {
    // Генеруємо унікальний ідентифікатор для нового проєкту
    const newId = Math.max(...projects.map((p) => p.id)) + 1
    // Створюємо новий проєкт з порожнім ім'ям, завданнями та коментарями
    const newProject = { id: newId, name: "", tasks: [], comments: [] }
    // Додаємо новий проєкт до списку проєктів
    setProjects([...projects, newProject])
  }

  // Створюємо функцію для видалення проєкту за ідентифікатором
  const deleteProject = (id) => {
    // Фільтруємо список проєктів, залишаючи тільки ті, що не мають даного ідентифікатора
    const filteredProjects = projects.filter((p) => p.id !== id)
    // Оновлюємо список проєктів
    setProjects(filteredProjects)
  }

  // Створюємо функцію для зміни імені проєкту за ідентифікатором
  const changeName = (id, newName) => {
    // Знаходимо проєкт за ідентифікатором
    const project = projects.find((p) => p.id === id)
    // Якщо проєкт знайдено, змінюємо його ім'я на нове
    if (project) {
      project.name = newName
      // Оновлюємо список проєктів
      setProjects([...projects])
    }
  }

  // Створюємо функцію для додавання нового завдання до проєкту за ідентифікатором
  const addTask = (id) => {
    // Знаходимо проєкт за ідентифікатором
    const project = projects.find((p) => p.id === id)
    // Якщо проєкт знайдено, додаємо до нього порожнє завдання
    if (project) {
      project.tasks.push("")
      // Оновлюємо список проєктів
      setProjects([...projects])
    }
  }

  // Створюємо функцію для видалення завдання з проєкту за індексами
  const deleteTask = (projectId, taskIndex) => {
    // Знаходимо проєкт за ідентифікатором
    const project = projects.find((p) => p.id === projectId)
    // Якщо проєкт знайдено, видаляємо з нього завдання за індексом
    if (project) {
      project.tasks.splice(taskIndex, 1)
      // Оновлюємо список проєктів
      setProjects([...projects])
    }
  }

  // Створюємо функцію для зміни тексту завдання в проєкті за індексами
  const changeTask = (projectId, taskIndex, newTask) => {
    // Знаходимо проєкт за ідентифікатором
    const project = projects.find((p) => p.id === projectId)
    // Якщо проєкт знайдено, змінюємо текст завдання за індексом на новий
    if (project) {
      project.tasks[taskIndex] = newTask
      // Оновлюємо список проєктів
      setProjects([...projects])
    }
  }

  // Створюємо функцію для додавання нового коментаря до проєкту за ідентифікатором
  const addComment = (id) => {
    // Знаходимо проєкт за ідентифікатором
    const project = projects.find((p) => p.id === id)
    // Якщо проєкт знайдено, додаємо до нього порожній коментар
    if (project) {
      project.comments.push("")
      // Оновлюємо список проєктів
      setProjects([...projects])
    }
  }

  // Створюємо функцію для видалення коментаря з проєкту за індексами
  const deleteComment = (projectId, commentIndex) => {
    // Знаходимо проєкт за ідентифікатором
    const project = projects.find((p) => p.id === projectId)
    // Якщо проєкт знайдено, видаляємо з нього коментар за індексом
    if (project) {
      project.comments.splice(commentIndex, 1)
      // Оновлюємо список проєктів
      setProjects([...projects])
    }
  }

  // Створюємо функцію для зміни тексту коментаря в проєкті за індексами
  const changeComment = (projectId, commentIndex, newComment) => {
    // Знаходимо проєкт за ідентифікатором
    const project = projects.find((p) => p.id === projectId)
    // Якщо проєкт знайдено, змінюємо текст коментаря за індексом на новий
    if (project) {
      project.comments[commentIndex] = newComment
      // Оновлюємо список проєктів
      setProjects([...projects])
    }
  }

  // Повертаємо JSX, який відображає список проєктів та кнопку для додавання нового проєкту
  return (
    <div className="projects">
      <h1 className="text-4xl font-bold text-center py-6">My Projects</h1>
      <button
        className="bg-teal-500 hover:bg-teal-800 text-white hover:text-lime-300 px-4 py-2 rounded  mx-4 text-xl"
        onClick={addProject}
      >
        Create new project
      </button>
      <ul className="grid grid-cols-3 gap-4 px-4 py-10">
        {projects.map((project) => (
          // Для кожного проєкту відображаємо його ім'я, завдання, коментарі та кнопки для видалення та редагування
          <li
            key={project.id}
            className="border border-gray-300 shadow-lg p-2 rounded bg-slate-200"
          >
            <div className="py-4">
              <input
                type="text"
                placeholder="Project name"
                value={project.name}
                onChange={(e) => changeName(project.id, e.target.value)}
                className="w-full border border-gray-300 p-1 rounded"
              />
              <div className="flex justify-between items-center ">
                <button
                  className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded w-1/3"
                  onClick={() => deleteProject(project.id)}
                >
                  <div className="flex flex-row justify-center items-center">
                    <p className="">Delete project</p>
                    <TiDelete className="text-2xl" />
                  </div>
                </button>
                <button
                  className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded w-1/3"
                  onClick={() => addTask(project.id)}
                >
                  Add task +
                </button>
                <button
                  className="bg-yellow-500 hover:bg-yellow-600 text-white px-2 py-1 rounded w-1/3"
                  onClick={() => addComment(project.id)}
                >
                  Add comment +
                </button>
              </div>
            </div>

            <ul className="list-disc pl-4">
              {project.tasks.map((task, index) => (
                // Для кожного завдання відображаємо його текст та кнопку для видалення
                <li key={index} className="flex items-center">
                  <input
                    type="text"
                    value={task}
                    onChange={(e) =>
                      changeTask(project.id, index, e.target.value)
                    }
                    className="w-full border border-gray-300 p-1 rounded"
                  />
                  {/* <button
                    className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded"
                    onClick={() => deleteTask(project.id, index)}
                  >
                    <TiDelete />
                  </button> */}
                  <TiDelete
                    className="text-4xl text-red-600 hover:text-red-500 hover:cursor-pointer"
                    onClick={() => deleteTask(project.id, index)}
                  />
                </li>
              ))}
            </ul>
            <ul className="list-disc pl-4">
              {project.comments.map((comment, index) => (
                // Для кожного коментаря відображаємо його текст та кнопку для видалення
                <li key={index} className="flex items-center">
                  <input
                    type="text"
                    value={comment}
                    onChange={(e) =>
                      changeComment(project.id, index, e.target.value)
                    }
                    className="w-full border border-gray-300 p-1 rounded"
                  />
                  <TiDelete
                    className="text-4xl text-red-600 hover:text-red-500 hover:cursor-pointer"
                    onClick={() => deleteComment(project.id, index)}
                  />
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Projects
