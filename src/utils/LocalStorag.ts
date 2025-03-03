export function setItemToLocalStorage(key: string, value: string): void {
    localStorage.setItem(key, value);
}

export function getItemFromLocalStorage(key: string) {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
}

export function removeItemFromLocalStorage(key: string) {
    localStorage.removeItem(key);
}
