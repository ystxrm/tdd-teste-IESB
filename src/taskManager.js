export function validateTitle(title) {
    if (typeof title !== "string") return false;
    title = title.trim();
    if (title.length <3) return false;
    if (title === '') return false;
    if (title === null) return false;
    if (title === undefined) return false;
    if (Number.isNaN(Number(title)) === false) return false;
    return true;
}