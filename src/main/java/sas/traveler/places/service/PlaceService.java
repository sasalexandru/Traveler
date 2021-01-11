package sas.traveler.places.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import sas.traveler.places.entity.PlacesEntity;
import sas.traveler.places.repository.PlacesRepository;

import java.util.List;
import java.util.Optional;

@Service
public class PlaceService {

    @Autowired
    private PlacesRepository placesRepository;

    public PlacesEntity save(PlacesEntity place) {
        return placesRepository.save(place);
    }

    public Optional<PlacesEntity> find(Long id) {
        return placesRepository.findById(id);
    }

    public List<PlacesEntity> findAll() {
        return placesRepository.findAll();
    }

    public void delete(Long id) {
        placesRepository.deleteById(id);
    }
}
