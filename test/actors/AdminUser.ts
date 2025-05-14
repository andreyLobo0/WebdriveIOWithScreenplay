interface Action {
    (): Promise<void>;
}
export class AdminUser {

    attemptTo = async (...actions: Action[]): Promise<void> => {
        for (const action of actions) {
            await action();
        }
    }
}