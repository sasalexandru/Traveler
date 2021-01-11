package sas.traveler.accommodation.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import sas.traveler.accommodation.entity.HotelEntity;
import sas.traveler.accommodation.repository.HotelRepository;

import java.util.List;
import java.util.Optional;

@Service
public class HotelService {

        @Autowired
        private HotelRepository hotelRepository;

        public HotelEntity save(HotelEntity hotel) {
            return hotelRepository.save(hotel);
        }

        public Optional<HotelEntity> find(Long id) {
            return hotelRepository.findById(id);
        }

        public List<HotelEntity> findAll() {
            return hotelRepository.findAll();
        }

        public void delete(Long id) {
            hotelRepository.deleteById(id);
        }

}
