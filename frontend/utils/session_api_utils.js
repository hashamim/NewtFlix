export const createUser = (user) => ($.ajax({
    method: 'POST',
    url: 'api/users',
    data: {user},
}))

export const createSession = (user) => ($.ajax({
    method: 'POST',
    url: '/api/session',
    data: {user},
}));

export const destroySession = () => ($.ajax({
    method: 'DELETE',
    url: '/api/session',
}))