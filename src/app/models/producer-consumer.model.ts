export interface Subject{
    working: boolean
    idx : number,
    count: 0
}

export interface PCProblem{
    producer : Subject,
    consumer: Subject,
    turn: boolean | null,
    turnStatus : string,
    buffer: boolean[],
    workBufferSize : number,
}