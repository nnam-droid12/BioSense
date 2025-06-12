package com.biosense.BioSense_service.auth.repository;


import com.biosense.BioSense_service.auth.entities.ForgotPassword;
import com.biosense.BioSense_service.auth.entities.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.Optional;

public interface ForgotPasswordRepository extends MongoRepository<ForgotPassword, Integer> {


    @Query("select fp from ForgotPassword fp where fp.otp =?1 and fp.user=?2")
    Optional<ForgotPassword> findByOtpAndUser(Integer otp, User user);

    Optional<ForgotPassword> findByUser(User user);
}
