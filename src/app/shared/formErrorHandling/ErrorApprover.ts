

export abstract class ErrorApprover {
    protected _successor: ErrorApprover;
    protected hasError: boolean = false;
    setSuccessor(successor: ErrorApprover) {
        this._successor = successor;
    }
    abstract ProccessRequest(error: any, setErrorMsg: SetErrorMessage): void;
    setNextProccessor(errorMsg: string, error: any, setErrorMsg: SetErrorMessage) {
        setErrorMsg(errorMsg);
        if (!this.hasError && this._successor != null)
            this._successor.ProccessRequest(error, setErrorMsg);
    }
}

export interface SetErrorMessage {
    (message: string): void;
}