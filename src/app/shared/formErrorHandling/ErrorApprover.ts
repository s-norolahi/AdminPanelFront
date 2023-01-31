

export abstract class ErrorApprover {
    protected _successor: ErrorApprover;
    setSuccessor(successor: ErrorApprover) {
        this._successor = successor;
    }
    abstract ProccessRequest(error: any, setErrorMsg: SetErrorMessage): void;
}

export interface SetErrorMessage {
    (message: string): void;
}