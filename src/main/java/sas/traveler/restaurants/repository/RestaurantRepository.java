package sas.traveler.restaurants.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import sas.traveler.restaurants.entity.RestaurantEntity;

public interface RestaurantRepository extends JpaRepository<RestaurantEntity,Long> {

}
