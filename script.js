const apiUrl = "http://localhost:8000"

function showRegister() {
  document.getElementById("auth").style.display = "none"
  document.getElementById("register").style.display = "block"
}

function showLogin() {
  document.getElementById("auth").style.display = "block"
  document.getElementById("register").style.display = "none"
}

function login() {
  const username = document.getElementById("username").value
  const password = document.getElementById("password").value

  console.log("Login data:", { username, password }) // Log the data being sent

  fetch(`${apiUrl}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  })
    .then((response) => {
      if (!response.ok) {
        return response.json().then((err) => {
          throw err
        })
      }
      return response.json()
    })
    .then((data) => {
      if (data.access_token) {
        localStorage.setItem("token", data.access_token)
        document.getElementById("auth").style.display = "none"
        document.getElementById("content").style.display = "block"
        getTarefas()
      } else {
        alert("Login failed")
      }
    })
    .catch((error) => console.error("Error:", error))
}

function register() {
  const username = document.getElementById("reg_username").value
  const password = document.getElementById("reg_password").value

  console.log("Register data:", { username, password }) // Log the data being sent

  fetch(`${apiUrl}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  })
    .then((response) => {
      if (!response.ok) {
        return response.json().then((err) => {
          throw err
        })
      }
      return response.json()
    })
    .then((data) => {
      if (data.message === "User created") {
        // Limpar os campos de registro
        document.getElementById("reg_username").value = ""
        document.getElementById("reg_password").value = ""
        alert("Usuário registrado com sucesso! Agora você pode fazer login.")
        showLogin()
      } else {
        alert("Registration failed")
      }
    })
    .catch((error) => console.error("Error:", error))
}

function getTarefas() {
  fetch(`${apiUrl}/tarefas`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const tarefasList = document.getElementById("tarefas-list")
      tarefasList.innerHTML = ""
      data.forEach((tarefa) => {
        const li = document.createElement("li")
        li.textContent = `${tarefa.title} - ${tarefa.description} - ${tarefa.due_date}`

        const deleteButton = document.createElement("button")
        deleteButton.textContent = "Delete"
        deleteButton.onclick = () => deleteTarefa(tarefa.id)

        li.appendChild(deleteButton)
        tarefasList.appendChild(li)
      })
    })
    .catch((error) => console.error("Error:", error))
}

function addTarefa() {
  const title = document.getElementById("tarefa_title").value
  const description = document.getElementById("tarefa_description").value
  const due_date = document.getElementById("tarefa_due_date").value

  console.log("Add Tarefa data:", { title, description, due_date }) // Log the data being sent

  fetch(`${apiUrl}/tarefas`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    body: JSON.stringify({ title, description, due_date }),
  })
    .then((response) => {
      if (!response.ok) {
        return response.json().then((err) => {
          throw err
        })
      }
      return response.json()
    })
    .then((data) => {
      if (data.message === "Tarefa created") {
        getTarefas()

        // Limpar os campos de entrada
        document.getElementById("tarefa_title").value = ""
        document.getElementById("tarefa_description").value = ""
        document.getElementById("tarefa_due_date").value = ""
      } else {
        alert("Failed to add tarefa")
      }
    })
    .catch((error) => console.error("Error:", error))
}

function deleteTarefa(tarefaId) {
  console.log(`Deleting tarefa with ID: ${tarefaId}`) // Log the tarefa ID being deleted

  fetch(`${apiUrl}/tarefas/${tarefaId}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  })
    .then((response) => {
      if (!response.ok) {
        return response.json().then((err) => {
          throw err
        })
      }
      return response.json()
    })
    .then((data) => {
      if (data.message === "Tarefa deleted") {
        getTarefas()
      } else {
        alert("Failed to delete tarefa")
      }
    })
    .catch((error) => console.error("Error:", error))
}

function logout() {
  localStorage.removeItem("token")
  document.getElementById("content").style.display = "none"
  document.getElementById("auth").style.display = "block"
}
