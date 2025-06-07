package com.biosense.BioSense_service.auth.controller;


import com.biosense.BioSense_service.auth.entities.RefreshToken;
import com.biosense.BioSense_service.auth.entities.User;
import com.biosense.BioSense_service.auth.repository.UserRepository;
import com.biosense.BioSense_service.auth.service.AuthService;
import com.biosense.BioSense_service.auth.service.JwtService;
import com.biosense.BioSense_service.auth.service.RefreshTokenService;
import com.biosense.BioSense_service.auth.utils.AuthResponse;
import com.biosense.BioSense_service.auth.utils.LoginRequest;
import com.biosense.BioSense_service.auth.utils.RefreshTokenRequest;
import com.biosense.BioSense_service.auth.utils.RegisterRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/api/v1/auth")
public class AuthController {
    private final AuthService authService;
    private final RefreshTokenService refreshTokenService;
    private final JwtService jwtService;

    public AuthController(AuthService authService, UserRepository userRepository, RefreshTokenService refreshTokenService, JwtService jwtService) {
        this.authService = authService;
        this.refreshTokenService = refreshTokenService;
        this.jwtService = jwtService;
    }



    @PostMapping("/register")
    public ResponseEntity<AuthResponse> registerHandler(@RequestBody RegisterRequest registerRequest){
        return ResponseEntity.ok(authService.register(registerRequest));
    }


    @PostMapping("/login")
    public ResponseEntity<AuthResponse> loginHandler(@RequestBody LoginRequest loginRequest){
        return ResponseEntity.ok(authService.login(loginRequest));
    }






    @PostMapping("/refresh")
    public ResponseEntity<AuthResponse> refreshTokenHandler(@RequestBody RefreshTokenRequest refreshTokenRequest){
        RefreshToken refreshToken = refreshTokenService.verifyRefreshToken(refreshTokenRequest.getRefreshToken());
        User user = refreshToken.getUser();
        String accessToken = jwtService.generateToken(user);

        return ResponseEntity.ok(AuthResponse.builder()
                .accessToken(accessToken)
                .refreshToken(refreshToken.getRefreshToken())
                .build());

    }

}