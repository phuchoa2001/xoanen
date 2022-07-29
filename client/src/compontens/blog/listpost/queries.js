import { useQuery } from 'react-query';

import { userApi } from 'api/userApi';

const userKeys = {
    all: ['users'],
    lists: () => [...userKeys.all, 'lists'],
    list: (filter) => [...userKeys.lists(), filter],
    details: () => [...userKeys.all, 'detail'],
    detail: (id) => [...userKeys.details(), id],
};

export const useUsers = ({ params, options } = {}) => {
    return useQuery({
        queryKey: userKeys.list(params),
        queryFn: () => userApi.getAll(params),
        ...options,
    });
};
