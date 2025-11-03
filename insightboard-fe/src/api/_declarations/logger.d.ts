export interface GetStatsReq {

}

export interface GetStatsRes {
    usersActive: number,
    avgResponseTime: number,
    errors: number,
    timestamp: string,
}