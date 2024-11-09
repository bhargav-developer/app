const UsersMap = new Map();

const setUser =  (id,user) => {
    UsersMap.set(id,user)
}

const getUser = (id) => {
    return UsersMap.get(id);
}

export {setUser,getUser}

