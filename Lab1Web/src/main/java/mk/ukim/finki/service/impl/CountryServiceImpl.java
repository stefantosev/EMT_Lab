package mk.ukim.finki.service.impl;

import mk.ukim.finki.model.Country;
import mk.ukim.finki.model.dto.CountryDTO;
import mk.ukim.finki.model.exceptions.InvalidCountryIDException;
import mk.ukim.finki.repository.CountryRepository;
import mk.ukim.finki.service.CountryService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service
public class CountryServiceImpl implements CountryService {

    final CountryRepository countryRepository;

    public CountryServiceImpl(CountryRepository countryRepository) {
        this.countryRepository = countryRepository;
    }

    @Override
    public List<Country> listCountries() {
        return countryRepository.findAll();
    }

    @Override
    public Optional<Country> findCountryById(Long id) {
        return countryRepository.findCountryById(id);
    }

    @Override
    public Optional<Country> findCountryByName(String name) {
        return countryRepository.findCountryByName(name);
    }

    @Override
    public void deleteById(Long id) {
        countryRepository.deleteById(id);
    }


    @Override
    public void update(Country country) {
        countryRepository.save(country);
    }

    @Override
    public void addNewCountry(Country country) {
        countryRepository.save(country);
    }
}
