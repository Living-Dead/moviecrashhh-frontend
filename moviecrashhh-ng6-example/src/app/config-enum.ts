export enum Config {
	emailRegex = '^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$',
	passwordRegex = '^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$',
}