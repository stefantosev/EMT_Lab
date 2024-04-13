package mk.ukim.finki.repository;
import mk.ukim.finki.model.Country;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface CountryRepository extends JpaRepository<Country, Long> {
    List<Country> findAll();
    Optional<Country> findCountryByName(String name);
    Optional<Country> findCountryById(Long id);
}