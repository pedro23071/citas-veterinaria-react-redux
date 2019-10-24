export const getStateStorage = () => {
    const citasStorage = localStorage.getItem('citas');
    if (citasStorage === null) {
        return undefined;
    }
    return JSON.parse(citasStorage);
}

export const setStateStorage = state => {
    const citasStorage = JSON.stringify(state);
    localStorage.setItem('cita', citasStorage);
}