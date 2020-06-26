

export interface BaseResponseDto<T> {

    status: 'success' | 'error';
    result: T;
    message: string;

}