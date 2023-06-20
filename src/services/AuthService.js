const TOKEN_KEY = 'token'

export async function login(values){
    const res = await fetch('http://localhost:8000/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(values)
    })
    
    const data = await res.json()
    if (data.error) 
        throw new Error(data.error)
    
    sessionStorage.setItem(TOKEN_KEY, data.data.token)
    sessionStorage.setItem('user', JSON.stringify(data.data.user))

}

export async function logout(){
    const res = await fetch('http://localhost:8000/api/logout', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + sessionStorage.getItem(TOKEN_KEY),
        }
    })

    sessionStorage.clear()
}

