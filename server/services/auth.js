const UsersMap = new Map();

const setUser = (id,user) => {
    UsersMap.set(id,user)
}

const getUser = (id) => {
    console.log(UsersMap)
    return UsersMap.get(id);
}

export {setUser,getUser}

