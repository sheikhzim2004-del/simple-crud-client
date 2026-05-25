export const userData = async() => {
    const res = await fetch("http://localhost:8080/users");
    const data = await res.json();
    return data;
}


export const getUserById = async(userId) => {
    const res = await fetch(`http://localhost:8080/users/${userId}`);
    const data = await res.json();
    return data;
}

// export const getUserById = async(userId) => {
//     const res = await fetch(`http://localhost:8080/users/${userId}`);
//     const data = await res.json();
//     return data;
// }