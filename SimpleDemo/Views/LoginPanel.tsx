﻿namespace Demo.Views {
    export function loginPanel(userId: string): JSX.Element {
        return (
            <div className="login-panel">
                <div className="dialog-row">
                    <label htmlFor="user-id">User id: </label>
                    <input type="text" id="user-id" defaultValue={userId} />
                </div>
                <div className="dialog-row">
                    <label htmlFor="password">Password: </label>
                    <input type="password" id="password" />
                </div>
                <div className="button-panel">
                    <button type="button">OK</button>
                    <button type="button">Cancel</button>
                </div>
            </div>
        );
    }
}
