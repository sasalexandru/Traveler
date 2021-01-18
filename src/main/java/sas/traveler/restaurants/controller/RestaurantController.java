package sas.traveler.restaurants.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import sas.traveler.restaurants.entity.RestaurantEntity;
import sas.traveler.restaurants.repository.RestaurantRepository;
import sas.traveler.restaurants.service.RestaurantService;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/restaurants")
@CrossOrigin(origins = "http://localhost:4200")
public class RestaurantController {

    @Autowired
    private RestaurantRepository restaurantRepository;
    @Autowired
    private RestaurantService restaurantService;


    @GetMapping
    public List<RestaurantEntity> findAll() {
        return restaurantService.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<RestaurantEntity> find(@PathVariable("id") Long id) {
        return ResponseEntity.of(restaurantService.find(id));
    }

    @PostMapping
    public RestaurantEntity save(@RequestBody RestaurantEntity restaurant) {
        return restaurantService.save(restaurant);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@PathVariable("id") Long id) {
        try {
            restaurantService.delete(id);
            return ResponseEntity.ok().build();
        } catch (Exception e) {
            return ResponseEntity.status(500).body(e);
        }
    }
    @PostMapping("/saveWithImage")
    public ResponseEntity uploadImage(@RequestParam("imageFile") MultipartFile file, @RequestParam("restaurantName") String restaurantName, @RequestParam("restaurantAddress")
            String restaurantAddress, @RequestParam("restaurantUrl") String restaurantUrl) throws IOException {
        System.out.println("Image Byte Size - " + file.getBytes().length);
        System.out.println("Restaurant Name " + restaurantName );
        System.out.println("Restaurant address " + restaurantAddress );
        System.out.println("Restaurant url " + restaurantUrl);
        RestaurantEntity restaurantEntity = new RestaurantEntity(restaurantName,restaurantAddress, file.getOriginalFilename(),restaurantUrl,  file.getContentType(),
                file.getBytes());
        restaurantRepository.save(restaurantEntity);
        return ResponseEntity.ok().build();
    }
}
