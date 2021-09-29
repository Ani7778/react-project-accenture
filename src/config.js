const {
    REACT_APP_ACCESS_KEY_ID,
    REACT_APP_SECRET_ACCESS_KEY,
} = process.env

export const aws = {
    accessKeyId: REACT_APP_ACCESS_KEY_ID,
    secretAccessKey: REACT_APP_SECRET_ACCESS_KEY,
}
