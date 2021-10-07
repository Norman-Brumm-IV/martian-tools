package net.revature.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import net.revature.models.Users;
import net.revature.service.UserService;

@RestController("recipeController")
@RequestMapping("/users")
public class userController {

	private UserService uService;
	
	@Autowired
	public userController(UserService usersService){
		System.out.println("controller constructor");
		this.uService=usersService;
	}
	
	@GetMapping(path="/all", produces=MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<List<Users>> getAll(){
		System.out.println("controller works");
		return new ResponseEntity<List<Users>>(this.uService.getAllUsers(), HttpStatus.OK);
	}
	
}
