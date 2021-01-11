package sas.traveler.festivals.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import sas.traveler.festivals.entity.FestivalEntity;
import sas.traveler.festivals.repository.FestivalRepository;
import sas.traveler.festivals.service.FestivalService;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/festival")
@CrossOrigin(origins = "http://localhost:4200")
public class FestivalController {

    @Autowired
    private FestivalService festivalService;
    @Autowired
    private FestivalRepository festivalRepository;


    @GetMapping
    public List<FestivalEntity> findAll() {

        return festivalService.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<FestivalEntity> find(@PathVariable("id") Long id) {
        return ResponseEntity.of(festivalService.find(id));
    }
    @PostMapping
    public FestivalEntity save(@RequestBody FestivalEntity festival) {

        return festivalService.save(festival);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@PathVariable("id") Long id) {
        try {
            festivalService.delete(id);
            return ResponseEntity.ok().build();
        } catch (Exception e) {
            return ResponseEntity.status(500).body(e);
        }
    }



    @PostMapping("/saveWithImage")
    public ResponseEntity uploadImage(@RequestParam("imageFile") MultipartFile file,@RequestParam("festivalN")
            String festivalName,@RequestParam("festivalD") String festivalDescription) throws IOException {
        System.out.println("Original Image Byte Size - " + file.getBytes().length);
        System.out.println("Festival Name " + festivalName );
        System.out.println("Festival Description " + festivalDescription );
        FestivalEntity festivalEntity = new FestivalEntity(festivalName,festivalDescription, file.getOriginalFilename(), file.getContentType(),
                file.getBytes());
        festivalRepository.save(festivalEntity);
        return ResponseEntity.ok().build();
    }

    @GetMapping(path = { "/get/{imageName}" })
    public FestivalEntity getImage(@PathVariable("imageName") String imageName) throws IOException {
        final Optional<FestivalEntity> retrievedImage = festivalRepository.findByFestivalName(imageName);
        FestivalEntity img = new FestivalEntity(retrievedImage.get().getFestivalImage(), retrievedImage.get().getType(),
                retrievedImage.get().getPicByte());
        return img;
    }

}
