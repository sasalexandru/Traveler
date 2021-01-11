package sas.traveler.users.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import sas.traveler.users.entity.UserEntity;
import sas.traveler.users.repository.UserRepository;
import sas.traveler.users.service.UserService;

import java.util.List;

@RestController
@RequestMapping("user")
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {
    @Autowired
    private UserService userService;
    private UserRepository userRepository;

    @GetMapping
    public List<UserEntity> findAll() {
        return userService.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<UserEntity> find(@PathVariable("id") Long id) {
        return ResponseEntity.of(userService.find(id));
    }

    @PostMapping
    public UserEntity save(@RequestBody UserEntity user) {
        return userService.save(user);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@PathVariable("id") Long id) {
        try {
            userService.delete(id);
            return ResponseEntity.ok().build();
        } catch (Exception e) {
            return ResponseEntity.status(500).body(e);
        }
    }


    @PutMapping("/update/{id}")
    public ResponseEntity<UserEntity> update(@RequestBody UserEntity user) {
        UserEntity userEntity = userService.find(user.getId()).orElse(new UserEntity());
        userEntity.setFirstName(user.getFirstName());
        userEntity.setLastName(user.getLastName());
        userEntity.setUserName(user.getUserName());
        userEntity.setPassword(user.getPassword());
        userEntity.seteMail(user.geteMail());

        return ResponseEntity.ok(userEntity);


    }

//    @CrossOrigin(origins = "http://localhost:4200")
//    @PutMapping("/{id}")
//    public ResponseEntity<UserEntity> updateTutorial(@PathVariable("id") long id, @RequestBody UserEntity userDetails) {
//        Optional<UserEntity> userEntity = userService.find(id);
//
//        if (userEntity.isPresent()) {
//            UserEntity _userEntity = userEntity.get();
//            _userEntity.setFirstName(userDetails.getFirstName());
//            _userEntity.setLastName(userDetails.getLastName());
//            _userEntity.setUserName(userDetails.getUserName());
//            _userEntity.setPassword(userDetails.getPassword());
//            _userEntity.seteMail(userDetails.geteMail());
//            return new ResponseEntity<>(userService.save(_userEntity), HttpStatus.OK);
//        } else {
//            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
//        }
//    }

}
