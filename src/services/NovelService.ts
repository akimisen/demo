import ApiService from './ApiService'

export async function apiGetNovelList<T, U extends Record<string, unknown>>(
    params: U,
) {
    return ApiService.fetchDataWithAxios<T>({
        url: '/novels',
        method: 'get',
        params,
    })
}

export async function apiGetNovelDetail<T>(id: string) {
    return ApiService.fetchDataWithAxios<T>({
        url: `/novels/${id}`,
        method: 'get',
    })
}

export async function apiCreateNovel<T, U extends Record<string, unknown>>(data: U) {
    return ApiService.fetchDataWithAxios<T>({
        url: '/novels',
        method: 'post',
        data,
    })
}

export async function apiUpdateNovel<T, U extends Record<string, unknown>>(
    id: string,
    data: U
) {
    return ApiService.fetchDataWithAxios<T>({
        url: `/novels/${id}`,
        method: 'put',
        data,
    })
}

export async function apiDeleteNovel<T>(id: string) {
    return ApiService.fetchDataWithAxios<T>({
        url: `/novels/${id}`,
        method: 'delete',
    })
}

export async function apiGetChapterList<T, U extends Record<string, unknown>>({
    novelId,
    ...params
}: U) {
    // 确保 URL 格式正确
    const url = `/novels/${novelId}/chapters`;
    console.log('NovelService - apiGetChapterList:', {
        novelId,
        constructedUrl: url,
        fullParams: params
    });
    return ApiService.fetchDataWithAxios<T>({
        url: `/novels/${novelId}/chapters`,
        method: 'get',
        params,
    })
}

export async function apiGetChapterDetail<T>(novelId: string, chapterId: string) {
    return ApiService.fetchDataWithAxios<T>({
        url: `/novels/${novelId}/chapters/${chapterId}`,
        method: 'get',
    })
}

export async function apiCreateChapter<T, U extends Record<string, unknown>>(
    novelId: string,
    data: U
) {
    return ApiService.fetchDataWithAxios<T>({
        url: `/novels/${novelId}/chapters`,
        method: 'post',
        data,
    })
}

export async function apiUpdateChapter<T, U extends Record<string, unknown>>(
    novelId: string|undefined,
    chapterId: string,
    data: U
) {
    return ApiService.fetchDataWithAxios<T>({
        url: `/novels/${novelId}/chapters/${chapterId}`,
        method: 'put',
        data,
    })
}

export async function apiDeleteChapter<T>(novelId: string, chapterId: string) {
    return ApiService.fetchDataWithAxios<T>({
        url: `/novels/${novelId}/chapters/${chapterId}`,
        method: 'delete',
    })
} 