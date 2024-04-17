package app.internationalfavours.InternationalFavours;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@SpringBootApplication
@RestController
public class InternationalFavoursApplication {

	public static void main(String[] args) {
		SpringApplication.run(InternationalFavoursApplication.class, args);
	}

	@GetMapping
	public String hello() {
		return "Hello World";
	}
}

@RestController
class AuthenticationController {

	@CrossOrigin(origins = "http://localhost:3000") // Allow CORS only for this origin
	@PostMapping("/api/validate")
	public ResponseEntity<String> validateCredentials(@RequestBody UserCredentials credentials) {
		if ("admin@mail.com".equals(credentials.getEmail()) && "password".equals(credentials.getPassword())) {
			return ResponseEntity.ok("Credentials are valid.");
		} else {
			return ResponseEntity.badRequest().body("Invalid credentials.");
		}
	}
}

class UserCredentials {
	private String email;
	private String password;

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}
}


