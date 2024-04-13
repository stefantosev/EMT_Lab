package mk.ukim.finki.service;

import mk.ukim.finki.model.Country;
import mk.ukim.finki.model.dto.CountryDTO;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public interface CountryService {
    List<Country> listCountries();
    Optional<Country> findCountryById(Long id);
    Optional<Country> findCountryByName(String name);
    void deleteById(Long id);
    void update(Country country);
    void addNewCountry(Country country);
}
