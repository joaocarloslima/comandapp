const TOKEN_KEY = 'token'
const url = process.env.NEXT_PUBLIC_BACKEND_SERVER_URL

export async function login(values){
    const res = await fetch(url + '/api/login', {
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
    const token = sessionStorage.getItem(TOKEN_KEY)
    sessionStorage.clear()
    const res = await fetch(url + '/api/logout', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + token,
        }
    })

}

