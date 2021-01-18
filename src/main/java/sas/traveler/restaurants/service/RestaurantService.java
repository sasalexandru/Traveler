package sas.traveler.restaurants.service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import sas.traveler.restaurants.entity.RestaurantEntity;
import sas.traveler.restaurants.repository.RestaurantRepository;

import java.util.List;
import java.util.Optional;

@Service
public class RestaurantService {


    @Autowired
    private RestaurantRepository restaurantRepository;

    public RestaurantEntity save(RestaurantEntity restaurantEntity) {
        return restaurantRepository.save(restaurantEntity);
    }

    public Optional<RestaurantEntity> find(Long id) {
        return restaurantRepository.findById(id);
    }

    public List<RestaurantEntity> findAll() {
        return restaurantRepository.findAll();
    }

    public void delete(Long id) {
        restaurantRepository.deleteById(id);
    }

}
