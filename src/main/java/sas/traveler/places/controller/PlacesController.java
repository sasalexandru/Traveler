package sas.traveler.places.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import sas.traveler.places.entity.PlacesEntity;
import sas.traveler.places.service.PlaceService;

import sas.traveler.places.repository.PlacesRepository;


import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("place")
@CrossOrigin(origins = "http://localhost:4200")
public class PlacesController {
    @Autowired
    private PlaceService placeService;
    @Autowired
    private PlacesRepository placesRepository;

    @GetMapping
    public List<PlacesEntity> findAll() {
        return placeService.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<PlacesEntity> find(@PathVariable("id") Long id) {
        return ResponseEntity.of(placeService.find(id));
    }

    @PostMapping
    public PlacesEntity save(@RequestBody PlacesEntity place) {
        return placeService.save(place);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@PathVariable("id") Long id) {
        try {
            placeService.delete(id);
            return ResponseEntity.ok().build();
        } catch (Exception e) {
            return ResponseEntity.status(500).body(e);
        }
    }

    @PostMapping("/saveWithImage")
    public ResponseEntity uploadImage(@RequestParam("imageFile") MultipartFile file, @RequestParam("placeN")
            String placeName, @RequestParam("placeA") String placeAddress , @RequestParam("placeD") String placeDescription) throws IOException {
        System.out.println("Original Image Byte Size - " + file.getBytes().length);
        System.out.println("Place Name " + placeName );
        System.out.println("Place Address " + placeAddress );
        System.out.println("Place Description " + placeDescription );
        PlacesEntity places = new PlacesEntity(placeName, placeAddress ,placeDescription, file.getOriginalFilename(), file.getContentType(),
                file.getBytes());
        placesRepository.save(places);
        return ResponseEntity.ok().build();
    }

}
