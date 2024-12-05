export const addTodoApi = async (title) => {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/todos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title })
        })
        const data = await res.json()
        console.log(data)
    } catch (err) {
        console.error(err)
    }
}
