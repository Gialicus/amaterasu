export const handleError = (error: unknown) => {
    if (error instanceof Error) {
        return error.message;
    }
    console.error(error);
    return "Unknown error";
}