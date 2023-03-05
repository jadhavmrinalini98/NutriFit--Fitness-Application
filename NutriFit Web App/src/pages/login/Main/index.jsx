import styles from "./styles.module.css";

const Main = () => {
	const handleLogout = () => {
		localStorage.removeItem("token");
		window.location = "/login";
	};

	return (
		<div className={styles.main_container}>
				<br></br>
				<h1>Nutri.Fit</h1>
				<b><p style={{marginLeft:'40rem', marginTop:'5rem'}}>Welcome, User </p></b>
				<button style={{marginLeft:'40rem', marginTop:'5rem'}} className={styles.white_btn} onClick={handleLogout}>
					Logout
				</button>
			
		</div>
	);
};

export default Main;
