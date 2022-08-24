export interface Process{
    programmerName: string,
    operation: string,
    operator1: number,
    operator2: number,
    maximumTime: number,
    programId: number,
    result? : number,
    batchNumber? : number
}

export interface BatchProcess{
    pendingBatches : number,
    currentBatch : Process[],
    elapsedTime : number,
    executingProcess : Process | null,
    doneProcesses: Process[],
    globalCounter : number
}