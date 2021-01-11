package sas.traveler.places.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import sas.traveler.places.entity.PlacesEntity;

public interface PlacesRepository extends JpaRepository<PlacesEntity,Long> {
}
