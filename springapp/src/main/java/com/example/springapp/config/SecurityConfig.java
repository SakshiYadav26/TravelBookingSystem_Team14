package com.example.springapp.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import com.example.springapp.model.Permission;
import com.example.springapp.model.Role;

import lombok.RequiredArgsConstructor;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
@EnableMethodSecurity(prePostEnabled = true)
public class SecurityConfig {

  private final JWTAuthenticationFilter jwtAuthFilter;
  private final AuthenticationProvider authenticationProvider;

  @Bean
  public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
    http
        .cors()
        .and()
        .csrf()
        .disable()
        .authorizeRequests()
        .antMatchers("/api/v1/auth/**").permitAll()
        .antMatchers("/customer/**")
        .hasAnyRole(Role.CUSTOMER.name(), Role.AGENT.name())
        .antMatchers(HttpMethod.GET, "/customer/**")
        .hasAnyAuthority(Permission.CUSTOMER_READ.name(), Permission.AGENT_READ.name())
        .antMatchers(HttpMethod.POST, "/customer/**")
        .hasAnyAuthority(Permission.CUSTOMER_CREATE.name(), Permission.AGENT_CREATE.name())
        .antMatchers(HttpMethod.PUT, "/customer/**")
        .hasAnyAuthority(Permission.CUSTOMER_UPDATE.name(), Permission.AGENT_UPDATE.name())
        .antMatchers(HttpMethod.DELETE, "/customer/**")
        .hasAnyAuthority(Permission.CUSTOMER_DELETE.name(), Permission.AGENT_DELETE.name())
        .antMatchers("/agent/**").hasRole(Role.AGENT.name())
        .antMatchers(HttpMethod.GET, "/agent/**").hasAuthority(Permission.AGENT_READ.name())
        .antMatchers(HttpMethod.POST, "/agent/**").hasAuthority(Permission.AGENT_CREATE.name())
        .antMatchers(HttpMethod.PUT, "/agent/**").hasAuthority(Permission.AGENT_UPDATE.name())
        .antMatchers(HttpMethod.DELETE, "/agent/**").hasAuthority(Permission.AGENT_DELETE.name())
        .anyRequest()
        .authenticated()
        .and()
        .sessionManagement()
        .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
        .and()
        .authenticationProvider(authenticationProvider)
        .addFilterBefore(jwtAuthFilter, UsernamePasswordAuthenticationFilter.class);

    return http.build();
  }
}
