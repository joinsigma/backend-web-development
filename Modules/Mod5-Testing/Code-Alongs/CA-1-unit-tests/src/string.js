export const returnUpperCase = (sentence) => {
    return sentence.toUpperCase();
}

export const convertToUpperCase = (sentence) => {
    if (returnUpperCase(sentence) === sentence) {
        return sentence;
    }
    return returnUpperCase(sentence);
}