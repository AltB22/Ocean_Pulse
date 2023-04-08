import decode from "jwt-decode";

class AuthService {
    //Finds user with the decoded JWT token for the local storage
	getUser() {
		return decode(this.getToken());
	}
    //Checks to see if a token is present 
	loggedIn() {
		const token = this.getToken();
		return token && !this.isTokenExpired(token) ? true : false;
	}
    //checks for expired token
	isTokenExpired(token) {
		const decoded = decode(token);
		if (decoded.exp < Date.now() / 1000) {
			localStorage.removeItem("id_token");
			return true;
		}
		return false;
	}

    //Gets the token from local storage
	getToken() {
		return localStorage.getItem("id_token");
	}

    //Stores the token in local storage
	login(idToken) {
		localStorage.setItem("id_token", idToken);
		window.location.assign("/");
	}
    //Removes the Token from local storage and reloads the page.
	logout() {
		localStorage.removeItem("id_token");
		window.location.reload();
	}
}

export default new AuthService();
