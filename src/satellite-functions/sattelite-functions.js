const parseStringToArray = stringValue =>
    stringValue.trim().split(' ').filter(name => name !== '');

export const getUniqueTypedUser = (existentUsers, inputValue) => {
    const parsedUsers = parseStringToArray(inputValue);
    const existentUsersNames = existentUsers.map(user => user.name);
    return (parsedUsers.filter(user => !existentUsersNames.includes(user)).toString())
};

export const arrayToStandardFormat = (arr) => {
    if(!arr) return

    return arr.map(item => {
        if (Object.keys(item).length > 1) {
            return {
                title: item[Object.keys(item)[0]],
                subTitle: item[Object.keys(item)[1]]
            }
        } else {
            return {
                title: Object.getOwnPropertyNames(item)[0],
                subTitle: item[Object.keys(item)[0]]
            }
        }
    })
};
