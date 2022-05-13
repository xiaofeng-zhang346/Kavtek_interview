export const BASE_URL = 'https://randomuser.me/api';
export const ALL_USERS = 'ALL_USERS';
export const DETECT_STEP = 'DETECT_STEP';
export const SINGLE_USER = 'SINGLE_USER';
export const UPDATE_SINGLE_USER = 'UPDATE_SINGLE_USER';
export const steps = [
    '',
    '',
];

// yyyy-mm-dd to long date
export const dateConverter = date =>
    `${new Date(`${date}T00:00:00`).toLocaleDateString('en-us', {day: "numeric"})} ${new Date(date).toLocaleDateString('en-us', {month: "short"})}, ${new Date(date).toLocaleDateString('en-us', {year: "numeric"})}`