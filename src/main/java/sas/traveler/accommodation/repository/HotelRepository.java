package sas.traveler.accommodation.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import sas.traveler.accommodation.entity.HotelEntity;

public interface HotelRepository extends JpaRepository<HotelEntity,Long> {
}
