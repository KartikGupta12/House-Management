const uri = 'http://localhost:8000/user'
const check = async (jwt) => {
    const data = await fetch(uri, {
        method: 'POST',
        headers: {
            'content-Type': 'application/json',
        },
        body: JSON.stringify({
            'authToken': `${jwt}`
        })
    });
    const res = await data.json();
    console.log(res['authToken']);
    return (res['authToken'] === jwt);
};

export default check;