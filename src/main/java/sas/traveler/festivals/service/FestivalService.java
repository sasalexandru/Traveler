package sas.traveler.festivals.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import sas.traveler.festivals.entity.FestivalEntity;
import sas.traveler.festivals.repository.FestivalRepository;

import java.util.List;
import java.util.Optional;

@Service
public class FestivalService {
    @Autowired
    private FestivalRepository festivalRepository;

    public FestivalEntity save(FestivalEntity user) {
        return festivalRepository.save(user);
    }

    public Optional<FestivalEntity> find(Long id) {
        return festivalRepository.findById(id);
    }

    public List<FestivalEntity> findAll() {
        return festivalRepository.findAll();
    }

    public void delete(Long id) {
        festivalRepository.deleteById(id);
    }
}
