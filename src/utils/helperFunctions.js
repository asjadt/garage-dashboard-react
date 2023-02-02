export const getPermissions = (user) => {
    const tempPermissions = [];
    user.roles.map(el => {
        el.permissions.map(el2 => {
            tempPermissions.push(el2.name)
        })
    })
    return tempPermissions;
}

export const checkPermissions = (permissionForCheck, permissions) => {
    if (permissions) {
        return permissionForCheck.some(el => {
            return permissions.includes(el);
        })
    }
}