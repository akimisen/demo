import ApiService from './ApiService'

export async function apiGetWritingDashboard<T>() {
    return ApiService.fetchDataWithAxios<T>({
        url: '/api/kanban',
        method: 'get',
    })
}

export async function apiGetNovels<T>() {
    return ApiService.fetchDataWithAxios<T>({
        url: '/api/novels',
        method: 'get',
    })
}

export async function apiGetNovel<T, U extends Record<string, unknown>>({
    id,
    ...params
}: U) {
    return ApiService.fetchDataWithAxios<T>({
        url: `/api/novels/${id}`,
        method: 'get',
        params,
    })
} 