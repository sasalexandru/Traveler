package sas.traveler.accommodation.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import sas.traveler.accommodation.entity.HotelEntity;
import sas.traveler.accommodation.repository.HotelRepository;
import sas.traveler.accommodation.service.HotelService;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/hotel")
@CrossOrigin(origins = "http://localhost:4200")
public class HotelController {


        @Autowired
        private HotelService hotelService;
        @Autowired
        private HotelRepository hotelRepository;

        @GetMapping
        public List<HotelEntity> findAll() {
            return hotelService.findAll();
        }

        @GetMapping("/{id}")
        public ResponseEntity<HotelEntity> find(@PathVariable("id") Long id) {
            return ResponseEntity.of(hotelService.find(id));
        }

        @PostMapping
        public HotelEntity save(@RequestBody HotelEntity hotel) {
            return hotelService.save(hotel);
        }

        @DeleteMapping("/{id}")
        public ResponseEntity<?> delete(@PathVariable("id") Long id) {
            try {
                hotelService.delete(id);
                return ResponseEntity.ok().build();
            } catch (Exception e) {
                return ResponseEntity.status(500).body(e);
            }
        }


    @PostMapping("/saveWithImage")
    public ResponseEntity uploadImage(@RequestParam("imageFile") MultipartFile file, @RequestParam("hotelName") String hotelName, @RequestParam("address")
            String address, @RequestParam("hotelDescription") String hotelDescription, @RequestParam("hotelUrl") String hotelUrl) throws IOException {
        System.out.println("Original Image Byte Size - " + file.getBytes().length);
        System.out.println("Hotel Name " + hotelName );
        System.out.println("Hotel address " + address );
        System.out.println("Hotel Description " + hotelDescription );
        System.out.println("Hotel url " + hotelUrl);
        HotelEntity hotelEntity = new HotelEntity(hotelName,address,hotelDescription, file.getOriginalFilename(),hotelUrl,  file.getContentType(),
                file.getBytes());
        hotelRepository.save(hotelEntity);
        return ResponseEntity.ok().build();
    }
}
