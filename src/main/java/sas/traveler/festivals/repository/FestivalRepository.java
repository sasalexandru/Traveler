package sas.traveler.festivals.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import sas.traveler.festivals.entity.FestivalEntity;

import java.util.Optional;

@Repository
public interface FestivalRepository extends JpaRepository<FestivalEntity,Long> {
    Optional<FestivalEntity> findByFestivalName(String festivalName);
}
